import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Camera,
  Map,
  Building,
  HardHat,
  Video,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Zap,
  Menu,
  X,
  ArrowRight,
  MonitorPlay,
  Mail,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "./config";

const WHATSAPP_LINK = `https://wa.me/${config.contact.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para serviços de drone.`;

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#services" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Diferenciais", href: "#why-us" },
  { name: "Contato", href: "#contact" },
];

const serviceIcons = [
  <Camera className="w-10 h-10 mb-6 text-primary" />,
  <Building className="w-10 h-10 mb-6 text-primary" />,
  <HardHat className="w-10 h-10 mb-6 text-primary" />,
  <Map className="w-10 h-10 mb-6 text-primary" />,
  <Video className="w-10 h-10 mb-6 text-primary" />,
  <MonitorPlay className="w-10 h-10 mb-6 text-primary" />,
];

const differentialIcons = [
  <ShieldCheck className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <CheckCircle2 className="w-6 h-6" />,
];

function Logo({ className = "", size = "navbar" }: { className?: string; size?: "navbar" | "footer" }) {
  return (
    <a href="#home" className={`flex items-center group ${className}`}>
      <img
        src={config.brand.logoSrc}
        alt={config.brand.name}
        className={size === "navbar" ? "h-16 w-auto object-contain" : "h-20 w-auto object-contain"}
        data-testid="img-logo"
      />
    </a>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors tracking-wide uppercase font-display"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold uppercase tracking-wider font-display rounded-none px-6"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="button-orcamento-nav">
              Orçamento Rápido
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          data-testid="button-menu-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-primary transition-colors font-display tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold uppercase tracking-wider font-display rounded-none py-6 text-lg"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-[100dvh] flex items-center overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src="/images/hero-bg.png"
          alt="Vista aérea dramática da cidade"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:40px_40px] z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-display font-bold tracking-[0.2em] uppercase text-sm">
              {config.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-8 uppercase"
            data-testid="text-hero-title"
          >
            {config.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
              {config.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light"
          >
            {config.brand.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-display font-bold text-lg uppercase tracking-wider h-14 px-8 rounded-none group"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="button-cta-hero">
                {config.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-white hover:bg-white/5 font-display font-bold text-lg uppercase tracking-wider h-14 px-8 rounded-none"
            >
              <a href="#portfolio" data-testid="button-portfolio-hero">
                {config.hero.ctaSecondary}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-display tracking-[0.2em] text-muted-foreground uppercase">Rolar</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 border-b border-border bg-card/50 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {config.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center md:text-left flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4"
              data-testid={`stat-${i}`}
            >
              <span className="text-4xl md:text-5xl font-display font-bold text-white">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-display tracking-[0.1em] uppercase max-w-[100px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-primary font-display font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Nossas Soluções
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase max-w-2xl">
            Precisão Técnica,
            <br />
            Impacto Visual.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card/40 border border-border p-8 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              data-testid={`card-service-${index}`}
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {serviceIcons[index]}
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-card relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-primary font-display font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Arquivos
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase">
              Portfólio
            </h3>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-border text-white hover:bg-white/5 font-display rounded-none uppercase tracking-wider w-fit"
          >
            <a
              href={config.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-instagram-portfolio"
            >
              Ver mais no Instagram
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full">
        {config.portfolio.map((item, index) => (
          <motion.div
            key={index}
            initial={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)", flexGrow: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-[300px] md:h-full flex-1 md:flex-auto group overflow-hidden border-r border-b md:border-b-0 border-background"
            style={{ flexGrow: 1 }}
            data-testid={`card-portfolio-${index}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-primary font-display font-bold text-xs tracking-[0.2em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.category}
              </span>
              <h4 className="text-xl md:text-2xl font-display font-bold text-white uppercase leading-tight">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-display font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Diferenciais
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-8 leading-tight">
              O Padrão <br />
              Não é o Suficiente.
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
              Contratar um drone não é apenas subir uma câmera. É sobre dominar o espaço aéreo, entender a
              luz, garantir a segurança da operação e entregar um arquivo impecável que eleva o nível da sua
              produção.
            </p>

            <div className="space-y-8">
              {config.differentials.map((diff, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4"
                  data-testid={`card-differential-${i}`}
                >
                  <div className="w-12 h-12 rounded-none bg-card border border-border flex items-center justify-center text-primary shrink-0">
                    {differentialIcons[i]}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-2">
                      {diff.title}
                    </h4>
                    <p className="text-muted-foreground">{diff.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 border border-primary/30 m-6" />
            <img
              src="/images/portfolio-inspection.png"
              alt="Drone em operação"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity opacity-40"
            />
            <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20" />

            {config.techSpecs.map((spec, i) => (
              <div
                key={i}
                className={`absolute ${i === 0 ? "top-12 -left-8" : "bottom-20 -right-8 text-right"} bg-card border border-primary/50 p-4 shadow-2xl backdrop-blur-sm`}
                data-testid={`card-techspec-${i}`}
              >
                <span className="text-xs text-primary font-display tracking-widest block uppercase mb-1">
                  {spec.label}
                </span>
                <span className="text-2xl font-display font-bold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-32 relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground uppercase mb-6 leading-tight">
          {config.cta.title}
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
          {config.cta.subtitle}
        </p>

        <Button
          asChild
          size="lg"
          className="bg-background hover:bg-background/90 text-white font-display font-bold text-xl uppercase tracking-widest h-20 px-12 rounded-none group hover:scale-105 transition-transform duration-300 shadow-2xl"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
            data-testid="button-cta-main"
          >
            <MessageCircle className="w-8 h-8 text-primary" />
            {config.cta.button}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-muted-foreground max-w-md mb-8">
              Serviços profissionais de drone. Fotografia, cinematografia aérea, inspeções industriais e
              topografia em todo o território nacional.
            </p>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              {config.certifications.map((cert, i) => (
                <span key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-display"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-whatsapp-footer"
                >
                  {config.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-primary transition-colors"
                  data-testid="link-email-footer"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={config.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-instagram-footer"
                >
                  @{config.contact.instagram}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Map className="w-5 h-5 text-primary shrink-0" />
                <span>{config.contact.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Disponibilidade 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {config.brand.name}. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Desenvolvido com <Zap className="w-4 h-4 text-primary" /> precisão
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
