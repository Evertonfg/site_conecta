import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MessageSquare } from "lucide-react";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaPhone, FaBuilding, FaBrain } from "react-icons/fa6";

const features = [
  {
    icon: HiRocketLaunch,
    title: "Entregas em até 8 segundos",
    description: "Velocidade que gera resultado",
  },
  {
    icon: Shield,
    title: "Compliance e LGPD nível enterprise",
    description: "Certificações e governança de dados",
  },
  {
    icon: FaBuilding,
    title: "Infraestrutura de nível carrier",
    description: "99,99% de disponibilidade",
  },
  {
    icon: MessageSquare,
    title: "+8 bilhões de mensagens",
    description: "Entregues com sucesso",
  },
  {
    icon: FaPhone,
    title: "+17 bilhões de minutos de voz",
    description: "Trafegados com excelência",
  },
  {
    icon: FaBrain,
    title: "Suporte humano 24/7",
    description: "Com expertise técnica",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            A infraestrutura por trás dos grandes resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com mais de 17 anos de experiência em Telecom, a Conecta entrega soluções corporativas de mensageria, voz e interconexão desenvolvidas para altíssimo volume e desempenho constante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-success/50 transition-all duration-300 hover:shadow-lg hover:shadow-success/10 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-success/20">
                      <feature.icon className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground italic">
            "Venha ser parceira da empresa com maior credibilidade do Brasil."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
