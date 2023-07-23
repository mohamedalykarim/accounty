import useAuth from "./useAuth";
import axios from "axios"

const BASE_URL = "http://localhost:3005"


const useRefershToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.post(
            BASE_URL + "/api/users/refresh",
            { withCredentials: true },
            {}
        )

        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data.data.token)
            return ({ ...prev, token: response.data.data.token })
        })


        return response.data.data.token

    }
    return refresh
}

export default useRefershToken