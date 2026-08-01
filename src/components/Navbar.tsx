import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-conecta-white.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const serviceLinks = [
    { href: "/interconexao", label: "Interconexão" },
    { href: "/sms-massa", label: "Envio de SMS em massa" },
    { href: "#plataforma-voz", label: "Plataforma para operadora de voz" },
    { href: "#plataforma-sms", label: "Plataforma para operadora de SMS" },
    { href: "#infraestrutura", label: "Infraestrutura Telecom" },
  ];
  return <nav className="fixed top-0 w-full z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <motion.a href="/" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center group">
            <img src={logoLight} alt="Conecta Igamming - Smart solutions for your business" className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex items-center gap-6" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/" 
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  >
                    Início
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {serviceLinks.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.label}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/quem-somos" 
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  >
                    Quem Somos
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-sm font-medium" asChild>
                <a href="#login">Login</a>
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <a href="#contato">Fale com a Gente</a>
              </Button>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full">
              <AnimatePresence mode="wait">
                <motion.div key={mobileMenuOpen ? 'x' : 'menu'} initial={{
                rotate: -90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: 90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden border-t border-border/50 mt-2">
              <div className="flex flex-col gap-2 py-6 px-2">
                <motion.a 
                  href="/" 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all rounded-lg font-medium"
                >
                  Início
                </motion.a>
                
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-foreground/60 mb-2">Serviços</div>
                  {serviceLinks.map((service, index) => (
                    <motion.a 
                      key={service.href}
                      href={service.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all rounded-lg"
                    >
                      {service.label}
                    </motion.a>
                  ))}
                </div>

                <motion.a 
                  href="/quem-somos"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all rounded-lg font-medium"
                >
                  Quem Somos
                </motion.a>

                <motion.a 
                  href="#login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all rounded-lg font-medium"
                >
                  Login
                </motion.a>

                <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: 0.5
            }}>
                  <Button className="w-full mt-2 bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
                    <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                      Fale com a Gente
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </nav>;
};