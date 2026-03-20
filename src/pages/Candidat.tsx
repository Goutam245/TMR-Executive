import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import CVModal from "@/components/CVModal";

const IMAGES = {
  t1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&fit=crop",
  t2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&fit=crop",
  dirigeant: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&fit=crop",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const candidateTestimonials = [
  { role: "Directeur F&B", location: "Resort 5★ – Côte d'Azur", image: IMAGES.t1, text: "Le parcours a été valorisé avec justesse et transparence." },
  { role: "Directrice Commerciale", location: "Enseigne Internationale – Île-de-France", image: IMAGES.t2, text: "Jennifer a su comprendre mes enjeux personnels autant que mes ambitions professionnelles." },
];

const Candidat = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Hero */}
      <section className="bg-dark min-h-[60vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">Êtes-vous candidat ?</h1>
            <p className="text-body text-lg text-white font-medium mb-2">
              Construisez une carrière en accord avec vos objectifs et vos ambitions.
            </p>
            <p className="text-body text-white/60 max-w-xl mx-auto mb-8">
              Nous évaluons chaque candidature avec le plus grand soin et dans la plus stricte confidentialité.
            </p>
            <button onClick={() => setCvModalOpen(true)} className="btn-gold">
              <span>✦</span> ENVOYEZ-NOUS VOTRE CV
            </button>
          </motion.div>
        </div>
      </section>

      {/* Témoignages candidats */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground">Témoignages candidats</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center transition-colors">
              <ChevronLeft size={20} className="text-gold" />
            </button>
            <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {candidateTestimonials.map((t) => (
                <div key={t.role} className="snap-start shrink-0 w-72 md:w-80 bg-white border border-border rounded-xl p-6 text-center">
                  <img src={t.image} alt={t.role} className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-gold/20" />
                  <h4 className="font-display font-bold text-foreground text-sm">{t.role}</h4>
                  <p className="text-body text-xs text-muted-foreground italic mb-3">{t.location}</p>
                  <p className="text-body text-sm text-muted-foreground italic">"{t.text}"</p>
                </div>
              ))}
            </div>
            <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center transition-colors">
              <ChevronRight size={20} className="text-gold" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">Vous recherchez un profil stratégique ?</h2>
            <p className="text-body text-lg text-white/70 font-medium mb-8">
              Confiez-nous votre recherche de personnel en toute confidentialité.
            </p>
            <Link to="/contact" className="btn-outline-gold">ÉCHANGEONS</Link>
          </motion.div>
        </div>
      </section>

      {/* Directeur section */}
      <section className="bg-olive py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Êtes-vous directeur ou manager ?
              </h2>
              <p className="text-body text-foreground/70 mb-4">
                Donnez un nouvel élan à votre carrière. Nous évaluons chaque profil avec soin.
              </p>
              <button onClick={() => setCvModalOpen(true)} className="btn-dark">
                <span>✦</span> ENVOYEZ-NOUS VOTRE CV
              </button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img src={IMAGES.dirigeant} alt="Professional executive man" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Candidat;
