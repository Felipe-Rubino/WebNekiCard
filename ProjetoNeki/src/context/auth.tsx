import { ReactNode, useState, createContext} from "react";
import { AuthType, TokenType } from "../@types/auth";

export const AuthContext = createContext<AuthType>({} as AuthType)

type Props = {
    children : ReactNode;
}

export const AuthProvider : React.FC<Props> = ({children} : Props) => {
    const [token, setToken] = useState<TokenType>({token : ''})
    const [currentUserId, setCurrentUserId] = useState<number>(0)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const logout = () => {
        localStorage.removeItem('token')
        setToken({ token: null });
        setIsAuthenticated(false)
    }

   

    return (
        <AuthContext.Provider value={{ token, currentUserId, isAuthenticated, setToken, setCurrentUserId, setIsAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )
}