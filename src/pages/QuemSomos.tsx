import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Briefcase, Trophy, Zap } from "lucide-react";
const QuemSomos = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    window.scrollTo(0, 0);
  }, []);
  const pillars = [{
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Colaboradores",
    description: "Para nós, cooperar é mais do que uma ajuda pontual; é fazer parte do resultado final que gera impacto em cada negócio.",
    fullDescription: "Somos colaboradores porque acreditamos que a força vem do coletivo. Pessoas unidas por um mesmo propósito podem ir muito mais longe, seja integrando uma equipe ou apoiando negócios e parceiros.",
    tags: ["envolvente", "parceira", "resolutiva"]
  }, {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: "Trabalhadores",
    description: "O princípio de qualquer grande conquista começa com a ação.",
    fullDescription: "Planejamento sem ação é apenas uma ideia ou uma lista de desejos. Somos uma marca trabalhadora, pois nossa essência é a união de esforços para realizar objetivos, sempre com dedicação e empenho. Para nós, a ação é o que impulsiona o aperfeiçoamento, e para isso é necessário trabalho árduo.",
    tags: ["resolvedora", "dinâmica"]
  }, {
    icon: <Trophy className="w-12 h-12 text-primary" />,
    title: "Competitivos",
    description: "O mundo está mais acelerado, repleto de informações e oportunidades. Apenas empresas preparadas, com um histórico positivo, conseguem se manter relevantes, e para isso é necessário ser obstinado.",
    fullDescription: "Somos competitivos porque direcionamos nossos esforços técnicos, conhecimento e infraestrutura para oferecer as melhores soluções aos nossos clientes.",
    tags: ["inspiradora", "preparada", "obstinada"]
  }];
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Quem somos
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 font-medium">
              Conectar pessoas e criar soluções por meio da tecnologia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              A comunicação é a base da evolução.
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Através da comunicação, o conhecimento se propaga. Além de disseminar ideias e informações, ela nos mantém conectados a grupos com os mesmos ideais. Na Conecta Igamming, reconhecemos a importância da comunicação eficaz para fortalecer essas conexões.
            </p>
            <p className="text-xl font-semibold text-center text-primary">
              Na Conecta Igamming, ela mobiliza, impacta e estabelece conexões.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pilares do nosso negócio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }}>
                <Card className="p-8 h-full hover:shadow-lg hover:shadow-primary/10 transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">{pillar.icon}</div>
                    <span className="text-sm text-muted-foreground mb-2">Somos</span>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-4">{pillar.description}</p>
                    <p className="text-muted-foreground mb-6">{pillar.fullDescription}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {pillar.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      

      {/* Final Message Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-primary text-primary-foreground border-0 text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conectar para transformar
              </h2>
              <p className="text-lg mb-4 opacity-90">
                Acreditamos no poder transformador na vida de pessoas e empresas. Nosso foco é ser o canal que possibilita essas interações.
              </p>
              <p className="text-lg opacity-90">
                Seja por voz ou por texto, estamos aqui para pavimentar o caminho para que sua marca participe dessa transformação.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default QuemSomos;