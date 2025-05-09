import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      gallery: "Gallery",
      about: "About",
      shop: "Shop",
      contact: "Contact",
      login: "Login",
      signup: "Sign Up",
      welcome: "Welcome to my equine world",
      heroText: "Discover the beauty of horses through fine art",
      aboutTitle: "About the Artist",
      aboutText:
        "I'm a passionate equine artist dedicated to capturing the spirit and grace of horses in my work. With over 3 years of experience, I blend traditional photographic techniques with cutting-edge digital processes to create limited edition art prints",
      ctaButton: "View Gallery",
      contactButton: "Get in Touch",
      contactTitle: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      shopTitle: "Artwork for Sale",
      copyright: "© 2025 Valentin Borsan Fine Equine Art. All rights reserved.",
      contactSubtitle: "Get in touch for commissions or inquiries",
      contactInfoTitle: "Contact Information",
      phone: "Phone",
      address: "Studio Address",
      sendMessageTitle: "Send a Message",
      formSuccessMessage:
        "Thank you for your message! I'll get back to you soon.",
      sendAnother: "Send another message",
      aboutTitle: "About the Artist",
      aboutText:
        "Discover my story, the techniques I use, and the philosophy behind my art.",
      journeyTitle: "My Journey",
      journeyText:
        "My passion for equine art began in childhood when I first encountered horses. Their grace and power captivated me, and I've been translating that fascination onto canvas ever since.",
      techniquesTitle: "Techniques",
      techniquesText:
        "I work primarily in oil and watercolor, blending traditional methods with contemporary approaches. Each piece undergoes multiple layers to achieve depth and texture that brings the subjects to life.",
      philosophyTitle: "Philosophy",
      philosophyText:
        "I believe art should capture not just the physical form but the spirit of the subject. My goal is to create pieces that evoke emotion and connection between viewer and subject.",
      studioTitle: "My Studio",
      studioText:
        "Located in the countryside surrounded by nature, my studio is a peaceful space where creativity flows. I welcome visitors by appointment to discuss commissions or view works in progress.",
    },
  },
  ro: {
    translation: {
      home: "Acasă",
      gallery: "Galerie",
      about: "Despre",
      shop: "Magazin",
      contact: "Contact",
      login: "Autentificare",
      signup: "Înregistrare",
      welcome: "Bun venit în lumea mea ecvestră.",
      heroText: "Descoperă frumusețea cailor prin arta fină",
      aboutTitle: "Despre Artist",
      aboutText:
        "Sunt un artist pasionat de cai, dedicat să surprind spiritul și grația acestor animale în lucrările mele. Cu peste 3 ani de experiență, combin tehnici fotografice tradiționale cu procese digitale de ultimă oră pentru a crea printuri de excepție.",
      ctaButton: "Vezi Galeria",
      contactButton: "Contactează-mă",
      contactTitle: "Contact",
      name: "Nume",
      email: "Email",
      message: "Mesaj",
      send: "Trimite",
      shopTitle: "Lucrări de Artă de Vânzare",
      copyright:
        "© 2025 Valentin Borsan Fine Equine Art. Toate drepturile rezervate.",
      contactSubtitle: "Contactați-mă pentru comenzi sau întrebări",
      contactInfoTitle: "Informații de contact",
      phone: "Telefon",
      address: "Adresa studioului",
      sendMessageTitle: "Trimite un mesaj",
      formSuccessMessage:
        "Vă mulțumim pentru mesaj! Vă voi răspunde în curând.",
      sendAnother: "Trimite alt mesaj",
      aboutTitle: "Despre Artist",
      aboutText:
        "Descoperă povestea mea, tehnicile folosite și filosofia care îmi ghidează arta.",
      journeyTitle: "Călătoria Mea",
      journeyText:
        "Pasiunea mea pentru arta ecvină a început în copilărie, când am întâlnit pentru prima dată caii. Grația și puterea lor m-au captivat, iar de atunci încerc să redau acea fascinație pe pânză.",
      techniquesTitle: "Tehnici",
      techniquesText:
        "Lucrez în principal în ulei și acuarelă, îmbinând tehnici tradiționale cu abordări contemporane. Fiecare lucrare trece prin mai multe straturi pentru a obține profunzimea și textura care dau viață subiectelor.",
      philosophyTitle: "Filosofie",
      philosophyText:
        "Cred că arta ar trebui să surprindă nu doar forma fizică, ci și spiritul subiectului. Scopul meu este să creez lucrări care trezesc emoție și o conexiune între privitor și subiect.",
      studioTitle: "Studioul Meu",
      studioText:
        "Situat la țară, în mijlocul naturii, studioul meu este un spațiu liniștit în care creativitatea curge liber. Primesc vizitatori cu programare pentru a discuta despre comenzi personalizate sau pentru a vedea lucrări în curs de realizare.",
    },
  },
  it: {
    translation: {
      home: "Home",
      gallery: "Galleria",
      about: "Chi Sono",
      shop: "Negozio",
      contact: "Contatto",
      login: "Accesso",
      signup: "Registrati",
      welcome: "Benvenuti nel mio mondo equestre",
      heroText: "Scopri la bellezza dei cavalli attraverso l'arte",
      aboutTitle: "Sull'Artista",
      aboutText:
        "Sono un artista equino appassionato, dedicato a catturare lo spirito e la grazia dei cavalli nel mio lavoro. Con oltre 3 anni di esperienza, unisco tecniche fotografiche tradizionali a processi digitali all'avanguardia per creare stampe d'autore.",
      ctaButton: "Vedi Galleria",
      contactButton: "Contattami",
      contactTitle: "Contatto",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      send: "Invia",
      shopTitle: "Opere d'Arte in Vendita",
      copyright:
        "© 2025 Valentin Borsan Fine Equine Art. Tutti i diritti riservati.",
      contactSubtitle: "Contattami per commissioni o domande",
      contactInfoTitle: "Informazioni di contatto",
      phone: "Telefono",
      address: "Indirizzo dello studio",
      sendMessageTitle: "Invia un messaggio",
      formSuccessMessage:
        "Grazie per il tuo messaggio! Ti risponderò al più presto.",
      sendAnother: "Invia un altro messaggio",
      aboutTitle: "Informazioni sull'Artista",
      aboutText:
        "Scopri la mia storia, le tecniche che utilizzo e la filosofia che guida la mia arte.",
      journeyTitle: "Il Mio Percorso",
      journeyText:
        "La mia passione per l’arte equina è iniziata da bambino, quando ho incontrato per la prima volta i cavalli. La loro grazia e potenza mi hanno affascinato, e da allora cerco di tradurre quella fascinazione sulla tela.",
      techniquesTitle: "Tecniche",
      techniquesText:
        "Lavoro principalmente con olio e acquerello, fondendo tecniche tradizionali con approcci contemporanei. Ogni opera attraversa diversi strati per ottenere profondità e texture che danno vita ai soggetti.",
      philosophyTitle: "Filosofia",
      philosophyText:
        "Credo che l’arte debba catturare non solo la forma fisica, ma anche lo spirito del soggetto. Il mio obiettivo è creare opere che suscitino emozione e connessione tra osservatore e soggetto.",
      studioTitle: "Il Mio Studio",
      studioText:
        "Situato in campagna, immerso nella natura, il mio studio è uno spazio tranquillo dove la creatività fluisce liberamente. Ricevo visitatori su appuntamento per discutere commissioni o per mostrare opere in corso.",
    },
  },
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
