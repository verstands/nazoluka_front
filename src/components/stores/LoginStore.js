import axio from "./axios";

export default async function Login() {
    try {
        const response = await axio.get('/rapport_consomation_carburant_graphique/1,3,4,2,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,27,23,24,25,26/360/1');
        return response.data.data;
    } catch (error) {
        alert(error);
    }
}
