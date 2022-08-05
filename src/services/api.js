import axios from 'axios'

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}

const api = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'
})

const login = ({ email, password }) => {
    return api.post('/auth/login', { email, password })
}

const createAccount = ({ email, name, image, password }) => {
    return api.post('/auth/sign-up', { email, name, image, password })
}

const createHabit = ({ name, days }) => {
    return api.post('/habits', { name, days }, config)
}

const getHabits = (from='') => {
    return api.get(`/habits/${from}`, config)
}

const deleteHabit = (id) => {
    return api.delete(`/habits/${id}`, config)
}

const checkHabit = (id) => {
    return api.post(`/habits/${id}/check`, {}, config)
}

const unCheckHabit = (id) => {
    return api.post(`/habits/${id}/uncheck`, {}, config)
}

export { login, createAccount, createHabit, getHabits, deleteHabit, checkHabit, unCheckHabit }