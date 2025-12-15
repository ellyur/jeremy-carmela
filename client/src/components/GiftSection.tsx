
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const GiftSection = () => {
  return (
    <motion.section 
      id="gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-12 h-12 text-primary" />
          </div>
          <h2 
            className="text-4xl md:text-5xl font-display italic mb-4 text-primary"
            style={{ fontFamily: 'Boska, serif', fontWeight: 400 }}
          >
            Gift Guide
          </h2>
        </motion.div>

        {/* Gift Message */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft text-center">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 font-satoshi max-w-2xl mx-auto">
              Your presence is the greatest gift we could ever receive.
              <br /><br />
              Should you wish to extend your generosity, a token of love and support toward our future together would be deeply appreciated.
            </p>

            {/* QR Code */}
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/dbwntiwss/image/upload/v1765813494/QR_skyykk.png"
                alt="Gift QR Code"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-px bg-primary/30"></div>
            <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
            <div className="w-8 h-px bg-primary/30"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;
