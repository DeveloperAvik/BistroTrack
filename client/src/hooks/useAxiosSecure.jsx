import axios from "axios"

export const axiosSecure = axios.create({
    baseURL: "http://localhost:3000"
})

function useAxiosSecure() {
    return axiosSecure
}

export default useAxiosSecure
