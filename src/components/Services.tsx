import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Network, Settings } from "lucide-react";
import { HiLightBulb } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const services = [
  {
    icon: FaPhone,
    title: "Autenticação (2FA)",
    description:
      "Sem falhas, sem atrasos, sem risco de perda de login. Entregas instantâneas para garantir a segurança dos seus usuários.",
  },
  {
    icon: BiSolidMessageSquareDetail,
    title: "Notificações Financeiras",
    description:
      "Depósitos, bônus e resgates em tempo real. Seus clientes recebem confirmações no momento exato da transação.",
  },
  {
    icon: HiLightBulb,
    title: "Alertas de Apostas ao Vivo",
    description:
      "Engajamento imediato e conversão máxima. Notifique seus usuários sobre eventos em tempo real e maximize o retorno.",
  },
  {
    icon: BiSolidMessageSquareDetail,
    title: "Mensagens Transacionais",
    description:
      "Entregues com rastreabilidade e compliance total. Cada envio é certificado e auditável para garantir conformidade.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            Por que isso é vital para quem tem milhões de usuários
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada segundo de atraso em uma notificação pode representar milhares de apostas perdidas. Cada falha de entrega pode custar credibilidade e receita. Por isso, os grandes players do iGaming confiam na Conecta.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Connection Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="connection-grad" fx="0.5" fy="0.5">
                <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Horizontal line top */}
            <line
              x1="25"
              y1="15"
              x2="75"
              y2="15"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            
            {/* Vertical line left */}
            <line
              x1="25"
              y1="15"
              x2="25"
              y2="85"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            
            {/* Vertical line right */}
            <line
              x1="75"
              y1="15"
              x2="75"
              y2="85"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            
            {/* Horizontal line bottom */}
            <line
              x1="25"
              y1="85"
              x2="75"
              y2="85"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            
            {/* Animated lights */}
            <g mask="url(#connection-mask-1)">
              <circle
                className="service-connection connection-light-1"
                cx="0"
                cy="0"
                r="2"
                fill="url(#connection-grad)"
              />
            </g>
            <g mask="url(#connection-mask-2)">
              <circle
                className="service-connection connection-light-2"
                cx="0"
                cy="0"
                r="2"
                fill="url(#connection-grad)"
              />
            </g>
            <g mask="url(#connection-mask-3)">
              <circle
                className="service-connection connection-light-3"
                cx="0"
                cy="0"
                r="2"
                fill="url(#connection-grad)"
              />
            </g>
            <g mask="url(#connection-mask-4)">
              <circle
                className="service-connection connection-light-4"
                cx="0"
                cy="0"
                r="2"
                fill="url(#connection-grad)"
              />
            </g>
            
            <defs>
              <mask id="connection-mask-1">
                <line x1="25" y1="15" x2="75" y2="15" strokeWidth="1" stroke="white" />
              </mask>
              <mask id="connection-mask-2">
                <line x1="25" y1="15" x2="25" y2="85" strokeWidth="1" stroke="white" />
              </mask>
              <mask id="connection-mask-3">
                <line x1="75" y1="15" x2="75" y2="85" strokeWidth="1" stroke="white" />
              </mask>
              <mask id="connection-mask-4">
                <line x1="25" y1="85" x2="75" y2="85" strokeWidth="1" stroke="white" />
              </mask>
            </defs>
          </svg>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
