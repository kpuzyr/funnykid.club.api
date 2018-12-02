module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "max-len": [2, 120, 8],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "no-param-reassign": 0,
    },
    "env": {
        "es6": true,
        "node": true
    },
    "globals": {
        "Config": true,
        "db": true,
        "Sequelize": true,
        "sequelize": true
    }
};