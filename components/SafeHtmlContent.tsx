'use client'
import { useEffect, useRef } from 'react';

const SafeHtmlContent = ({ htmlContent, color }: { htmlContent: string, color?: any }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const shadowRoot = containerRef.current.attachShadow({ mode: 'open' });
            const wrapper = document.createElement('div');
            wrapper.innerHTML = htmlContent;
            if (color)
                wrapper.style.color = `${color}`
            shadowRoot.appendChild(wrapper);
        }
    }, [htmlContent]);

    return <div ref={containerRef}></div>;
};

export default SafeHtmlContent;
