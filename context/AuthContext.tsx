'use client'
// context/AuthContext.tsx
import Cookies from "js-cookie";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BaseApi } from "../api/baseApi";
interface User {
    id: string;
    name: string;
    email: string;
    // Add other user properties here
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    userActions: any;
    menus: any;
    login: () => any;
    logout: () => any;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userActions, setUserActions] = useState<any>([])
    const [menus, setMenus] = useState<any>([])
    const [loading, setLoading] = useState(false);
    const tokenName: any = process.env.NEXT_PUBLIC_TOKEN_NAME

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const token = Cookies.get("authToken");
        if (token)
            try {
                setLoading(true);
                const data = await BaseApi._get('one/9/service_user_profile')
                setUser(data)
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
    };



    const login = async () => {
        await fetchUser()
    };

    const logout = async () => {
        setUser(null)
    };


    return (
        <AuthContext.Provider value={{ user, loading, userActions, menus, login, logout }}>
            {children}
            {/* <AuthLoading loading={loading} /> */}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};