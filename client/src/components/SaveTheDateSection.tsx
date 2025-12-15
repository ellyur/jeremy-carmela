
import { motion } from 'framer-motion';

const SaveTheDateSection = () => {
  return (
    <motion.section 
      className="section-pastel-blue bg-white relative overflow-hidden py-20 px-4 pt-[0px] pb-[0px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-accent/30 rotate-45"></div>
      </div>
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

        {/* Video Container */}
        <motion.div 
          className="relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl border-4 border-accent/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/S5DMe6wngno"
              title="Save the Date Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateSection;
