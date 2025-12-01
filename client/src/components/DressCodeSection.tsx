import { motion } from 'framer-motion';
import dressCodeImage from '@assets/dresscode_1762266869903.png';

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
          <div className="bg-card/30 border border-border rounded-xl p-8 md:p-12 shadow-soft hover-elegant transition-all duration-500 relative">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 8.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6">
                  Strictly Semi-Formal / Formal Attire
                </h3>
                
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-satoshi">
                  We encourage you to dress according to our wedding colors
                </p>

                {/* Color Palette Swatches */}
                <div className="mb-12">
                  <p className="text-base text-foreground/80 mb-6 font-satoshi">Recommended Color Palette</p>
                  <div className="flex justify-center gap-2 md:gap-3 flex-nowrap overflow-x-auto pb-2">
                    {/* Dusty Blue */}
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 hover:shadow-md transition-all flex-shrink-0"
                      style={{ backgroundColor: '#4A7BA7' }}
                      data-testid="color-swatch-dusty-blue"
                    ></div>

                    {/* Bright Blue */}
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 hover:shadow-md transition-all flex-shrink-0"
                      style={{ backgroundColor: '#5BA3C8' }}
                      data-testid="color-swatch-bright-blue"
                    ></div>

                    {/* Light Blue Gray */}
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 hover:shadow-md transition-all flex-shrink-0"
                      style={{ backgroundColor: '#A8C5D8' }}
                      data-testid="color-swatch-light-blue-gray"
                    ></div>

                    {/* Deep Navy */}
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 hover:shadow-md transition-all flex-shrink-0"
                      style={{ backgroundColor: '#0B2340' }}
                      data-testid="color-swatch-deep-navy"
                    ></div>

                    {/* Pale Cream */}
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full shadow-sm border border-primary/20 hover:shadow-md transition-all flex-shrink-0"
                      style={{ backgroundColor: '#FFF8DC' }}
                      data-testid="color-swatch-pale-cream"
                    ></div>
                  </div>
                </div>

                {/* Dress Code Illustration */}
                <div className="mb-8">
                  <div className="flex justify-center">
                    <img 
                      src="https://res.cloudinary.com/dbrsm7rkk/image/upload/v1764474464/ed9212f5-97cd-497c-8e68-d8e6c50fd12c-removebg-preview_1_if3jng.png" 
                      alt="Dress Code Illustration" 
                      className="w-full max-w-xs rounded-lg shadow-md"
                      data-testid="img-dresscode-illustration"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
