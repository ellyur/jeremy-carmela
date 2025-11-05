import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
// Cover images
import cover1Image from '@assets/cover1_1762267751413.JPG';
import cover2Image from '@assets/cover2_1762267751414.JPG';
import cover3Image from '@assets/cover3_1762267751414.JPG';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);

    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
        console.log('Audio playing after user consent');
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dvmsnobt5/video/upload/v1762268612/ytmp3free.cc_its-you-youtubemp3free.org_ahufzy.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <MusicConsentPopup
        onConsent={handleMusicConsent}
        isVisible={showMusicConsent}
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <StorySection />
        <CoverSection
          imageUrl={cover1Image}
          alt="Jeremy & Carmela Wedding Cover 1"
        />
        <ScrollTriggeredTimeline />
        <VenueSection />
        <CoverSection
          imageUrl={cover2Image}
          alt="Jeremy & Carmela Wedding Cover 2"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <RSVPSection />
        <EntourageSection />
        <CoverSection
          imageUrl={cover3Image}
          alt="Jeremy & Carmela Wedding Cover 3"
        />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;