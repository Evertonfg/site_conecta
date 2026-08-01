import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import DisplayCards from "@/components/ui/display-cards";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
interface AnimatedHeroProps {
  preTitle?: string | React.ReactNode;
  preTitleAction?: () => void;
  staticTitle: string | React.ReactNode;
  animatedWords: string[];
  description: string;
  primaryButtonText: string;
  primaryButtonAction?: () => void;
  secondaryButtonText: string;
  secondaryButtonAction?: () => void;
  secondaryButtonIcon?: React.ReactNode;
}
function AnimatedHero({
  preTitle,
  preTitleAction,
  staticTitle,
  animatedWords,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  secondaryButtonIcon
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => animatedWords, [animatedWords]);
  const [notificationIndex, setNotificationIndex] = useState(0);

  // SMS notification templates
  const smsNotifications = useMemo(() => [{
    icon: <MessageSquare className="size-4 text-success" />,
    title: "SMS Enviado",
    description: "+55 11 9****-1234",
    date: "Agora mesmo",
    iconClassName: "text-success",
    titleClassName: "text-success"
  }, {
    icon: <Send className="size-4 text-primary" />,
    title: "Mensagem Entregue",
    description: "+55 21 9****-5678",
    date: "1 seg atrás",
    iconClassName: "text-primary",
    titleClassName: "text-primary"
  }, {
    icon: <CheckCircle className="size-4 text-accent" />,
    title: "Confirmado",
    description: "+55 47 9****-9012",
    date: "2 seg atrás",
    iconClassName: "text-accent",
    titleClassName: "text-accent"
  }, {
    icon: <MessageSquare className="size-4 text-success" />,
    title: "SMS Enviado",
    description: "+55 85 9****-3456",
    date: "Agora mesmo",
    iconClassName: "text-success",
    titleClassName: "text-success"
  }, {
    icon: <Send className="size-4 text-primary" />,
    title: "Em Processamento",
    description: "+55 19 9****-7890",
    date: "3 seg atrás",
    iconClassName: "text-primary",
    titleClassName: "text-primary"
  }, {
    icon: <CheckCircle className="size-4 text-accent" />,
    title: "Lido pelo Cliente",
    description: "+55 31 9****-2345",
    date: "5 seg atrás",
    iconClassName: "text-accent",
    titleClassName: "text-accent"
  }, {
    icon: <MessageSquare className="size-4 text-success" />,
    title: "SMS Enviado",
    description: "+55 41 9****-6789",
    date: "Agora mesmo",
    iconClassName: "text-success",
    titleClassName: "text-success"
  }, {
    icon: <Send className="size-4 text-primary" />,
    title: "Entrega Confirmada",
    description: "+55 51 9****-0123",
    date: "2 seg atrás",
    iconClassName: "text-primary",
    titleClassName: "text-primary"
  }], []);
  const metricsNotifications = useMemo(() => [{
    icon: <MessageSquare className="size-4 text-success" />,
    title: "Campanha Ativa",
    description: "1.2M SMS/hora",
    date: "Em andamento",
    iconClassName: "text-success",
    titleClassName: "text-success"
  }, {
    icon: <Send className="size-4 text-primary" />,
    title: "Alta Performance",
    description: "99.9% entrega",
    date: "Tempo real",
    iconClassName: "text-primary",
    titleClassName: "text-primary"
  }, {
    icon: <CheckCircle className="size-4 text-accent" />,
    title: "Operação Estável",
    description: "24/7 disponível",
    date: "Online",
    iconClassName: "text-accent",
    titleClassName: "text-accent"
  }, {
    icon: <MessageSquare className="size-4 text-success" />,
    title: "Volume Alto",
    description: "850K SMS/hora",
    date: "Processando",
    iconClassName: "text-success",
    titleClassName: "text-success"
  }, {
    icon: <Send className="size-4 text-primary" />,
    title: "Latência Baixa",
    description: "< 100ms resposta",
    date: "Monitorado",
    iconClassName: "text-primary",
    titleClassName: "text-primary"
  }, {
    icon: <CheckCircle className="size-4 text-accent" />,
    title: "Infraestrutura OK",
    description: "100% uptime",
    date: "Saudável",
    iconClassName: "text-accent",
    titleClassName: "text-accent"
  }], []);

  // Generate random notification cards
  const generateCards = (notifications: typeof smsNotifications) => {
    const startIndex = notificationIndex % notifications.length;
    return [0, 1, 2].map(offset => {
      const index = (startIndex + offset) % notifications.length;
      const notification = notifications[index];
      const classNames = ["[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0", "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0", "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"];
      return {
        ...notification,
        className: classNames[offset]
      };
    });
  };
  const smsCards = generateCards(smsNotifications);
  const metricsCards = generateCards(metricsNotifications);

  // Animate title words
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // Rotate notifications every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNotificationIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return <div className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
        <img src="/src/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
      </div>

      {/* Green Particles Effect */}
      <div className="absolute inset-0 z-10">
        <Particles />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.6, 0.4],
        x: [0, -30, 0],
        y: [0, 50, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.5, 0.2]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      </div>

      <div className="container mx-auto relative z-20 px-4">
        {/* SMS Notifications Background Effect - Left Side */}
        <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 hidden lg:block opacity-30 pointer-events-none" initial={{
        opacity: 0,
        x: -100
      }} animate={{
        opacity: 0.3,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }}>
          <DisplayCards cards={smsCards} />
        </motion.div>

        {/* SMS Notifications Background Effect - Right Side */}
        <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 hidden lg:block opacity-20 pointer-events-none scale-90" initial={{
        opacity: 0,
        x: 100
      }} animate={{
        opacity: 0.2,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.7
      }}>
          <DisplayCards cards={metricsCards} />
        </motion.div>

        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {preTitle && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
              
            </motion.div>}

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="flex justify-center">
            <PointerHighlight rectangleClassName="border-primary" pointerClassName="text-primary">
              <span className="text-2xl md:text-3xl font-bold text-white px-4 py-2">
                SMS em até 8 segundos
              </span>
            </PointerHighlight>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular leading-tight">
              <span className="block mb-2 drop-shadow-lg">{staticTitle}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} className="absolute font-semibold bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl" initial={{
                opacity: 0,
                y: "-100"
              }} transition={{
                type: "spring",
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }}>
                    {title}
                  </motion.span>)}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mx-auto drop-shadow-sm">
              {description}
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-4 bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" onClick={primaryButtonAction}>
              {primaryButtonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="gap-4 border-primary/50 hover:bg-primary/10 backdrop-blur-sm bg-background/50 hover:border-primary transition-all" variant="outline" onClick={secondaryButtonAction}>
              {secondaryButtonIcon || <Phone className="w-4 h-4" />}
              {secondaryButtonText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" animate={{
          y: [0, 16, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </div>;
}
export { AnimatedHero };