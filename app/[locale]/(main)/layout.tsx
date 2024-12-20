'use client'
import { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header";
import NewFooter from "../../../components/NewFooter";
import { useAuth } from "../../../context/AuthContext";
import { useParams, useRouter } from "next/navigation";
import { FloatingHeader } from "../../../components/Nav";
import { LessonProvider } from "../../../context/LessonContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loaded }: any = useAuth()
  const [scrollDirection, setScrollDirection] = useState<any>("down");
  const lastScrollTop = useRef<any>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        // Scrolling down
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop.current) {
        // Scrolling up
        setScrollDirection("up");
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "up") {
      setShowHeader(true);
    } else if (scrollDirection === "down" && lastScrollTop.current > 200) {
      setShowHeader(false);
    }
  }, [scrollDirection]);

  useEffect(() => {
    if (scrollDirection === 'up') {
      setShowHeader(true)
    }
    if (scrollDirection === 'down' && lastScrollTop.current > 200) {
      setShowHeader(false)
    }
  })

  useEffect(() => {
  }, [showHeader])

  return (
    <LessonProvider>
      <div>
        {
          showHeader && loaded && (user ? <Header /> : <FloatingHeader />)
        }
        {children}
        <NewFooter />
      </div>
    </LessonProvider>
  );
}
