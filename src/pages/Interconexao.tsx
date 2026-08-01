import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background";
import { 
  Phone, 
  TrendingUp, 
  FileText, 
  Network, 
  Layers, 
  Zap, 
  Users, 
  Building2,
  CheckCircle2,
  HeadphonesIcon
} from "lucide-react";

const Interconexao = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "CPS ilimitado",
      description: "Sua operação faz ligações sem restrições, garantindo performance ideal."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Relatórios",
      description: "Antecipe soluções para falhas e instabilidades nos processos do cliente."
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Interconexão com as maiores operadoras",
      description: "Nossa parceria e expertise proporcionam agilidade na implementação do serviço."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Alta capacidade de canais",
      description: "Infraestrutura que proporciona múltiplos canais para potencializar sua operação."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Interconexão ágil",
      subtitle: "Interconexão simplificada",
      description: "Processo rápido e eficiente para começar a operar."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Negociação personalizada",
      description: "Soluções que ajudam a otimizar a operação do seu negócio, por isso, a negociação é personalizada de acordo com a sua necessidade."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      title: "Suporte proativo com contato direto",
      description: "Feito por pessoas, nosso atendimento está sempre à disposição para resolver qualquer situação com rapidez e eficiência."
    }
  ];

  const stats = [
    { label: "Estrutura robusta", icon: <Building2 className="w-5 h-5" /> },
    { label: "Time de especialistas", icon: <Users className="w-5 h-5" /> },
    { label: "83,3 milhões de minutos falados por mês", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Atendimento e suporte feito por pessoas", icon: <HeadphonesIcon className="w-5 h-5" /> }
  ];

  const handleContactClick = () => {
    window.location.href = "/#contato";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Interconexão a preços imbatíveis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A Conecta Igamming oferece telecomunicações completas, com rotas de voz de alta qualidade e preços imbatíveis. 
              Simplificamos a implementação e o atendimento, com suporte dedicado às suas necessidades.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={handleContactClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Converse com um especialista
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Os melhores benefícios em serviço de Voz IP
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg hover:shadow-primary/10 transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Como uma rota de voz de qualidade impacta seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Através da interconexão com as principais operadoras do país, a Conecta Igamming assegura a estabilidade 
              e alta qualidade das rotas de voz. Isso resulta em desempenho superior, gerando mais resultados para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Os melhores benefícios em serviço de Voz sobre IP
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg hover:shadow-primary/10 transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    {feature.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      {feature.subtitle && (
                        <p className="text-sm text-primary">{feature.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conectamos pessoas com soluções através da tecnologia
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Estamos há mais de 16 anos no mercado Telecom e criamos soluções práticas com baixo custo para nossos clientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <p className="text-left font-medium">{stat.label}</p>
                  <CheckCircle2 className="w-5 h-5 text-success ml-auto" />
                </motion.div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
              <h3 className="text-2xl font-bold mb-4">
                Converse agora com um especialista e entenda mais sobre as soluções da Conecta Igamming
              </h3>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleContactClick}
                className="hover:scale-105 transition-transform"
              >
                Saiba Mais
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Quem é a Conecta Igamming?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Somos especialistas em soluções de comunicação via tecnologia, oferecendo o máximo em potência para 'conectar pessoas' através de soluções em Telecom.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Tem como aumentar minha taxa de atendimento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, temos! Nossa expertise em Telecom levou nossos produtos a outro patamar, com inteligência e performance. É assim que aumentamos sua taxa de atendimento e otimizamos sua operação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Não tenho altas demandas, posso usar o serviço?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Claro! Basta informar como funciona seu processo, o número de PAs e a minutagem mensal. Com esses dados, os especialistas da Conecta Igamming entrarão em contato para apresentar mais sobre nossas soluções.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Vai valer a pena trocar de serviço se o meu funciona?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Com certeza! Temos alta capacidade de canais e CPS ilimitado, o que nos diferencia de todos os concorrentes. Na Conecta Igamming, o foco é você! Oferecemos suporte proativo e canal direto de contato. Com mais de 16 anos de mercado, entregamos muito mais que soluções em Telecom para nossos clientes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interconexao;
