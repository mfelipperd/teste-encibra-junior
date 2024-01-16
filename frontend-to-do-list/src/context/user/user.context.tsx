'use client'
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface User {
    name: string;
    email: string;
    password: string;
    task?: any;
}

interface UserContextData{
    user:User;
    handleChangeData: (user: User) => void;
}

interface UserProviderProps{
    children: ReactNode;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export const UserProvider = ({children}:UserProviderProps) => {
    const [user, setUser] = useState<User>({
        name: '',
        email:'',
        password:''
    });
    const handleChangeData = useCallback((data: User) => {
        setUser(data);
    }, []);

    return (
        <UserContext.Provider value={{user, handleChangeData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUserContext must be used with in a UserProvider')
    }
    return context
};
