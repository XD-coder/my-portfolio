"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Card {
  title: string;
  subtitle?: string;
  content?: ReactNode;
  backgroundImage?: string;
  badge?: string;
}

interface ScrollStackProps {
  cards: Card[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const defaultBackgrounds: string[] = [
  "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
  "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
  "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
];

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-background",
  cardHeight = "60vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 3,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const scrollableSectionRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ticking = useRef<boolean>(false);

  const cardCount = Math.min(cards.length, 5);

  const cardStyle: React.CSSProperties = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: "20px",
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = (): void => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionHeight = sectionRef.current.offsetHeight;
          
          // Calculate scroll progress based on section position relative to viewport
          const sectionTop = sectionRect.top;
          const sectionBottom = sectionRect.bottom;
          
          let progress = 0;
          
          // If section is in viewport
          if (sectionBottom > 0 && sectionTop < viewportHeight) {
            // Calculate how much of the section has been scrolled through
            const scrolledDistance = Math.max(0, -sectionTop);
            const totalScrollDistance = sectionHeight - viewportHeight;
            progress = Math.min(1, scrolledDistance / totalScrollDistance);
          } else if (sectionTop <= 0) {
            // Section has been completely scrolled past
            progress = 1;
          }

          // Calculate which card should be active based on progress
          let newActiveIndex = Math.floor(progress * cardCount);
          newActiveIndex = Math.min(newActiveIndex, cardCount - 1);

          // Debug logging
          if (progress > 0) {
            console.log('Scroll progress:', progress, 'Active card:', newActiveIndex, 'Section top:', sectionTop);
          }

          setActiveCardIndex(newActiveIndex);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Listen to window scroll instead of section scroll for better control
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);

  const getCardTransform = (index: number): React.CSSProperties => {
    // Show cards progressively based on activeCardIndex
    const isVisible = activeCardIndex >= index;
    const scale = 0.9 + index * 0.05;
    let translateY = "100px";
    let translateX = "0px";
    let opacity = 0;

    if (isVisible) {
      translateY = `${90 - index * 20}px`; // Reduced vertical spacing
      translateX = `${index * 40}px`; // Horizontal offset to the right
      opacity = index === 0 ? 0.9 : 1;
    }

    return {
      transform: `translateY(${translateY}) translateX(${translateX}) scale(${scale})`,
      opacity: opacity,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : "none",
    };
  };

  return (
    <section
      ref={scrollableSectionRef}
      className={`relative w-full ${className}`}
    >
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${sectionHeightMultiplier * 100}vh` }}
      >
        <div
          className={`sticky top-0 w-full h-screen flex items-center 
            justify-center overflow-hidden ${backgroundColor}`}
        >
          <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
            <div
              ref={cardsContainerRef}
              className="relative w-full max-w-5xl mx-auto flex-shrink-0"
              style={{ height: cardHeight }}
            >
              {cards.slice(0, 5).map((card, index) => {
                const cardTransform = getCardTransform(index);
                const backgroundImage =
                  card.backgroundImage ||
                  defaultBackgrounds[index % defaultBackgrounds.length];

                return (
                  <div
                    key={index}
                    className="absolute z-50 overflow-hidden shadow-xl 
                      transition-all duration-300"
                    style={{
                      ...cardStyle,
                      top: 0,
                      left: "50%",
                      transform: `translateX(calc(-50% - 80px)) ${cardTransform.transform}`,
                      width: "100%",
                      maxWidth: "100%",
                      opacity: cardTransform.opacity,
                      zIndex: cardTransform.zIndex,
                      pointerEvents: cardTransform.pointerEvents as "auto" | "none",
                    }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-black/60" />
                    {card.badge && (
                      <div className="absolute top-4 right-4 z-30">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                          <span className="text-sm font-medium">{card.badge}</span>
                        </div>
                      </div>
                    )}
                    <div className="relative z-20 p-5 sm:p-6 md:p-8 h-full flex items-center">
                      {card.content ? (
                        card.content
                      ) : (
                        <div className="max-w-lg">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            {card.title}
                          </h3>
                          {card.subtitle && (
                            <p className="text-lg text-white/80">{card.subtitle}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
