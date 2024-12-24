'use client'

import { BaseApi } from '@/api/baseApi';
import { Helper } from '@/lib/helper';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface BlogContextType {
    postList: any;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [postList, setPostList] = useState<any>([])

    useEffect(() => {
        getPosts()
    }, []);

    const getPosts = async () => {
        try {
            const data = await BaseApi._get('/list/9/service_news')
            setPostList(data)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <BlogContext.Provider value={{ postList }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = (): BlogContextType => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error('useBlog must be used within an BlogProvider');
    }
    return context;
};
