// function loadConfig() {
//   window._config = {
//     cognito: {
//       userPoolId: window._env_.REACT_APP_USER_POOL_ID || "default",
//       userPoolClientId: window._env_.REACT_APP_USER_POOL_CLIENT_ID || "default",
//       region: window._env_.REACT_APP_REGION || "default"
//     },
//     api: {
//       url: window._env_.REACT_APP_API_URL || "default"
//     }
//   };
// }

// if (window._env_) {
//   loadConfig();
// } else {
//   window.addEventListener("load", loadConfig);
// }



window._config = {
  cognito: {
      userPoolId: 'us-east-1_tIHEct7Jf', // e.g. us-east-2_uXboG5pAb
      userPoolClientId: 'nc7ar619efhh1s622hvvaoi0v', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
      region: 'us-east-1' // e.g. us-east-2
  },
  api: {
      url: 'https://90v62rb8fk.execute-api.us-east-1.amazonaws.com/to_do_app_stage/to_do_app'
  }
};
