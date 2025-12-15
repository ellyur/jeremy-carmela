
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SaveTheDateSectionProps {
  audioRef?: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateSection = ({ audioRef }: SaveTheDateSectionProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Enable YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API ready callback
    (window as any).onYouTubeIframeAPIReady = () => {
      if (iframeRef.current && audioRef?.current) {
        const player = new (window as any).YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event: any) => {
              // YT.PlayerState.PLAYING = 1
              // YT.PlayerState.PAUSED = 2
              // YT.PlayerState.ENDED = 0
              if (event.data === 1 && audioRef.current) {
                // Video is playing, pause background music
                audioRef.current.pause();
              } else if ((event.data === 2 || event.data === 0) && audioRef.current) {
                // Video is paused or ended, resume background music
                audioRef.current.play();
              }
            }
          }
        });
      }
    };
  }, [audioRef]);

  return (
    <motion.section 
      className="section-pastel-blue bg-white relative overflow-hidden py-20 px-4 pt-[0px] pb-[0px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-display italic mb-4 text-primary"
            style={{ fontFamily: 'Boska, serif', fontWeight: 400 }}
          >
            Save the Date
          </h2>
          <p className="max-w-2xl mx-auto text-[#0b0b0b] font-satoshi text-base md:text-lg">
            Watch our special moment
          </p>
        </motion.div>

        {/* Full Width Video Container */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/S5DMe6wngno?enablejsapi=1"
              title="Save the Date Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateSection;
