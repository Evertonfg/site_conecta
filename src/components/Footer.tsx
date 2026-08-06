import { AnimatedFooter } from "@/components/ui/animated-footer";
import { Phone, Mail, MessageSquare } from "lucide-react";
import logoLight from "@/assets/logo-conecta-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+5547968260092",
      label: "Telefone",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      href: "https://wa.me/5547968260092",
      label: "WhatsApp",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:atendimento@conectaigamming.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
    { label: "SMS em Massa", href: "#servicos" },
    { label: "Interconexão", href: "#servicos" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ];

  return (
    <AnimatedFooter
      brandName="Conecta Igamming"
      brandDescription="Soluções completas em Telecom para operadoras e call centers. Plataforma robusta para SMS e Voz."
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={
        <a 
          href="https://wa.me/5547968260092"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          <MessageSquare className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />
        </a>
      }
    />
  );
};
