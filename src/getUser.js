const axios = require('axios').default

const getUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

module.exports = {
    getUser
}
