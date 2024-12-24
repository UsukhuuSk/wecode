import { useEffect, useState, useRef } from 'react';

type IntersectOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersect = (
  options: IntersectOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
};

export default useIntersect;
