import { useRef } from 'react';
import { useScroll } from 'react-use';

import styles from './Scroll.module.css';

const Demo = () => {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <div>
      <div>
        x: {x}, y: {y}
      </div>

      <div
        ref={scrollRef}
        style={{
          width: '1000px',
          height: '600px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <div
          style={
            {
              // height: '2000px',
            }
          }
        >
          <div
            style={{ transform: `translateX(-${y * 5}px)` }}
            className={styles.wavetop}
          >
            <img src='/images/Hero-Top.svg' />
          </div>
          <div className={styles.bg}></div>
          <div
            style={{ transform: `translateX(-${y * 5}px)` }}
            className={styles.wavebottom}
          >
            <img src='/images/Hero-Bottom.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
