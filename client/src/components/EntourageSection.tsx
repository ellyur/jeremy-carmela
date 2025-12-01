import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of the Groom", names: ["Reynaldo Bulo", "Jocylin Bulo"] },
      { label: "Parents of the Bride", names: ["Chito Atibagos Sr.", "Gemma Atibagos"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Cris Morona",
        "Daniel Angkiangco",
        "Renato Romero",
        "Ferdinand Manansala",
        "Rizaldy Picart"
      ],
      women: [
        "Belinda Samartino",
        "Rochelle Angkiangco",
        "Chanda Aquino",
        "Aileen Claridad",
        "Novalita Bala"
      ]
    },
    groomsmen: [
      "MJ Mañosca",
      "John Megryan Samartino",
      "Chito Atibagos Jr.",
      "Mark John Bulo"
    ],
    bridesmaids: [
      "Charena Atibagos",
      "Mikaela Jehm Bulo",
      "Faith Mose",
      "Patricia Angel Bala"
    ],
    bestMen: [
      "Mack Josh Bulo"
    ],
    maidsOfHonor: [
      "April Buenaventura"
    ],
    flowerGirls: [
      "Ma. Chanelle Joi Gellido"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-accent/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-accent/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 pl-[0px] pr-[0px]">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-primary mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 md:mb-3 text-primary whitespace-nowrap">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              {entourageData.principalSponsors.men.map((name, index) => (
                <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 whitespace-nowrap text-right" data-testid={`principal-sponsor-men-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center">
              {entourageData.principalSponsors.women.map((name, index) => (
                <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 whitespace-nowrap text-left" data-testid={`principal-sponsor-women-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Best Men & Maids of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-primary text-center" data-testid="best-men-maids-title">
              Bestman and Maid of Honor
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
              <div className="text-center">
                {entourageData.bestMen.map((name, index) => (
                  <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 whitespace-nowrap text-right" data-testid={`best-man-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="text-center">
                {entourageData.maidsOfHonor.map((name, index) => (
                  <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 whitespace-nowrap text-left" data-testid={`maid-of-honor-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-1 md:gap-8 max-w-6xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 text-right whitespace-nowrap pl-[-3px] pr-[-3px] ml-[-3px] mr-[-3px]" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 text-left whitespace-nowrap ml-[9px] mr-[9px]" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Flower Girl */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="text-center" data-testid="flower-girl-section">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girl
            </h3>
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-lg md:text-2xl lg:text-3xl font-author text-foreground mb-1 whitespace-nowrap" data-testid={`flower-girl-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
