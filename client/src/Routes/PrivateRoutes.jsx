import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoutes = ({ children }) => {
    const {user, location} = useContext(AuthContext)
    const location = useLocation();

    if(location) {
        return <span className="loading loading-spinner text-success"></span>
    }

    if(user) {
        return children
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
}

export default PrivateRoutes