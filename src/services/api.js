import axios from 'axios'

const getConfig = () => {
    return {
        headers:{
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }
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
    return api.post('/habits', { name, days }, getConfig())
}

const getHabits = (from='') => {
    return api.get(`/habits/${from}`, getConfig())
}

const deleteHabit = (id) => {
    return api.delete(`/habits/${id}`, getConfig())
}

const checkHabit = (id) => {
    return api.post(`/habits/${id}/check`, {}, getConfig())
}

const unCheckHabit = (id) => {
    return api.post(`/habits/${id}/uncheck`, {}, getConfig())
}

export { login, createAccount, createHabit, getHabits, deleteHabit, checkHabit, unCheckHabit }