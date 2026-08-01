import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Phone, Mail, Building2, User } from "lucide-react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi2";

const testimonials = [
  {
    id: 1,
    name: "Parceiro de Operadora Nacional",
    role: "Diretor de Operações",
    company: "Operadora Nacional",
    content:
      "A Conecta foi o divisor de águas na nossa operação. Entrega, compliance e suporte impecáveis.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Diretora de TI",
    company: "CallCenter Plus",
    content:
      "A qualidade das rotas de voz é impecável. Reduzimos custos em 40% e melhoramos significativamente a experiência dos nossos clientes. Recomendamos fortemente!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    role: "CEO",
    company: "InnovaTel",
    content:
      "Migrar para a Conecta iGaming foi a melhor decisão. A plataforma é robusta, confiável e o time comercial sempre atende nossas necessidades rapidamente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    smsConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.name.trim().length < 2 || formData.name.length > 100) {
      toast({
        title: "Erro de validação",
        description: "Nome deve ter entre 2 e 100 caracteres.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.email.length > 255) {
      toast({
        title: "Erro de validação",
        description: "E-mail muito longo.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", smsConsent: false });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-4">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white flex items-center justify-center gap-3">
            Conecta iGaming: onde performance encontra escalabilidade
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Envie milhões de mensagens. Conecte milhões de vozes. Sem quedas. Sem atrasos. Sem preocupações.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-success/30 bg-card shadow-xl shadow-success/5">
              <CardContent className="pt-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 border-success/30 focus:border-success transition-colors"
                        required
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail Corporativo
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 border-success/30 focus:border-success transition-colors"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 border-success/30 focus:border-success transition-colors"
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="company"
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-10 border-success/30 focus:border-success transition-colors"
                        required
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="sms-consent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, smsConsent: checked as boolean })
                      }
                      className="mt-0.5 border-success/50 data-[state=checked]:bg-success data-[state=checked]:border-success"
                    />
                    <label htmlFor="sms-consent" className="text-xs text-muted-foreground leading-tight">
                      Autorizo o envio de notificações por SMS, mensagens promocionais e informativas
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-success hover:bg-success/90 text-white shadow-lg shadow-success/30" 
                    size="lg"
                  >
                    Solicitar proposta personalizada
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2 flex items-center justify-center gap-2">
                    <HiDocumentText className="w-4 h-4" />
                    Ao enviar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                  </p>
                </form>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-sm mb-4 text-white/70 flex items-center justify-center gap-2">
                <IoChatbubbles className="w-5 h-5" />
                Atendimento direto com especialistas iGaming
              </p>
              <Button size="lg" variant="outline" className="border-success/30 hover:bg-success/10 hover:border-success/50 text-white hover:text-white" asChild>
                <a href="https://wa.me/5547968260092" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 max-w-md"
          >
            <AnimatedTestimonials
              testimonials={testimonials}
              title="Clientes Satisfeitos"
              subtitle="Empresas que confiam em nossas soluções"
              badgeText="⭐ Avaliação 5.0"
              autoRotateInterval={5000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
