const axios = require('axios').default;

function getEmployees() {
    return axios.get('http://localhost:3000/employees');
}

module.exports = {getEmployees}