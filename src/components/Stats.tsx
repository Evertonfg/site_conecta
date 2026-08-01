import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Clock, Award, Send } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    icon: Headphones,
    value: "24/7",
    label: "suporte personalizado",
  },
  {
    icon: Clock,
    value: "+17Bi",
    label: "de minutos falados",
  },
  {
    icon: Award,
    value: "17+",
    label: "anos de experiência",
  },
  {
    icon: Send,
    value: "+8Bi",
    label: "de SMS enviados",
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCount(stat.value);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <Card className="relative overflow-hidden border-success/20 bg-card/30 backdrop-blur-md hover:bg-card/50 hover:border-success/40 transition-all duration-300 hover:shadow-lg hover:shadow-success/10 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Green corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-success/10 blur-2xl" />
        
        <CardContent className="relative pt-5 pb-5 px-4">
          <motion.div
            className="relative w-12 h-12 mx-auto mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-success/20 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative w-full h-full rounded-xl bg-success/10 border border-success/30 flex items-center justify-center group-hover:border-success/50 transition-colors">
              <stat.icon className="w-5 h-5 text-success" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-success bg-clip-text text-transparent"
          >
            {count}
          </motion.div>

          <div className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">
            {stat.label}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-success/80 to-success/20"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          />
          
          {/* Green dot indicator */}
          <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-success/40 group-hover:bg-success animate-pulse" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="relative py-16 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-success/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Know-how para oferecer as melhores soluções
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Experiência comprovada em entregar resultados excepcionais
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
