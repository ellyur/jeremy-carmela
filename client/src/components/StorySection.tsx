import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Church, Clock, Calendar, Plane, Heart, Infinity, BookOpen } from 'lucide-react';
import flowerImage from '@assets/flower_1759854441531.png';

// Local story images
import storyImage1 from '@assets/lovestory1_1762268351602.JPG';
const storyImage2 = 'https://res.cloudinary.com/dbrsm7rkk/image/upload/v1764432058/january_15_2015_dt7so5.jpg';
import storyImage3 from '@assets/prenup6_1762268498229.JPG';
import storyImage4 from '@assets/lovestory4_1762268351603.JPG';
const storyImage5 = 'https://res.cloudinary.com/dbrsm7rkk/image/upload/v1764432057/forever_after_wmqc3d.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [showFullStory, setShowFullStory] = useState(false);

  const storyCards = [
    {
      id: 1,
      title: "The Beginning",
      text: "Our story began in 2015, in the same little barangay. He noticed me from afar and thought I was beautiful. A simple message started our conversation, and what began as casual chats slowly turned into something deeper.",
      image: storyImage1,
      icon: Heart
    },
    {
      id: 2, 
      title: "January 23, 2015",
      text: "After genuine courtship and countless conversations about our dreams, I said yes to being his girlfriend. Little did we know, this 'yes' would be the start of a forever kind of love.",
      image: storyImage2,
      icon: Calendar
    },
    {
      id: 3,
      title: "Our Tradition", 
      text: "Every anniversary, we celebrated by traveling and creating memories in new places together. Each trip brought us closer, building our story one destination at a time.",
      image: storyImage3,
      icon: Plane
    },
    {
      id: 4,
      title: "The Proposal",
      text: "Our most unforgettable trip was Singapore. High above the city lights on the Sentosa Cable Car, he asked me to be his forever. It was the most beautiful question of all, and I knew right then—this was our new beginning.",
      image: storyImage4,
      icon: Infinity
    },
    {
      id: 5,
      title: "Forever After",
      text: "Our journey hasn't always been perfect. We've had our ups and downs, but we never gave up. We grew stronger, choosing each other over and over again. Now here we are, ready to say I do.",
      image: storyImage5,
      icon: Church,
      hasButton: true
    }
  ];

  const fullStory = `Our story began way back in 2015, in the same little barangay. I never knew that someone had already noticed me from afar - he said I caught his eye the first time he saw me. He said I was beautiful, and that simple thought was enough for him to ask my number from his friend. A few days later, my phone lit up with a message from him… and that was the beginning of us.

What started as casual conversations slowly turned into something deeper. We talked about everything - our dreams, our favorite things, and all the small details that made us who we are. Before I knew it, he began courting me in the most genuine way, showing me how much he truly cared. Then, on January 23, 2015, we made it official. I said yes to being his girlfriend, not knowing that this "yes" would be the start of a forever kind of love.

Back then, we were simply enjoying every moment the laughter, the little surprises, the feeling of being loved. We had no idea that our story would grow this beautifully. Every anniversary, we made it a tradition to celebrate by traveling, creating memories in new places together. But the most unforgettable one will always be our first trip abroad to Singapore - the trip that changed everything.

It was there, high above the city lights on the Sentosa Cable Car, where he asked me the most beautiful question of all - to be his forever. My heart was racing, my eyes were filled with tears, and I knew, right then and there, that it was the beginning of a new chapter. When we came back home to the Philippines, we got engaged - sealing our promise to spend the rest of our lives together.

Our journey hasn't always been perfect. Like any love story, we've had our ups and downs moments that tested us, moments that taught us. But through it all, we never gave up. Instead, we grew stronger, choosing each other over and over again.

And now, here we are… after all the years, the laughter, the lessons, and the love - we're finally ready to say I do. Every moment has led us here, and as we take this next step, we know in our hearts that this is just the beginning of our forever. 💍`;

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    // Detect mobile/tablet viewports
    const isMobile = window.innerWidth < 1024;
    const scrollMultiplier = isMobile ? 2 : 1.5;
    const scrubValue = isMobile ? 0.2 : 0.2;

    // Create horizontal scrolling animation with dynamic width calculation
    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    // Create ScrollTrigger with dynamic end calculation - Give each card much more vertical scroll space
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(horizontal.scrollWidth - container.offsetWidth) * scrollMultiplier}`,
      pin: true,
      scrub: scrubValue,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Refresh ScrollTrigger after images and fonts load
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Add load listener for window to refresh after fonts and lazy images
    window.addEventListener('load', handleRefresh);

    // Add load listeners to all images to refresh after each image loads
    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    // Initial refresh to handle any already loaded content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Animate story cards on load
    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue bg-white relative overflow-hidden isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
    >
      {/* SVG Background Decorations - Urban City Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating SVG Elements */}
        <svg className="absolute top-20 right-20 w-24 h-24 text-primary-foreground/30 animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
        </svg>

        <svg className="absolute bottom-32 left-16 w-16 h-16 text-primary-foreground/20 animate-bounce" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
          <path fill="currentColor" d="M9,11H15L13,13L15,15H9L11,13L9,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
        </svg>
      </div>
      {/* Header */}
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-light italic mb-6 sm:mb-8 text-foreground" data-testid="text-story-title">
            Our Story
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-foreground/90 font-satoshi">
            Scroll vertically to journey through our love story horizontally
          </p>
          
          {/* SVG Arrow Indicator */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-muted-foreground">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${storyCards.length * 100 + 100}vw` }}
        >
          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 h-full flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12"
              style={{ width: '100vw', minWidth: '100vw' }}
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4 lg:gap-6 items-start h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-white"
                style={{ boxShadow: '0 10px 40px rgba(212, 168, 83, 0.3), 0 0 20px rgba(212, 168, 83, 0.2)' }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 sm:mb-6">
                    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-foreground" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 font-satoshi" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {/* Read Full Story Button - Only on last card */}
                  {card.hasButton && (
                    <button
                      onClick={() => setShowFullStory(true)}
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-satoshi"
                      data-testid="button-read-full-story"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Read Full Story</span>
                    </button>
                  )}

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: '#D4A853' }}></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#D4A853' }} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: '#D4A853' }}></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative self-start ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Square image with rounded corners on all screen sizes */}
                    <img
                      src={card.image}
                      alt={`Story moment ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Flower - Lower Right */}
                <img 
                  src={flowerImage} 
                  alt="" 
                  className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-80 animate-float pointer-events-none"
                  data-testid={`decoration-flower-story-${card.id}`}
                />
              </div>
            </div>
          ))}

          {/* Final "Our Promise" Card */}
          <div
            className="story-card flex-shrink-0 h-full flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12"
            style={{ width: '100vw', minWidth: '100vw' }}
          >
            <div 
              className="max-w-6xl mx-auto grid lg:grid-cols-1 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-white"
              style={{ boxShadow: '0 10px 40px rgba(212, 168, 83, 0.3), 0 0 20px rgba(212, 168, 83, 0.2)' }}
              data-testid="card-story-promise"
            >
              {/* Content - Centered */}
              <div className="space-y-6 sm:space-y-8 text-center max-w-3xl mx-auto">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{ color: '#D4A853' }} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-foreground" data-testid="text-story-promise-title">
                  God's Promise
                </h3>
                
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl leading-relaxed italic text-foreground/90" data-testid="text-story-promise-verse">
                    "He has made everything beautiful in its time."
                  </p>
                  <p className="text-base sm:text-lg text-foreground/80" data-testid="text-story-promise-reference">
                    Ecclesiastes 3:11
                  </p>
                </div>

                {/* SVG Decorative Element */}
                <div className="flex items-center justify-center space-x-4 pt-4 sm:pt-6">
                  <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: '#D4A853' }}></div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#D4A853' }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: '#D4A853' }}></div>
                </div>
              </div>

              {/* Decorative Flower - Lower Right */}
              <img 
                src={flowerImage} 
                alt="" 
                className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-80 animate-float pointer-events-none"
                data-testid="decoration-flower-story-promise"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Full Story Modal */}
      {showFullStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowFullStory(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-script italic text-foreground">Our Full Story</h3>
              <button 
                onClick={() => setShowFullStory(false)}
                className="text-2xl text-foreground hover:text-primary transition-colors"
              >
                ×
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              {fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground/90 leading-relaxed font-satoshi">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default StorySection;
