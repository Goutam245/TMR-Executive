import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import CVModal from "@/components/CVModal";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop",
  talent: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&fit=crop",
  relation: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&fit=crop",
  matching: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
  dirigeant: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80&fit=crop",
  t1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&fit=crop",
  t2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&fit=crop",
  t3: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&fit=crop",
  t4: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop",
  t5: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&fit=crop",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const testimonials = [
  { name: "Claire D", role: "Directrice Commerciale", image: IMAGES.t1, text: "Jennifer et ses équipes ont une approche humaine, engagée et personnalisée. Je me suis sentie écoutée, comprise et soutenue." },
  { name: "Jean-Marc L", role: "Directeur Général", image: IMAGES.t2, text: "L'approche est très humaine, et cela fait du bien. TMR Executive crée du lien, donne du sens et instaure la confiance." },
  { name: "Sophie M.", role: "DRH", image: IMAGES.t3, text: "Avec TMR Executive, c'est comme travailler avec un partenaire interne." },
  { name: "Jean B", role: "Directrice Générale d'hôtel de chaîne", image: IMAGES.t4, text: "Jennifer et ses équipes ont très vite compris notre environnement, nos enjeux et le niveau d'exigence attendu. Les profils proposés étaient ciblés, pertinents et en phase avec notre culture." },
  { name: "Claire M", role: "DRH d'un groupe hôtelier", image: IMAGES.t5, text: "Notre recherche était complexe : nous cherchions un véritable mouton à cinq pattes. L'accompagnement a été constant, impliqué et très présent à chaque étape du processus." },
];

const Index = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const amount = 340;
      carouselRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Hero */}
      <section className="bg-dark min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-gold font-display text-3xl md:text-4xl font-bold mb-2">TMR EXECUTIVE</h1>
              <p className="font-body text-white text-xl md:text-2xl font-bold tracking-wider mb-4">TALENT • MATCHING • RELATIONSHIP</p>
              <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
                Recruter les leaders qui feront grandir votre organisation.
              </h2>
              <p className="text-body text-white/70 mb-8 max-w-lg">
                TMR Executive accompagne les dirigeants et les marques ambitieuses dans l'identification des profils stratégiques de leur secteur. Chaque entreprise a son histoire. Nous trouvons celles et ceux qui souhaitent l'écrire.
              </p>
              <Link to="/contact" className="btn-outline-gold">
                CONTACTEZ-NOUS
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-gold/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src={IMAGES.hero}
                alt="Professional executive woman"
                className="relative z-10 w-80 md:w-[28rem] h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">
              Un recrutement stratégique fondé sur la précision, le réseau et la confiance
            </h2>
            <p className="text-body text-white/60 max-w-3xl mx-auto">
              TMR Executive accompagne des groupes hôteliers, des établissements indépendants et des entreprises de services dans leurs recrutements de profils stratégiques.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: "500+", label: "Profils stratégiques rencontrés en 2025" },
              { number: "60+", label: "Missions menées en 2025" },
              { number: "10+", label: "Années de réseau et d'expérience sectorielle" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gold/40 rounded-lg p-8 text-center"
              >
                <div className="heading-display text-4xl md:text-5xl text-white mb-3">{stat.number}</div>
                <p className="text-body text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="bg-olive py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">Notre Mission</h2>
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">
              Chez TMR Executive, nous sommes convaincus que la qualité du recrutement repose sur trois piliers complémentaires : les talents, l'adéquation parfaite et la relation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Talent", image: IMAGES.talent, desc: "Nous allons au-delà du CV : nous voyons une histoire, une énergie, des forces uniques. Notre rôle est de révéler les talents, et non de simplement les évaluer." },
              { title: "Relation", image: IMAGES.relation, desc: "Nous croyons aux relations durables. Nous restons présents avant, pendant et après le processus, pour le client comme pour le candidat." },
              { title: "Matching", image: IMAGES.matching, desc: "Au cœur de notre métier : trouver la personne idéale. Lorsque tous les éléments s'harmonisent, la collaboration devient naturelle et durable." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-body text-sm text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigeant */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                VOUS ÊTES DIRIGEANT OU MANAGER ?
              </h2>
              <p className="text-body text-white/70 mb-8">
                Donnez un nouvel élan à votre carrière. Nous étudions chaque parcours avec attention.
              </p>
              <button onClick={() => setCvModalOpen(true)} className="btn-gold">
                <span className="mr-1">✦</span> ENVOYEZ-NOUS VOTRE CV
              </button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img src={IMAGES.dirigeant} alt="Professional woman in office" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground">Témoignages clients</h2>
          </motion.div>
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} className="text-gold" />
            </button>
            <div ref={carouselRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {testimonials.map((t) => (
                <div key={t.name} className="snap-start shrink-0 w-72 md:w-80 bg-white border border-border rounded-xl p-6 text-center">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-gold/20" />
                  <h4 className="font-display font-bold text-foreground text-sm">{t.name}</h4>
                  <p className="text-body text-xs text-muted-foreground italic mb-3">{t.role}</p>
                  <p className="text-body text-sm text-muted-foreground italic leading-relaxed">"{t.text}"</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} className="text-gold" />
            </button>
          </div>
        </div>
      </section>

      {/* Nos heureux clients */}
      <section className="bg-olive py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground">Nos heureux clients</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["TheFork", "Cheval Blanc", "LVMH", "LAVOREL", "EVOK"].map((name) => (
              <span key={name} className="font-display text-lg md:text-xl font-bold text-foreground/60 tracking-wider">{name}</span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
