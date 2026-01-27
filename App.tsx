import React, { useState, useEffect } from 'react';

// --- Constants ---
const PHONE_NUMBER = "792 061 992";
const PHONE_RAW = "tel:+48792061992";
const EMAIL = "borko92@onet.pl";
const SERVICE_AREA = "Bojszowy i okolice (do 30 km)";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 p-2 rounded-lg">
            <i className="fa-solid fa-bolt text-blue-900 text-xl"></i>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white md:text-blue-900'}`}>
            PRO <span className="text-yellow-400">ELEKTRYK</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#uslugi" className="text-white hover:text-yellow-400 transition-colors">Usługi</a>
          <a href="#o-mnie" className="text-white hover:text-yellow-400 transition-colors">Dlaczego ja</a>
          <a href="#galeria" className="text-white hover:text-yellow-400 transition-colors">Galeria</a>
          <a href="#kontakt" className="text-white hover:text-yellow-400 transition-colors">Kontakt</a>
        </div>

        <a href={PHONE_RAW} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-5 py-2 rounded-full font-bold transition-all shadow-md active:scale-95 flex items-center gap-2">
          <i className="fa-solid fa-phone"></i>
          <span className="hidden sm:inline">Zadzwoń</span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1920" 
          alt="Profesjonalny Elektryk Bojszowy" 
          className="w-full h-full object-cover object-center opacity-40 select-none"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full mb-6 animate-bounce">
            POMOC ELEKTRYCZNA - BOJSZOWY I OKOLICE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Pewne i Bezpieczne <br /> 
            <span className="text-yellow-400 underline decoration-2 underline-offset-8">Usługi Elektryczne</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-xl">
            Szybka pomoc przy awariach, profesjonalny montaż instalacji oraz podłączanie urządzeń. 
            Solidnie, czysto i zawsze na czas w najlepszej cenie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_RAW} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
              <i className="fa-solid fa-phone-flip text-xl"></i>
              Zadzwoń: {PHONE_NUMBER}
            </a>
            <a href="#uslugi" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
              Sprawdź Ofertę
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-400" src={`https://i.pravatar.cc/100?img=${i+12}`} alt="Klient" />
              ))}
            </div>
            <p className="text-blue-200 text-sm italic">
              Dołącz do zadowolonych klientów
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="reveal bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <i className={`fa-solid ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => (
  <section id="uslugi" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3">Pełen profesjonalizm</h2>
        <h2 className="text-4xl font-bold text-slate-900">Moja Oferta Usług</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto italic text-lg">Zapewniam kompleksowe wsparcie elektryczne dla Twojego domu i biura.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon="fa-house-bolt" 
          title="Instalacje Elektryczne" 
          description="Projektowanie i montaż nowych instalacji w domach, mieszkaniach oraz lokalach usługowych." 
        />
        <ServiceCard 
          icon="fa-screwdriver-wrench" 
          title="Pogotowie 24/7" 
          description="Błyskawiczne usuwanie awarii, naprawa zwarć i przywracanie zasilania o każdej porze." 
        />
        <ServiceCard 
          icon="fa-box" 
          title="Tablice i Rozdzielnice" 
          description="Modernizacja starych skrzynek bezpiecznikowych na bezpieczne, nowoczesne rozdzielnice." 
        />
        <ServiceCard 
          icon="fa-lightbulb" 
          title="Oświetlenie LED" 
          description="Montaż lamp, żyrandoli, systemów inteligentnego oświetlenia oraz taśm dekoracyjnych LED." 
        />
        <ServiceCard 
          icon="fa-plug-circle-check" 
          title="Podłączanie AGD" 
          description="Fachowy montaż płyt indukcyjnych, piekarników i pralek z podbiciem gwarancji producenta." 
        />
        <ServiceCard 
          icon="fa-vial" 
          title="Pomiary i Przeglądy" 
          description="Okresowe przeglądy instalacji, pomiary skuteczności ochrony i stanu izolacji." 
        />
      </div>
    </div>
  </section>
);

