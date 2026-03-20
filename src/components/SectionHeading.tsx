import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading = ({ title, subtitle, light = false, align = "center", className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`${align === "center" ? "text-center" : "text-left"} mb-12 lg:mb-16 ${className}`}
    >
      <h2 className={`heading-display text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body text-base md:text-lg ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
