function loadConfig() {
    const poolData = {
        UserPoolId: window._config.cognito.userPoolId,
        ClientId: window._config.cognito.userPoolClientId
    };
    
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    
    let email = cognitoUser.getUsername(); 
    email = email.replace("-at-", "@");
    
    async function addTask() {
        if (!cognitoUser) {
            console.log("Người dùng chưa đăng nhập.");
            return;
        }
    
        cognitoUser.getSession(async (err, session) => {
            if (err) {
                console.error(err);
                return;
            }
    
            const taskId = parseInt(document.getElementById("taskIdInput").value, 10);
            const description = document.getElementById('descriptionInput').value;
            const dueDateInputValue = document.getElementById('dueDateInput').value; 
    
    
    
            if (!taskId || !description || !dueDateInputValue) {
                alert("Vui lòng nhập đầy đủ thông tin.");
                return;
            }
    
            const dueDateInput = new Date(dueDateInputValue);
    
            if (isNaN(dueDateInput.getTime())) {
                alert("Ngày không hợp lệ.");
                return;
            } 
    
            // Chuyển đổi thành định dạng ISO 8601
            const dueDate = dueDateInput.toISOString(); 
    
            const addUrl = `${window._config.api.url}/add`;
    
            const databody1 = {
                email: email,
                task_id: taskId,
                DueDate: dueDateInputValue,
                Description: description
            };
    
    
            fetch(addUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(databody1)
            })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                alert(data.body)
                fetchTasks();
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Có lỗi xảy ra trong quá trình thêm task.");
            });
        })}
    
    
    function fetchTasks() {
        const signinurl = `${window._config.api.url}?email=${email}`; 
    
        const headers = {
            'Content-Type': 'application/json', 
        };
    
        fetch(signinurl, {
            method: 'GET', 
            headers: headers,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const tasks = data.body; 
            displayTasks(tasks); 
        })
        .catch(error => {
            console.error("Error fetching tasks:", error);
        });
    }
    
    // Hàm hiển thị danh sách task
    function displayTasks(tasks) {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = ''; 
    
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task-id">Task ID: ${task.TaskId}</span><br>
                <span class="description">Description: ${task.Description}</span><br>
                <span class="due-date">Due Date: ${task.DueDate}</span>
                <button class="delete-task" onclick="deleteTask(${task.TaskId})">Delete task</button>
            `;
            taskList.appendChild(li);
        });
    }
    
    function deleteTask(taskId) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
        
        if (!confirmDelete) {
            return;
        }
    
        const deleteUrl = `${window._config.api.url}/del`;
    
        const requestBody = {
            email: email,
            task_id: taskId,
        };
    
        fetch(deleteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
             if (!response.ok) {
                throw new Error("Không thể xóa công việc.");
            }
            return response.json();
        })
        .then(data => {
            alert(data.body);
            fetchTasks(); 
        })
        .catch(error => {
             console.error("Error:", error);
        });
    }
    
    
    document.getElementById('addTaskButton').addEventListener('click', (event) => {
        event.preventDefault(); 
        addTask(); 
    });
    
    
    document.getElementById('logoutBtn').addEventListener('click' , () => {
        window.location.href = 'index.html';
    })
    
    
    document.addEventListener("DOMContentLoaded", fetchTasks);
}

if (window._env_) {
  loadConfig();
} else {
  window.addEventListener("load", loadConfig);
}
