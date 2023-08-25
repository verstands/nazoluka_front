import axio from "./axios";

export  async function UserStore() {
    try {
        const response = await axio.get(`/users/hotel/hotel_id`) 
        return response.data;
    } catch (error) {
        alert(error)
    }
}

export  async function UpdateUserStore(id) {
    try {
        const response = await axio.get(`/users/${id}`) 
        return response.data;
    } catch (error) {
        alert(error  + `/users/user_id/${id}`)
    }
}