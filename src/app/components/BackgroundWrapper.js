'use client'
import { useEffect, useState } from 'react';

export default function BackgroundWrapper({ children }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const delayBeforeBg = 300;
    const bgSlideDuration = 1800; // slide duration in ms
    const bgZoomDuration = 1200;  // zoom duration in ms
    const bgZoomDelay = 600;      // zoom delay in ms

    const startBgTimer = setTimeout(() => setStartAnimation(true), delayBeforeBg);
    const hideTextTimer = setTimeout(() => setHideText(true), delayBeforeBg + bgSlideDuration * 0.35);

    return () => {
      clearTimeout(startBgTimer);
      clearTimeout(hideTextTimer);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Outer div handles sliding */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transition: `transform ${startAnimation ? 1800 : 0}ms cubic-bezier(.4, 0, .2, 1)`,
          transform: startAnimation ? 'translateY(0%)' : 'translateY(150%)',
          zIndex: 1,
        }}
      >
        {/* Inner div handles zoom with delay */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: "url('/assets/bar.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: `transform ${startAnimation ? 1200 : 0}ms ease ${startAnimation ? 600 : 0}ms`,
            transform: startAnimation ? 'scale(1)' : 'scale(1.4)',
        
            height: '100%',
            width: '100%',
          }}
        />
      </div>

      {/* Centered "The Black Hound" text */}
      {!hideText && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize: '3rem',
            fontFamily: 'Georgia, serif',
            animation: 'pulse 1.5s ease-in-out infinite',
            zIndex: 2,
          }}
        >
          The Black Hound
        </div>
      )}

      {/* Page Content */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        {children}
      </div>

      {/* Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
