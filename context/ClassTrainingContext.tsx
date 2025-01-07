'use client'

import { BaseApi } from '@/api/baseApi';
import { Helper } from '@/lib/helper';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ClassTrainingContextType {
    courseList: any;
}

const ClassTrainingContext = createContext<ClassTrainingContextType | undefined>(undefined);

export const ClassTrainingProvider = ({ children }: { children: ReactNode }) => {
    const [courseList, setCourseList] = useState<any>([])

    useEffect(() => {
        getPosts()
    }, []);

    const getPosts = async () => {
        try {
            const { list } = await BaseApi._get('9/service_classroom_courses')
            setCourseList(list)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <ClassTrainingContext.Provider value={{ courseList }}>
            {children}
        </ClassTrainingContext.Provider>
    );
};

export const useClassTraining = (): ClassTrainingContextType => {
    const context = useContext(ClassTrainingContext);
    if (context === undefined) {
        throw new Error('useClassTraining must be used within an ClassTrainingProvider');
    }
    return context;
};
