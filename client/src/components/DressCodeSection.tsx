import { motion } from 'framer-motion';
import menDressCode from '@assets/image-removebg-preview_(1)_1764916590573.png';
import womenDressCode from '@assets/image-removebg-preview_(2)_1764916583974.png';

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display font-light italic mb-8 text-[48px] text-[#3d668f]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Unified Dress Code Card */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-6 md:p-10 shadow-soft hover-elegant transition-all duration-500 relative">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 8.3 }}
            >
              {/* Layout: Man Image | Text & Colors | Woman Image */}
              <div className="flex flex-row items-center justify-center gap-2 md:gap-6">
                {/* Man Image - Left */}
                <div className="flex-shrink-0">
                  <img 
                    src={menDressCode}
                    alt="Men's Dress Code" 
                    className="h-28 sm:h-40 md:h-56 lg:h-64 object-contain"
                    data-testid="img-dresscode-men"
                  />
                </div>

                {/* Center Content - Text & Color Palette */}
                <div className="text-center flex-1 max-w-xs md:max-w-md px-1">
                  <h3 className="text-sm sm:text-base md:text-2xl font-display font-medium text-foreground mb-2 md:mb-4">
                    Strictly Semi-Formal / Formal Attire
                  </h3>
                  
                  <p className="text-xs sm:text-sm md:text-lg text-foreground mb-3 md:mb-6 leading-relaxed font-satoshi">
                    We encourage you to dress according to our wedding colors
                  </p>

                  {/* Color Palette Swatches */}
                  <div>
                    <p className="text-xs md:text-sm text-foreground/80 mb-2 md:mb-4 font-satoshi">Recommended Color Palette</p>
                    <div className="flex justify-center gap-1 md:gap-3 flex-nowrap">
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 flex-shrink-0"
                        style={{ backgroundColor: '#4A7BA7' }}
                        data-testid="color-swatch-dusty-blue"
                      ></div>
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 flex-shrink-0"
                        style={{ backgroundColor: '#5BA3C8' }}
                        data-testid="color-swatch-bright-blue"
                      ></div>
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 flex-shrink-0"
                        style={{ backgroundColor: '#A8C5D8' }}
                        data-testid="color-swatch-light-blue-gray"
                      ></div>
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 flex-shrink-0"
                        style={{ backgroundColor: '#0B2340' }}
                        data-testid="color-swatch-deep-navy"
                      ></div>
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 flex-shrink-0"
                        style={{ backgroundColor: '#FFF8DC' }}
                        data-testid="color-swatch-pale-cream"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Woman Image - Right */}
                <div className="flex-shrink-0">
                  <img 
                    src={womenDressCode}
                    alt="Women's Dress Code" 
                    className="h-28 sm:h-40 md:h-56 lg:h-64 object-contain"
                    data-testid="img-dresscode-women"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
