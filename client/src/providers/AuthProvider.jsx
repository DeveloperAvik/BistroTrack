import { createContext, useState } from "react"
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";


const AuthContext = createContext(null);

const auth = getAuth(app)

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
