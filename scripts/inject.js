const fs = require('fs');
fs.writeFileSync('config.js', `window.APP_CONFIG = { API_KEY: "${process.env.API_KEY}" };\n`);   