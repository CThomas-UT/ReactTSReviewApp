import styles from './reviewstars.module.css'
import { useState } from 'react'

export function ReviewStars() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index: number) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(-1);
    };
  
    const handleClick = (index: number) => {
      // You can add logic for handling the click event if needed
      console.log(`Clicked on star ${index + 1}`);
    };

  return (
    <div className={styles.reviewstarscontainer}>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`${styles.star} ${index <= hoveredIndex ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
        </div>
      ))}
    </div>    
  )
}