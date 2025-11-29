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
      "Mack Josh Bulo"
    ],
    bridesmaids: [
      "April Buenaventura"
    ],
    bestMen: [
      "MJ Mañosca",
      "John Megryan Samartino",
      "Chito Atibagos Jr.",
      "Mark John Bulo"
    ],
    maidsOfHonor: [
      "Charena Atibagos",
      "Mikaela Jehm Bulo",
      "Faith Mose",
      "Patricia Angel Bala"
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
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
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
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-base md:text-xl lg:text-2xl font-display font-semibold mb-2 md:mb-3 text-primary whitespace-nowrap">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-sm md:text-lg lg:text-xl font-telma text-foreground" data-testid={`parent-name-${index}-${nameIndex}`}>
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
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              {entourageData.principalSponsors.men.map((name, index) => (
                <p key={index} className="text-sm md:text-lg lg:text-xl font-telma text-foreground mb-1 whitespace-nowrap text-right" data-testid={`principal-sponsor-men-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center">
              {entourageData.principalSponsors.women.map((name, index) => (
                <p key={index} className="text-sm md:text-lg lg:text-xl font-telma text-foreground mb-1 whitespace-nowrap text-left" data-testid={`principal-sponsor-women-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groom's Men
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-sm md:text-lg lg:text-xl font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bride's Maid
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-sm md:text-lg lg:text-xl font-telma text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
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
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-6 text-primary">
                Best Men & Maids of Honor
              </h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              {Array.from({length: Math.max(entourageData.bestMen.length, entourageData.maidsOfHonor.length)}).map((_, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="text-center text-right">
                    {entourageData.bestMen[index] && (
                      <p className="text-sm md:text-lg lg:text-xl font-telma text-foreground" data-testid={`best-man-${index}`}>
                        {entourageData.bestMen[index]}
                      </p>
                    )}
                  </div>
                  <div className="text-center text-left">
                    {entourageData.maidsOfHonor[index] && (
                      <p className="text-sm md:text-lg lg:text-xl font-telma text-foreground" data-testid={`maid-of-honor-${index}`}>
                        {entourageData.maidsOfHonor[index]}
                      </p>
                    )}
                  </div>
                </div>
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
            <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girl
            </h3>
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-sm md:text-lg lg:text-xl font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
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