const WhyMe = () => (
  <section id="o-mnie" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35220adcfba?auto=format&fit=crop&q=80&w=1200" 
              alt="Profesjonalny montaż elektryczny" 
              className="w-full h-full object-cover min-h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-8 rounded-2xl shadow-xl hidden sm:block reveal">
            <p className="text-blue-900 font-bold text-4xl mb-1">SEP</p>
            <p className="text-blue-900 font-semibold text-sm">Uprawnienia <br />Państwowe</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3">Twoje bezpieczeństwo</h2>
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Dlaczego warto mi zaufać?</h2>
          <ul className="space-y-6">
            {[
              { title: "Lokalny fachowiec", text: "Działam w Bojszowach i okolicach, co gwarantuje najszybszy dojazd do klienta." },
              { title: "Czystość i porządek", text: "Dbam o estetykę pracy – po wykonaniu usługi zostawiam miejsce w nienagannym stanie." },
              { title: "Uczciwa wycena", text: "Zawsze ustalam cenę przed rozpoczęciem pracy. Bez ukrytych dopłat." },
              { title: "Doświadczenie i Wiedza", text: "Stale podnoszę swoje kwalifikacje, by oferować najbezpieczniejsze rozwiązania." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 reveal">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                  <i className="fa-solid fa-check text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                  <p className="text-slate-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="galeria" className="py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Moje Realizacje</h2>
      <p className="text-slate-600 mb-12">Zobacz przykłady prac wykonanych u moich klientów.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className="reveal aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200">
            <img 
              src={`https://picsum.photos/seed/elec-${i}/800/800`} 
              alt={`Realizacja elektryczna ${i}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="kontakt" className="py-24 bg-blue-900 text-white overflow-hidden relative">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Potrzebujesz fachowca? <br /> <span className="text-yellow-400">Jestem do usług!</span></h2>
          <p className="text-blue-100 mb-12 text-lg">Zadzwoń bezpośrednio lub wyślij wiadomość. Pomogę Ci rozwiązać każdy problem z prądem.</p>
          
          <div className="space-y-8">
            <a href={PHONE_RAW} className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all">
                <i className="fa-solid fa-phone text-2xl"></i>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Zadzwoń teraz</p>
                <p className="text-2xl font-bold">{PHONE_NUMBER}</p>
              </div>
            </a>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Gdzie działam?</p>
                <p className="text-2xl font-bold">{SERVICE_AREA}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Napisz e-mail</p>
                <p className="text-2xl font-bold">{EMAIL}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl reveal">
          <h3 className="text-2xl font-bold mb-6 italic">Zapytaj o darmową wycenę</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Twoje Imię</label>
              <input type="text" placeholder="Jan Kowalski" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Numer Telefonu</label>
              <input type="tel" placeholder="000 000 000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">W czym mogę pomóc?</label>
              <textarea rows={4} placeholder="Opisz krótko swój problem lub zakres prac..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 p-2 rounded-lg">
            <i className="fa-solid fa-bolt text-blue-900 text-lg"></i>
          </div>
          <span className="font-bold text-xl text-white tracking-tight">
            PRO <span className="text-yellow-400">ELEKTRYK</span>
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-google text-xl"></i></a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Profesjonalny Elektryk Bojszowy. Wszelkie prawa zastrzeżone.
        </p>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2 text-slate-500">Informacja prawna</p>
          <p className="text-sm">
            Działalność nierejestrowa zgodnie z art. 5 ustawy Prawo przedsiębiorców. 
            Obsługa klientów indywidualnych w regionie śląskim.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingCallButton = () => (
  <a 
    href={PHONE_RAW} 
    className="fixed bottom-6 right-6 z-50 md:hidden bg-yellow-400 text-blue-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-pulse active:scale-90 transition-transform"
  >
    <i className="fa-solid fa-phone text-2xl"></i>
  </a>
);

export default function App() {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    // Initial check for visibility on load
    setTimeout(handleReveal, 100);
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}