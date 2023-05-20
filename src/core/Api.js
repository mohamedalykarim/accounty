import axios from "axios"

const BASE_URL = "http://localhost:3001"

export const login = (username, password)=>{
    return new Promise((resolve, reject)=>{
        try {
            axios.post(
                `${BASE_URL}/api/users/login`,
                {
                    username: username,
                    password: password
                },
                {
                    headers : {
                        "Content-Type" : "application/json",
                        "Accept" : "application/json, text/plain, */*"
                    }
                }
            ).then((response)=>{
                console.log(response);
                resolve(response)
            })
            
        } catch (error) {
            reject(error)
        }

    })
}

export const addNewUser = (username, name, password, isAdmin)=>{
    return new Promise((resolve, reject)=>{
        try {
            axios.post(
                `${BASE_URL}/api/users/`,
                {
                    username: username,
                    password: password,
                    name: name,
                    is_admin : isAdmin
                },
                {
                    headers : {
                        "Content-Type" : "application/json",
                        "Accept" : "application/json, text/plain, */*"
                    }
                }
            ).then((response)=>{
                resolve(response)
            })
            
        } catch (error) {
            reject(error)
        }

    })
}

export const getCapitalTransactions = async(page, count)=>{
    return new Promise((resolve, reject)=>{
        try {
            axios.post(
                BASE_URL + "/",
                {},
                {}
            ).then(()=>{
                
            })
            
        } catch (error) {
            reject(error)
        }
    })
}