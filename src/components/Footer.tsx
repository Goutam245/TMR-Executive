import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="border border-white/60 px-3 py-1.5 inline-block font-body text-sm tracking-[0.15em] font-medium mb-6">
              TMR EXECUTIVE
            </div>
            <p className="text-body text-sm text-white/70 leading-relaxed mb-6">
              TMR Executive Cabinet d'Executive search spécialisé dans les talents et dirigeants des univers hospitality, lifestyle, food et premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Liens</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-body text-sm text-white/70 hover:text-gold transition-colors">Conditions générales</a>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Réseaux Sociaux</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-body text-sm text-white/70 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-body text-sm text-white/70 hover:text-gold transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/company/111938689/" target="_blank" rel="noopener noreferrer" className="text-body text-sm text-white/70 hover:text-gold transition-colors">Linkedin</a>
              <a href="#" className="text-body text-sm text-white/70 hover:text-gold transition-colors">Instagram</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contactez-nous</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-body text-sm text-white/70">60, rue François 1er 75008 Paris</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+33189709028" className="text-body text-sm text-white/70 hover:text-gold transition-colors">+ 33 1 89 70 90 28</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:contact@tmr-executive.fr" className="text-body text-sm text-white/70 hover:text-gold transition-colors">contact@tmr-executive.fr</a>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin size={16} className="text-gold mt-1 shrink-0" />
                <a href="https://www.linkedin.com/company/111938689/" target="_blank" rel="noopener noreferrer" className="text-body text-sm text-white/70 hover:text-gold transition-colors break-all">
                  https://www.linkedin.com/company/111938689/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-body text-xs text-white/40">
          ©Copyright TMR EXECUTIVE. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
