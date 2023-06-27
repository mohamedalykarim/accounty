import useAuth from "./useAuth";
import axios from "axios"

const BASE_URL = "http://localhost:3001"


const useRefershToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get(
            BASE_URL + "/refresh",
            {},
            { withCredentials: true }
        )

        setAuth(pref => {
            console.log(JSON.stringify(pref))
            console.log(response.data.data.token)
            return ({ ...pref, token: response.data.data.token })
        })


        return response.data.data.token

    }
    return refresh
}

export default useRefershToken