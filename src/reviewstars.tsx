import styles from './reviewstars.module.css'
import { useState } from 'react'

export function ReviewStars() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [clickedIndex, setClickedIndex] = useState(-1);

    const handleMouseEnter = (index: number) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(-1);
    };
  
    const handleClick = (index: number) => {
      setClickedIndex(index);
    };

  return (
    <div className={styles.reviewstarscontainer}>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`${styles.star} ${index <= hoveredIndex ? styles.active : hoveredIndex == -1 ? index <= clickedIndex ? styles.active : '': ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
        </div>
      ))}
    </div>    
  )
}