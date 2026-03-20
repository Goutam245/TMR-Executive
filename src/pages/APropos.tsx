import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
  linkedin1: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80&fit=crop",
  linkedin2: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80&fit=crop",
  secteurs: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80&fit=crop",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const fonctions = [
  { title: "Direction Générale", desc: "CEO • Directeur Général • COO" },
  { title: "Business Development", desc: "Direction Commerciale • Directeur des Ventes • Sales Manager" },
  { title: "Opérations", desc: "Directeur des Opérations • Directeur F&B • Direction Hébergement • Gouvernance Générale • Conciergerie" },
  { title: "Marketing & Brand", desc: "Directeur Marketing • Brand Manager" },
  { title: "Ressources Humaines", desc: "DRH • RRH • Directeur des Talents" },
  { title: "Finance", desc: "CFO • Directeur Financier • Cost Controller" },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-dark min-h-[70vh] flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">ADN HOSPITALITY</span>
              <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                CABINET SPÉCIALISÉ LEADERSHIP HOSPITALITY
              </h1>
              <p className="text-body text-white/70 mb-4">
                TMR Executive est un cabinet de chasse de têtes et de recrutement exécutif fondé par <strong className="text-white">Jennifer Bunan</strong>.
              </p>
              <p className="text-body text-white/70 mb-4">
                Fort de plus de quinze années d'expérience opérationnelle dans le luxe, la food et l'hospitalité, le cabinet accompagne depuis plus de dix ans les dirigeants dans leurs recrutements stratégiques.
              </p>
              <p className="text-body text-white/70">
                Ancienne directrice commerciale, Jennifer Bunan apporte une double lecture : business et humaine.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src={IMAGES.hero} alt="Luxury hotel interior" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="bg-dark py-20 lg:py-28 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">Notre approche</h2>
            <p className="text-body text-white/70 max-w-3xl mx-auto mb-4">
              Nous accompagnons chaque mission avec une lecture fine des enjeux humains, opérationnels et stratégiques de nos clients. Notre approche repose sur l'écoute, la précision et une parfaite compréhension des codes de l'hospitality, du luxe et des environnements exigeants.
            </p>
            <p className="text-body text-white/70 max-w-3xl mx-auto mb-10">
              Chaque recherche est menée avec exigence, discrétion et engagement, afin d'identifier des profils capables de s'inscrire durablement dans une vision, une culture et une ambition.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Excellence", "Orienté résultat", "Culture du Service", "Excellence Opérationnelle"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/60 text-gold text-sm font-body font-medium">
                  <CheckCircle size={14} /> {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="bg-dark-card py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-display text-3xl md:text-4xl text-white mb-6 leading-tight">
                Une visibilité LINKEDIN stratégique
              </h2>
              <p className="text-body text-white/70 mb-4">
                TMR Executive s'appuie sur une présence active et engagée sur LinkedIn, véritable levier d'identification des talents. Les prises de parole régulières permettent d'attirer naturellement des profils qualifiés, dirigeants et experts de leur secteur.
              </p>
              <p className="text-body text-white/70 mb-8">
                En complément, TMR Executive s'entoure d'un réseau de sourceurs spécifiquement sélectionnés pour leur expertise sectorielle.
              </p>
              <a
                href="https://www.linkedin.com/company/111938689/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs"
              >
                <ExternalLink size={14} /> Voir sur LinkedIn
              </a>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex gap-4 justify-center">
              <img src={IMAGES.linkedin1} alt="LinkedIn profile" className="w-40 md:w-48 rounded-2xl shadow-xl object-cover aspect-[9/16]" />
              <img src={IMAGES.linkedin2} alt="LinkedIn feed" className="w-40 md:w-48 rounded-2xl shadow-xl object-cover aspect-[9/16] mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les postes que nous recrutons */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">Les postes que nous recrutons</h2>
            <p className="text-body text-white/60 max-w-2xl mx-auto mb-6">
              TMR Executive se spécialise dans la recherche des talents adéquats pour les postes stratégiques et de direction au sein de diverses organisations.
            </p>
            <span className="font-body text-xs tracking-[0.2em] text-gold uppercase font-semibold">
              FONCTIONS RECRUTÉES PAR TMR EXECUTIVE
            </span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctions.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-dark-card border border-white/10 rounded-lg p-6 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-body text-sm text-white/50">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="bg-olive py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Secteurs d'activité dans lesquels nous intervenons
              </h2>
              <p className="text-body text-foreground/70 mb-8">
                Nous intervenons lorsque le recrutement devient stratégique, complexe ou confidentiel.
              </p>
              <ul className="space-y-4">
                {[
                  "Hospitality (Groupes hôteliers • Entreprises familiales)",
                  "Restauration & Food concepts",
                  "Art de vivre / Retail",
                  "Start-up & scale-up",
                  "Événementiel & Luxe",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span className="text-body text-foreground/80">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img src={IMAGES.secteurs} alt="Professional business meeting" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
