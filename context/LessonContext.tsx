'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface LessonContextType {
    setVideos: (lesson: any) => any;
    activeLesson: any;

}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const LessonProvider = ({ children }: { children: ReactNode }) => {
    const [activeLesson, setActiveLesson] = useState(null)

    const setVideos = async (lesson: any) => {
        console.log('lool', lesson)
        setActiveLesson(lesson)
    };




    return (
        <LessonContext.Provider value={{ setVideos, activeLesson }}>
            {children}
        </LessonContext.Provider>
    );
};

export const useLesson = (): LessonContextType => {
    const context = useContext(LessonContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
