module.exports = {
    apps: [{
        name: 'API',
        script: 'index.js',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
