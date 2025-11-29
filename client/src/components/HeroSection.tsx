import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import heroImage from '@assets/hero-section_1762267746857.JPG';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section bg-white relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-image"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content - Centered Names */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow">
        {/* Tagline */}
        <div className={`transition-all duration-700 mb-4 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <p className="text-sm sm:text-base md:text-lg text-white font-light uppercase" data-testid="text-tagline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
            WHERE LOVE BLOOMS
          </p>
        </div>
        
        {/* Names */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-wide" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
          {animationsEnabled ? (
            <TypeAnimation
              sequence={[
                'JEREMY & CARMELA',
                () => {
                  setShowElements(true);
                }
              ]}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
              style={{ 
                display: 'inline-block'
              }}
              cursor={true}
              repeat={0}
              className="typewriter-text"
            />
          ) : (
            <span 
              style={{ 
                display: 'inline-block'
              }}
              className="typewriter-text"
            >
              JEREMY & CARMELA
            </span>
          )}
        </h1>

        {/* Date */}
        <div className={`transition-all duration-700 mt-6 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <p className="text-sm sm:text-base md:text-lg text-white font-light uppercase" data-testid="text-date" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
            Friday, January 23, 2026 . Iglesia Ni Cristo Lalaan, Dasmariñas City
          </p>
        </div>
      </div>

      {/* RSVP Button - Bottom of Section */}
      <div className="relative z-10 pb-8 sm:pb-12">
        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <a 
            href="#rsvp"
            className="inline-block px-8 py-3 bg-blue-500 rounded-lg text-white text-sm md:text-base font-display tracking-wider hover:bg-blue-600 transition-all duration-300 uppercase"
            data-testid="button-hero-rsvp"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
          >
            RSVP NOW
          </a>
        </div>
      </div>
      {/* Styles */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: #111827;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;