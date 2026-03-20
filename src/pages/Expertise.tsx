import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const IMAGES = {
  organisation: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80&fit=crop",
  honoraires: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&q=80&fit=crop",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const processSteps = [
  "Compréhension du besoin",
  "Mapping & ciblage sélectif",
  "Approche directe confidentielle",
  "Entretiens approfondis",
  "Shortlist argumentée",
  "Références & négociation",
  "Suivi d'intégration",
];

const services = [
  { title: "CHASSE DE TÊTES & EXECUTIVE SEARCH", desc: "Recrutement de dirigeants et profils stratégiques" },
  { title: "RECRUTEMENT MIDDLE MANAGEMENT & OPÉRATIONNEL", desc: "Managers, cadres et fonctions clés" },
  { title: "MANAGEMENT DE TRANSITION", desc: "Missions relais, transformation, ouverture" },
  { title: "RPO (Recruitment Process Outsourcing)", desc: "Externalisation partielle ou complète du recrutement" },
  { title: "TALENT MAPPING & APPROCHE DIRECTE", desc: "Identification ciblée de talents et marchés cachés" },
  { title: "CONSEIL EN ORGANISATION & STRUCTURATION RH", desc: "Accompagnement des phases de croissance" },
];

const Expertise = () => {
  return (
    <Layout>
      {/* Process Hero */}
      <section className="bg-dark pt-28 pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">Un process structuré</h1>
            <p className="text-body text-white/60 max-w-2xl mx-auto">
              TMR Executive sélectionne les dirigeants les plus adaptés à chaque organisation grâce à un processus rigoureux et précis.
            </p>
          </motion.div>

          {/* Timeline - horizontal on desktop, vertical on mobile */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gold/30" />
              {processSteps.map((step, i) => (
                <motion.div
                  key={step}
                  {...fadeInUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center w-36"
                >
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center relative z-10 mb-4">
                    <CheckCircle size={18} className="text-dark" />
                  </div>
                  <span className="text-body text-xs text-white/70 leading-tight">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Mobile vertical */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={step} {...fadeInUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <CheckCircle size={14} className="text-dark" />
                </div>
                <span className="text-body text-sm text-white/70">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="bg-olive py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img src={IMAGES.organisation} alt="Technology and teamwork" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
                Une organisation efficace et flexible
              </h2>
              <p className="text-body text-foreground/70 mb-4">
                TMR Executive est une organisation indépendante, s'appuyant sur un solide réseau d'experts en sourcing issus de divers secteurs.
              </p>
              <p className="text-body text-foreground/80 font-medium mb-4">
                Grâce à cette structure, nous garantissons :
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "un ciblage extrêmement précis",
                  "une approche directe efficace",
                  "une mobilisation rapide",
                  "une gestion de recrutements complexes ou confidentiels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-body text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-dark">CONTACTEZ-NOUS</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">Nos services</h2>
            <p className="text-body text-white/60 max-w-2xl">
              TMR Executive propose des services spécialisés de recrutement stratégique et de direction pour diverses organisations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-dark-card border border-white/10 rounded-lg p-6 hover:border-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                </div>
                <h3 className="font-body text-sm font-bold text-white mb-2 uppercase tracking-wide">{s.title}</h3>
                <p className="text-body text-sm text-white/50 mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honoraires */}
      <section className="bg-olive py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Honoraires calculés en pourcentage de la mission
              </h2>
              <p className="text-body text-foreground/70 mb-8">
                Chaque accompagnement est défini selon la nature du recrutement, le niveau de responsabilité du poste et le degré de complexité de la recherche. Nos conditions sont adaptées à chaque mission, dans une logique de partenariat sur mesure.
              </p>
              <Link to="/contact" className="btn-dark">
                CONTACTEZ-NOUS <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img src={IMAGES.honoraires} alt="Professional handshake" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
