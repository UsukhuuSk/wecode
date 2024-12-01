import React, { useState } from "react";
import HugeIcon from "./HugeIcon";

interface PropRating {
    value: number;
    onChange?: (newValue: number) => void;
    size?: number
}

export const WcRating: React.FC<PropRating> = ({ size = 16, value, onChange }) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const handleClick = (newValue: number) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleMouseEnter = (newValue: number) => {
        setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };

    const renderStars = () => {
        const stars = [];
        const ratingToDisplay = hoverValue ?? value; // Use hoverValue if hovering, otherwise show the actual rating

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(ratingToDisplay)) {
                // Full star
                stars.push(
                    <HugeIcon
                        size={size}
                        key={i}
                        name="star"
                        onClick={() => handleClick(i)}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    />
                );
            } else if (i - 0.5 === ratingToDisplay) {
                // Half star
                stars.push(
                    <HugeIcon
                        size={size}
                        key={i}
                        name="starHalf"
                        onClick={() => handleClick(i)}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    />
                );
            } else {
                // Empty star
                stars.push(
                    <HugeIcon
                        size={size}
                        key={i}
                        name="starOutlined"
                        onClick={() => handleClick(i)}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    />
                );
            }
        }
        return stars;
    };

    return <div className="flex">{renderStars()}</div>;
};
