import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const countries = ["France", "Belgique", "Suisse", "Luxembourg", "Monaco", "Canada", "États-Unis", "Royaume-Uni", "Allemagne", "Espagne", "Italie", "Autre"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", country: "France", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Requis";
    if (!formData.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Email invalide";
    if (!formData.company.trim()) e.company = "Requis";
    if (!formData.message.trim()) e.message = "Requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
    toast.success("Votre message a bien été envoyé !");
    setIsSubmitting(false);
  };

  const inputClass = (field: string) =>
    `w-full bg-white border ${errors[field] ? "border-destructive" : "border-border"} text-foreground px-4 py-3 text-sm font-body rounded-md focus:border-gold focus:outline-none transition-colors`;

  return (
    <Layout>
      {/* Hero with form */}
      <section className="relative pt-20">
        {/* Gold/dark diagonal background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[50%] bg-olive" />
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-white" />
          {/* Diagonal overlay */}
          <svg className="absolute top-0 right-0 h-full w-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="30,0 100,0 100,100 0,100" fill="hsl(var(--dark))" opacity="0.85" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Contactez notre équipe</h1>
            <p className="text-body text-foreground/70 max-w-xl mx-auto">
              Si vous avez besoin d'assistance, des questions sur nos services ou souhaitez échanger avec nous, n'hésitez pas à nous contacter.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-gold mx-auto mb-6" />
                <h3 className="heading-display text-2xl mb-3">Message envoyé !</h3>
                <p className="text-body text-muted-foreground mb-6">Merci, nous vous répondrons dans les meilleurs délais.</p>
                <button onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", company: "", country: "France", message: "" }); }} className="btn-gold">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-body text-sm text-muted-foreground block mb-1.5">Votre nom*</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Julia William" className={inputClass("name")} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-body text-sm text-muted-foreground block mb-1.5">Votre email de contact*</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-body text-sm text-muted-foreground block mb-1.5">Nom de l'entreprise*</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className={inputClass("company")} />
                    {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="text-body text-sm text-muted-foreground block mb-1.5">Pays*</label>
                    <select name="country" value={formData.country} onChange={handleChange} className={inputClass("country")}>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-body text-sm text-muted-foreground block mb-1.5">Votre message*</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Écrivez votre message..." className={`${inputClass("message")} resize-none`} />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <p className="text-body text-xs text-muted-foreground leading-relaxed">
                  En soumettant ce formulaire, vous acceptez nos conditions générales ainsi que notre politique de confidentialité, qui précise la manière dont nous collectons, utilisons et partageons vos données personnelles, y compris avec certains tiers.
                </p>
                <button type="submit" disabled={isSubmitting} className="btn-gold disabled:opacity-50">
                  {isSubmitting ? "Envoi en cours..." : "Nous contacter"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Écrivez-nous</h3>
              <p className="text-body text-sm text-white/60 mb-4">
                Pour toute demande générale, y compris les opportunités de partenariat et de collaboration.
              </p>
              <a href="mailto:contact@tmr-executive.fr" className="text-gold font-body text-sm font-medium hover:underline">
                contact@tmr-executive.fr
              </a>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Appelez-nous</h3>
              <p className="text-body text-sm text-white/60 mb-4">
                Échangez directement avec un membre de notre équipe. Nous serons ravis de vous accompagner.
              </p>
              <a href="tel:+33189709028" className="text-gold font-body text-sm font-medium hover:underline">
                + 33 1 89 70 90 28
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
