import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'
})

const login = ({ email, password }) => {
    return api.post('/auth/login', { email, password })
}

const createAccount = ({ email, name, image, password }) => {
    return api.post('/auth/sign-up', { email, name, image, password })
}

export { createAccount, login }