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
  Globe, 
  Eye, 
  BarChart3, 
  DollarSign, 
  HeadphonesIcon, 
  Users,
  Zap,
  Code,
  MessageSquare,
  CheckCircle2
} from "lucide-react";

const SMSMassa = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Conexão com todo o país",
      description: "Com mais de 390 milhões de envios de SMS por mês, comprovamos a eficácia da comunicação em massa."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Alta taxa de abertura",
      description: "90% das mensagens SMS são lidas em até 3 minutos! Utilize o SMS para atingir seu público de forma rápida e eficiente."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Dados em tempo real",
      description: "Monitore a entrega e as estatísticas dos SMS enviados em tempo real para avaliar seus resultados e definir novas estratégias."
    }
  ];

  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "O melhor preço do mercado",
      description: "Sem mensalidade ou taxa de adesão, seu saldo não expira e pode ser utilizado quando desejar."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      title: "Suporte proativo com contato direto",
      description: "Feito por pessoas, nosso atendimento está sempre à disposição para resolver qualquer situação com rapidez e eficiência."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Negociação personalizada",
      description: "Soluções que otimizam a operação do seu negócio, com negociações personalizadas conforme suas necessidades."
    }
  ];

  const integrationFeatures = [
    { label: "Atendimento personalizado", icon: <Users className="w-5 h-5" /> },
    { label: "SMS 2way", icon: <MessageSquare className="w-5 h-5" /> },
    { label: "LA exclusiva", icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: "Envio com multi protocolos", icon: <Zap className="w-5 h-5" /> },
    { label: "BI em tempo real", icon: <BarChart3 className="w-5 h-5" /> }
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
              SMS em massa para otimizar sua comunicação e alcançar toda a sua base
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforme sua mensagem em resultados com os melhores preços do mercado.
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

      {/* Subtitle Section */}
      <section className="py-12 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Mensagens de alta abrangência a baixo custo.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              De que maneira o SMS marketing fortalece as estratégias de comunicação?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Uma comunicação eficiente requer conexão. Mensagens de fácil leitura e amplo alcance são cruciais para atingir o público certo no momento certo, criando engajamento e ligando seu negócio ao cliente final. É por isso que o SMS em massa é uma ferramenta poderosa: otimiza os processos de comunicação e gera resultados.
            </p>
            <p className="text-xl font-semibold text-center text-primary">
              Mensagens de amplo alcance a baixo custo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Code className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integração via API
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Automatize o envio de mensagens SMS através de CRMs, sistemas financeiros ou parceiros atuais. Realize uma implementação rápida e tenha acesso a uma interface para analisar seus envios em tempo real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {integrationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <p className="font-medium">{feature.label}</p>
                  <CheckCircle2 className="w-5 h-5 text-success ml-auto" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-6">Integrações</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold">Zapier</div>
                <div className="text-2xl font-bold">Pipedrive</div>
                <div className="text-2xl font-bold">IXCSoft</div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Converse agora com um especialista e descubra mais sobre as soluções da Conecta Igamming
              </h3>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={handleContactClick}
                  className="hover:scale-105 transition-transform"
                >
                  Saiba Mais
                </Button>
              </div>
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
                  Como funciona o envio de SMS em massa?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O envio de SMS em massa permite que você envie milhares de mensagens simultaneamente para sua base de contatos. Nossa plataforma oferece integração via API e painel web intuitivo para gerenciar suas campanhas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Qual é a taxa de entrega dos SMS?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nossa infraestrutura garante alta taxa de entrega, conectada com as principais operadoras do país. Você pode acompanhar todas as estatísticas em tempo real através do nosso painel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Como posso integrar o SMS à minha plataforma?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oferecemos integração via API REST de fácil implementação. Nossa equipe técnica fornece toda a documentação necessária e suporte durante a integração com seu CRM, ERP ou sistema personalizado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  Há contrato de fidelidade ou mensalidade?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não! Trabalhamos com o sistema de créditos pré-pagos, sem mensalidade ou taxa de adesão. Seu saldo não expira e você utiliza conforme sua necessidade, com total flexibilidade.
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

export default SMSMassa;
