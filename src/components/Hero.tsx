import { AnimatedHero } from "@/components/ui/animated-hero";
import { Phone } from "lucide-react";
import { HiRocketLaunch } from "react-icons/hi2";

export const Hero = () => {
  const animatedWords = [
    "performance",
    "velocidade",
    "escalabilidade",
    "confiabilidade",
    "rentabilidade",
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547968260092", "_blank", "noopener,noreferrer");
  };

  const preTitleContent = (
    <span className="flex items-center gap-2">
      <HiRocketLaunch className="w-4 h-4" />
      Quando sua base é gigante, a comunicação precisa ser instantânea.
    </span>
  );

  return (
    <AnimatedHero
      preTitle={preTitleContent}
      staticTitle={
        <>
          Performance em Comunicação<br />para Grandes Operações, com
        </>
      }
      animatedWords={animatedWords}
      description="Em um mercado de apostas onde cada segundo representa lucro, retenção e segurança, a Conecta iGaming é o parceiro tecnológico que garante que suas mensagens cheguem, seus alertas sejam lidos e seus clientes confiem em cada interação."
      primaryButtonText="Solicitar proposta personalizada"
      primaryButtonAction={handleContactClick}
      secondaryButtonText="WhatsApp"
      secondaryButtonAction={handleWhatsAppClick}
      secondaryButtonIcon={<Phone className="w-4 h-4" />}
    />
  );
};
