import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

import image_removebg_preview__6_ from "@assets/image-removebg-preview (6).png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-foreground py-16 px-4 relative overflow-hidden border-t-2 border-primary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://res.cloudinary.com/dbrsm7rkk/image/upload/v1764431418/6759bac6-a0ff-4a0f-aced-c2ce0980552f_1_xvrhfw.jpg"
              alt="J&C Monogram"
              className="h-20 w-auto opacity-90 object-contain"
              style={{ maxHeight: '80px' }}
              data-testid="footer-logo"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Couple Names */}
            <div>
              <h2 className="text-3xl sm:text-4xl mb-2 text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
                Jeremy
                <span className="text-primary mx-3">&</span>
                Carmela
              </h2>
              <p className="text-foreground text-lg">
                Friday, January 23, 2026 • Iglesia Ni Cristo Lalaan, Dasmariñas City
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 py-6">
              <div className="w-16 h-px bg-border"></div>
              <Heart className="w-6 h-6 text-primary animate-float" />
              <div className="w-16 h-px bg-border"></div>
            </div>

            {/* Confidentiality Message */}
            <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground leading-relaxed text-sm font-satoshi" data-testid="text-confidentiality">
                We kindly request that you treat this invitation with utmost confidentiality. Our wedding is an intimate and small ceremony, reserved for our dearest and closest loved ones. We trust that only those invited will be present, so we ask that you refrain from sharing this information with others. Your understanding and respect for our privacy are sincerely appreciated. Thank you for being part of our special day.
              </p>
            </div>

            {/* Thank You Message */}
            <div className="max-w-2xl mx-auto">
              <p className="text-foreground leading-relaxed italic font-satoshi">
                We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="pt-8">
              <p className="text-foreground text-sm">
                With love and gratitude,
              </p>
              <p className="text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
                Jeremy & Carmela
              </p>
            </div>

            {/* Website Design Credit */}
            <div className="pt-8">
              <p className="text-foreground/60 text-xs" data-testid="text-design-credit">
                © website designed by MadDog of inviteee
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;