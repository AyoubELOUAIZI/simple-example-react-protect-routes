import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('profile AuthContext:')
        console.log(profile);
    }, [profile])


    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/api/user/profile", { withCredentials: true });
                setProfile(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchUserProfile();
    }, []);

    const login = async (payload) => {
        const apiResponse = await axios.post(
            "http://localhost:8000/api/user/login",
            payload,
            { withCredentials: true }
        );
        setProfile(apiResponse.data)
        navigate("/");
    };

    const logout = async () => {
        await axios.get("http://localhost:8000/api/user/logout",
            { withCredentials: true }
        );
        setProfile(null);
    }

    return (
        <AuthContext.Provider value={{ profile, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
