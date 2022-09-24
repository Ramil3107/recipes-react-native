import axios from "axios"

const API_URL = "https://6321d90d82f8687273baba5a.mockapi.io/enjoy/"

const instance = axios.create({
    baseURL: API_URL
})

export const recipesAPI = {
    getRecipes: async () => {
        const response = await instance.get("recipes")
        const data = response.data
        return data
    },
    getFavouriteRecipes: async () => {
        const response = await instance.get("recipes?favourite=true")
        const data = response.data
        return data
    },
    getRecipe: async (id) => {
        const response = await instance.get(`recipes/${id}`)
        const data = response.data
        return data
    },
    changeRecipeFavouriteStatus: async (id, status) => {
        await instance.put(`recipes/${id}`, { "favourite": !status })
    }
}