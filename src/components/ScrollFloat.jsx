import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  as: Tag = 'h2',
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  lineBreakBefore, // optional substring to start new line before
}) => {
  const containerRef = useRef(null);

  const renderChars = (text, keyPrefix = '') =>
    text.split('').map((char, index) => (
      <span className="char" key={`${keyPrefix}${index}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  const splitText = useMemo(() => {
    if (typeof children !== 'string') {
      // If heading content is not a plain string, render it as-is (no char splitting)
      return children;
    }
    const text = children;
    if (lineBreakBefore && typeof lineBreakBefore === 'string') {
      const idx = text.indexOf(lineBreakBefore);
      if (idx > -1) {
        const pre = text.slice(0, idx);
        const post = text.slice(idx);
        return (
          <>
            {renderChars(pre, 'pre-')}
            <br />
            {renderChars(post, 'post-')}
          </>
        );
      }
    }
    return renderChars(text);
  }, [children, lineBreakBefore]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return React.createElement(
    Tag,
    { ref: containerRef, className: `scroll-float ${containerClassName}` },
    React.createElement('span', { className: `scroll-float-text ${textClassName}` }, splitText)
  );
};

export default ScrollFloat;
