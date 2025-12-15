
import { motion } from 'framer-motion';

const SaveTheDateSection = () => {
  return (
    <motion.section 
      className="bg-white relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Full Width Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/S5DMe6wngno"
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
    </motion.section>
  );
};

export default SaveTheDateSection;
