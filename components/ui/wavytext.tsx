import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  replay: boolean;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.2,
  replay,
  ...props
}: Props) => {
  // const letters = Array.from(text);
  const words = text.split(" ");
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        flexWrap: "wrap", // This will allow text to wrap to the next line
        overflow: "hidden",
        textAlign: "center", // Center-aligns the text within the container
        justifyContent: "center", // Keeps the text centered
      }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      {...props}
    >
      {/* {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))} */}{" "}
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block" }}
          variants={child}
        >
          {word.split("").map((letter, index) => (
            <motion.span key={index}>{letter}</motion.span>
          ))}
          {"\u00A0"} {/* Adds space after each word */}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
