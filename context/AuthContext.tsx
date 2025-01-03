'use client'
// context/AuthContext.tsx
import Cookies from "js-cookie";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BaseApi } from "../api/baseApi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface User {
    _id: string;
    name: string;
    email: string;
    // Add other user properties here
}

interface AuthContextType {
    user: any;
    loaded: boolean;
    userActions: any;
    menus: any;
    login: () => any;
    logout: () => any;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [userActions, setUserActions] = useState<any>([])
    const [menus, setMenus] = useState<any>([])
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (user && !user.is_agreement) {
            router.push(`/quiz`);
        }
    }, [pathname, searchParams]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const token = Cookies.get("authToken");
        if (!token) {
            setLoaded(true);
        }
        else {
            try {
                const data = await BaseApi._get('one/9/service_user_profile')
                setUser(data)
                if (!data.is_agreement) {
                    router.push(`/quiz`);
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoaded(true);
            }
        }
    };



    const login = async () => {
        await fetchUser()
    };

    const logout = async () => {
        Cookies.remove("authToken");
        setUser(null)
    };


    return (
        <AuthContext.Provider value={{ user, loaded, userActions, menus, login, logout }}>
            {children}
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
