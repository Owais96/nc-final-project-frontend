import Axios from 'axios'

const newsApi = Axios.create({
    baseURL: 'https://safe-home-api.herokuapp.com/api',
})

export const getUsers = async () => {
    const { data } = await newsApi.get('/users')
    return data.users
}

export const getUserByUid = async (uid) => {
    const { data } = await newsApi.get(`/users/${uid}`)
    console.log(data)
    return data
}

export const postNewUser = async (newUser) => {
    try {
        const { data } = await newsApi.post('/users', { newUser })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getContactsByUid = async (uid) => {
    const { data } = await newsApi.get(`/users/${uid}/contacts`)
    return data
}
