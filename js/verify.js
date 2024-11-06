function loadConfig() {
    function register() {

        const registerUrl = `${window._config.api.url}`;
        let email = document.getElementById('emailInputVerify').value
        email = email.toLowerCase()

        const requestBody = {
            email: email,
        };

        fetch(registerUrl, {
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
                console.log(data.body);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    window.register = register;
}

if (window._env_) {
    loadConfig();
} else {
    window.addEventListener("load", loadConfig);
}