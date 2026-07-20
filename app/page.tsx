import { BackToTop } from "./BackToTop";

const siteUrl = "https://fizioradovic.rs";
const mapsQuery = "Ambulanta za rehabilitaciju Radović Petra Preradovića 54 Sremska Mitrovica";
const mapsQueryEncoded = encodeURIComponent(mapsQuery);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ambulanta za fizikalnu medicinu i rehabilitaciju Radović",
  url: siteUrl,
  logo: `${siteUrl}/radovic-logo.jpg`,
  image: `${siteUrl}/therapy-emfieldpro.png`,
  telephone: "+381637002120",
  email: "ambulanta.radovicb@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Petra Preradovića 54",
    addressLocality: "Sremska Mitrovica",
    postalCode: "22000",
    addressCountry: "RS",
  },
  areaServed: {
    "@type": "City",
    name: "Sremska Mitrovica",
  },
  medicalSpecialty: [
    "Fizikalna terapija",
    "Rehabilitacija",
    "Osteopatija",
    "Manuelna terapija",
    "Fizioterapija",
  ],
  knowsAbout: [
    "Fizijatar",
    "Fizioterapeut",
    "Išijas",
    "Diskus hernija",
    "Petni trn",
    "Bol u leđima",
    "Bol u vratu",
    "Bol u ramenu",
    "Bol u kolenu",
    "Bol u kuku",
    "Bol u peti",
    "Trnjenje ruku",
    "Trnjenje nogu",
    "Ukočenost leđa",
    "Lumbalni bol",
    "Cervikalni sindrom",
    "Lumbalni sindrom",
    "Teniski lakat",
    "Smrznuto rame",
    "Sportske povrede",
    "Rehabilitacija posle povrede",
  ],
  makesOffer: [
    "Super induktivni sistem emFieldPro",
    "HILT laser",
    "WINBACK Tekar terapija",
    "Shockwave terapija",
    "Kineziterapija",
    "PNF",
    "Masaža",
    "Kinesio taping",
    "Terapija išijasa",
    "Terapija diskus hernije",
    "Terapija petnog trna",
    "Tretman bola u leđima",
    "Tretman bola u vratu",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "MedicalTherapy",
      name,
    },
  })),
};

const therapyDetails = [
  {
    id: "magnet",
    title: "Magnet visokog intenziteta",
    subtitle: "Super induktivni sistem emFieldPro",
    image: "/therapy-emfieldpro.png",
    text: [
      "SUPER INDUKTIVNI SISTEM emFieldPro predstavlja najnoviju i najkompleksniju metodu u izboru fizikalnog tretmana.",
      "emFieldPro generiše magnetno polje 3 tesle, što je oko 600 puta jače od običnog magneta. Magnetno polje visokog intenziteta vrši stimulaciju i ostvaruje efekte na mišićni, nervni i koštano-zglobni sistem.",
      "Njegova upotreba dovodi do bržeg gubitka bola i olakšanog procesa regeneracije.",
    ],
    uses: [
      "Cervikalni i lumbalni sindrom",
      "Diskus hernija",
      "Rupture mišića",
      "Smrznuto rame i teniski lakat",
      "Sindrom karpalnog tunela",
      "Regeneracija nerva",
      "Išijas",
      "Tendinopatije",
      "Gonartroze i koksartroze",
      "Spazam",
    ],
  },
  {
    id: "laser",
    title: "HILT laser",
    subtitle: "Laser visokog intenziteta",
    image: "/therapy-hilt-laser.png",
    text: [
      "HILT (High intensity laser therapy) je laser visokog intenziteta i predstavlja revolucionarno otkriće snagom 50 puta većom od lasera male snage (LLLT). Jačina od 15W mu omogućava duboku penetraciju u tkivo.",
      "Fotohemijsko dejstvo HILT-a izaziva biostimulaciju u regiji na kojoj se tretira, što dovodi do reaktivacije ćelijskog metabolizma.",
      "Ovom terapeutskom tehnikom dovodimo do ubrzanog smanjivanja i oslobađanja bola mišića i zglobova.",
    ],
    uses: [
      "Akutna i hronična bolna stanja",
      "Fibromialgija",
      "Išijas",
      "Bol u leđima",
      "Istegnuća i rupture",
      "Artroze",
      "Burzitis, sinovitis i tendinitis",
      "Sportske povrede",
      "Posttraumatski edemi",
      "Teniski lakat",
    ],
  },
  {
    id: "tekar",
    title: "Tekar terapija",
    subtitle: "WINBACK TEKAR",
    image: "/therapy-winback-tekar.png",
    text: [
      "Ambulanta za fizikalnu medicinu i rehabilitaciju Radović nudi inovativnu terapiju u oblasti termoterapije WINBACK TEKAR. Smanjuje bolna stanja dva puta brže i pospešuje prirodne mehanizme zarastanja povreda aktivirajući ćelijsku biostimulaciju i mikrocirkulaciju.",
      "Dejstvom radiofrekvencije ubacuje energiju kroz tkivo kapacitivnom elektrodom na površinu tkiva i mišiće, a rezistivnom elektrodom za duboka tkiva, ligamente, tetive, duboke mišiće i zglobove.",
      "Analgetski efekat je izražen usled oslobađanja endorfina u tkivu. Terapija stimulativno deluje na limfni sistem, revaskularizaciju tkiva i ubrzava metaboličke procese.",
    ],
    uses: [
      "Lumbalni sindrom i lumboišialgija",
      "Diskus hernija",
      "Cervikalni sindrom",
      "Bol u ramenu",
      "Povrede tetiva, ligamenata i mišića",
      "Burzitis i kapsulitis",
      "Oporavak posle preloma",
      "Povrede meniskusa",
      "Gonartroza",
      "Petni trn",
      "Sindrom karpalnog tunela",
      "Uklanjanje otoka nakon povreda",
    ],
  },
  {
    id: "shockwave",
    title: "Shockwave terapija",
    subtitle: "Radijalni udarni talasi",
    image: "/old-site/shockwave_2.jpg",
    text: [
      "Shockwave terapija radijalnim udarnim talasima predstavlja najnovije dostignuće u terapiji povreda i bolova.",
      "Shock wave je akustični talas koji prenosi visoku energiju koja ubrzava regeneraciju i reparaciju mekih tkiva.",
      "Jedinstvena i neinvazivna metoda je rešenje za bol koji se javlja u mišićno-skeletnom sistemu. Terapija radijalnim talasima razvijena od strane švajcarskog proizvođača STORZ MEDIKAL predstavlja svetski zlatni standard u ovoj terapiji.",
    ],
    uses: [
      "Petni trn",
      "Plantarni fascitis",
      "Bolno rame",
      "Teniski i golferski lakat",
      "Skakačko koleno",
      "Kalcifikacije u tetivama, mišićima i ligamentima",
      "Cervikalni i lumbalni sindrom",
      "Bolovi u Ahilovoj tetivi",
      "Hronične entezopatije",
      "Sportske povrede",
    ],
  },
  {
    id: "stomak",
    title: "Osteopatski tretman stomaka",
    subtitle: "Visceralna osteopatija - nameštanje želudca",
    image: "/old-site/zeludac.jpg",
    text: [
      "Visceralna osteopatija je manuelna terapijska metoda usmerena na vraćanje optimalne pokretljivosti i funkcije unutrašnjih organa (želudac, creva, jetra, bubrezi).",
      "Primena osteopatskih tehnika kod smanjene ritmičke pokretljivosti dijafragme i želudca.",
      "Želudac gubi mobilnost kao posledica dugotrajnog sedenja, operacija, loše ishrane, stresa, anksioznosti i fizičkih trauma. To stvara napetost i loše pozicioniranje organa.",
      "Osteopatskim tretmanom na fascijama, aponeurozama i ligamentima dolazi do poboljšane funkcije želudca.",
    ],
    uses: [
      "Podignut želudac",
      "Usporen rad želudca i creva",
      "Nadutost stomaka",
      "Neredovno pražnjenje creva",
      "Gorušica",
      "Hijatus hernija",
    ],
  },
  {
    id: "fizikalna",
    title: "Fizikalna terapija",
    subtitle: "Kontrolisana primena terapijske energije",
    image: "/therapy-fizikalna-custom.png",
    text: [
      "Cilj fizikalnih tretmana je da nakon povrede smanji bol i poveća funkcionalnost mišića i zglobova.",
      "Fizikalni tretmani uključuju laser, ultrazvuk, ultrasonoforezu, magnet, elektrostimulacije i elektroterapiju: Trabertove struje, ruske, eksponencijalne, asimetrične i simetrične bifazične pulsne, interferentne i dijadinamične struje.",
      "Kroz fizikalne tretmane se primenjuje kontrolisana upotreba prirodnih oblika energije u terapijske svrhe.",
    ],
    uses: [
      "Uganuća",
      "Istegnuća ligamenata i mišića",
      "Prelomi kostiju",
      "Iščašenja zglobova",
      "Bol u leđima",
      "Išijas",
      "Bolovi u kolenima i kukovima",
      "Artritis",
      "Giht",
      "Spondiloza",
      "Fibromialgija",
      "Upale tetiva",
      "Rehabilitacija nakon ugradnje veštačkog kuka i kolena",
    ],
  },
  {
    id: "kineziterapija",
    title: "Kineziterapija",
    subtitle: "Individualni program vežbi",
    image: "/old-site/pnf.jpg",
    text: [
      "Kineziterapija je primena pokreta u terapijske svrhe.",
      "Program vežbi se pravi individualno, prema proceni i trenutnom funkcionalnom stanju pacijenta.",
    ],
    uses: [
      "Povećanje mišićne snage",
      "Povećanje elastičnosti",
      "Poboljšanje koordinacije i ravnoteže",
      "Smanjenje bola",
      "Povećanje obima pokretljivosti u zglobovima",
      "Korekcija položaja tela i deformiteta",
    ],
  },
  {
    id: "pnf",
    title: "PNF",
    subtitle: "Proprioceptivna neuromuskularna facilitacija",
    image: "/old-site/pnf_2.jpg",
    text: [
      "PNF je jedan od najpriznatijih koncepata koji se primenjuje kod svih povreda mišićno-zglobnog sistema i neuroloških stanja.",
      "PNF-om se dobija bolja kontrola i funkcija pokreta, stabilizacija zglobova, selektivno jačanje mišića i izdržljivost.",
      "PNF pristup je strogo individualan. Tehnike se mogu kombinovati i prilagođavati kod velikog broja stanja i dijagnoza.",
    ],
    uses: [
      "Traumatologija od lakših povreda do preloma",
      "Hemiplegija i stanje posle šloga",
      "Periferne lezije nerava",
      "Parkinsonizam",
      "Multipla skleroza",
      "Cervikalni i lumbalni sindrom",
      "Artroze kolena, kuka i ramena",
      "Gerijatrija",
    ],
  },
  {
    id: "manuelna",
    title: "Osteopatija",
    subtitle: "Mobilizacije i manipulacije",
    image: "/old-site/manuelna.jpg",
    text: [
      "Osteopatija je holistička metoda manuelne medicine koja se fokusira na lečenje uzroka, a ne samo simptoma, baveći se otkrivanjem, lečenjem i sprečavanjem problema nastalih u koštanom i mišićnom sistemu pacijenata.",
      "Manuelne tehnike su bezbolne i sigurne. Najčešće se sastoje od manipulacija, odnosno nameštanja, i mobilizacija zglobova.",
      "Istraživanja pokazuju da se najbolji rezultati u lečenju akutnog bola u leđima dobijaju adekvatnom manuelnom terapijom.",
      "Manuelne tehnike se sprovode na pršljenovima, perifernim zglobovima i mekim tkivima. Njihova primena se najčešće nalazi u kiropraktici i osteopatiji.",
    ],
    uses: ["Bol u leđima", "Bol u vratu", "Ograničena pokretljivost", "Problemi perifernih zglobova", "Tretman mekih tkiva"],
  },
  {
    id: "celulit",
    title: "Tretmani celulita",
    subtitle: "Acoustic Wave Therapy",
    image: "/old-site/celulit.jpg",
    text: [
      "Acoustic Wave Therapy (AWT) terapija akustičnim talasima je moderna, visoko efektivna metoda tretmana koju karakteriše aplikovanje akustičnih talasa na ugroženu regiju tela.",
      "Nakon AWT tretman se nastavlja aparatom V-Actor. Ovom procedurom poboljšava se limfna drenaža i olakšava izbacivanje viška toksina i vode iz organizma. Takođe se postiže efekat stimulacije mišića.",
      "Celulit se tipično pojavljuje na butinama, zadnjici i nadlakticama. Neravnoteža između proizvodnje masti i razbijanja masti unutar ćelija vodi do formiranja velikih masnih ćelija tipičnih za celulit.",
    ],
    uses: [
      "Glatka, zategnuta i podmlađena koža",
      "Sagorevanje depozita masti",
      "Učvršćivanje vezivnog tkiva",
      "Smanjenje strija i ožiljaka",
      "Smanjenje obima na ugroženim područjima",
    ],
  },
  {
    id: "masaza",
    title: "Masaža",
    subtitle: "Terapeutska, relaksaciona i sportska",
    image: "/old-site/masaza.jpg",
    text: ["Masaža se primenjuje kao podrška oporavku, relaksaciji i sportskim naporima, prema potrebi pacijenta."],
    uses: ["Terapeutska masaža", "Relaksaciona masaža", "Sportska masaža", "V-Actor masaža"],
  },
  {
    id: "kinesio",
    title: "Kinesio taping",
    subtitle: "Elastične trake za funkciju i bol",
    image: "/old-site/kinesio_taping.jpg",
    text: [
      "Kinesio taping je tehnika primene specijalnih elastičnih traka na mestima gde je nastao problem ili povreda.",
      "Ovu metodu je razvio D.C. Kenzo Kase, doktor kiropraktike. Danas je veoma rasprostranjena u vrhunskom sportu.",
      "Kinesio tapingom se dobija poboljšanje funkcije mišića, poboljšanje cirkulacije limfe, smanjenje bola i poboljšanje funkcije zgloba. Kod preopterećenja ligamenata i tetivnog aparata dolazi do povećanja elastičnosti.",
    ],
    uses: ["Povrede mišića", "Preopterećenje ligamenata i tetiva", "Smanjenje bola", "Poboljšanje funkcije zgloba", "Sportska podrška"],
  },
];

const conditions = [
  "Diskus hernija",
  "Lumbalni sindrom",
  "Išijalgija",
  "Cervikalni sindrom",
  "Brahijalgija",
  "Čukljevi",
  "Okoštavanje kičme",
  "Bol u grudnoj kičmi",
  "Bol kod osteoporoze",
  "Artroza kuka, kolena i ramena",
  "Artritis",
  "Sportske povrede",
  "Frakture",
  "Teniski lakat",
  "Golferski lakat",
  "PASH",
  "Frozen shoulder",
  "Distenzije",
  "Oštećenja perifernih nerava",
  "Facijalis",
  "Karpalni tunel",
  "Vrtoglavice",
  "Glavobolje",
  "Hemiplegija i hemipareza",
];

const aboutParagraphs = [
  "Branislav Radović D.O. osteopata, strukovni fizioterapeut i homeopata profesionalno se bavi fizikalnim tretmanima preko 20 godina. Počeo je u Opštoj bolnici u Sremskoj Mitrovici, potom se zapošljava u zavodu za specijalizovanu rehabilitaciju Termal.",
  "U aprilu 2006. god. otavara prvu privatnu ambulantu za fizikalnu terapiju i rehabilitaciju u Sr. Mitrovici.",
  "2008. se priključuje timu Dr Vladislave Stejin u Novom Sadu gde obogaćuje svoje iskustvo.",
  "Od kraja 2009. god. je osnivač i vlasnik Centra VFT Radović.",
  "S obzirom da najveće interesovanje pokazuje u okvirima manuelne medicine, osteopatije i kiropraktike, u tom pravcu nastavlja postdiplomsko obrazovanje kroz mnogobrojne edukacije i pristupa Srpskoj asocijaciji hiropraktičara Srbije.",
  "Sa grupom kolega dolazi na ideju da osnuju Osteopatsko terapeutsku asocijaciju Srbije (OSTEAS) radi unapređivanja znanja.",
  "Posle diplomiranja na strukovnim fizioterapeutskim studijama u Beogradu završava i studije homeopatije, pišući rad na temu Bol u lumbalnom delu i išijas iz homeopatskog ugla, takođe u Beogradu.",
  "Potom završava studije internacionalne osteopatije I.O.A. u trajanju od 4 godine prema normama European Standard on Osteopathy i dobija zvanje D.O. osteopata kod mentora Prof. D.O. Alessandro Garlinzoni iz Italije.",
];

const education = [
  "Prva postdiplomska saznanja iz oblasti manipulacija dobija na seminarima koje drži predsednik šijacu asocijacije Japana Cugio Takaki.",
  "Kurseve iz proprioceptivne neuromuskularne facilitacije (PNF) održava dipl. fizioterapeut, spec. neurofizioterapeut, instruktor IPNFA Zdenka Šefman iz Slovenije.",
  "Kurs za certified kinesio taping trainer završio je kod instruktora Cosima Bruna iz Italije i predsednika kinesio taping asocijacije D.C. Kenzo Kase iz Japana.",
  "Seminare za mobilizaciju mekih tkiva, tehnike miofascijalnog oslobađanja, disko-duralni konflikt, meke tehnike vratnog dela kičme i osnove kranijalne terapije završava kod Prof. Dr Andreja Gennadoviča Čečenjina iz Rusije.",
  "Zvanje praktičara osteopatske manipulacije dobija kod instruktora C.O. Ljubomira Ilievskog, osteopate iz Makedonije.",
  "Postdiplomski trening Manuelna terapija završava kod instruktora mobilizacionih tehnika dipl. PT Veljka Mirkovića iz Austrije.",
  "Kurs ESWT (Extracorporeal Shock Wave Therapy) završava kod Dr Carla Di Maia iz Nemačke.",
  "Kurs WINBACK Academy - Tekar Therapy završava kod osteopate i kineziterapeuta Frederica Delacoura iz Francuske.",
  "Kurs iz MM Akupunkture - PENS (Percutaneous electrical nerve stimulation) završava kod Božidara Gardaševića, instruktora medicinske akupunkture Norveške fizioterapeutske asocijacije.",
  "Sertifikat PHYSIOTHERAPY IN LOW BACK PAIN AND DISC HERNIAS završava kod Juan Jose Bosca D.O, španskog osteopate i fizioterapeuta.",
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ambulanta za fizikalnu medicinu i rehabilitaciju Radović početna">
          <span className="brand-mark">
            <img src="/radovic-logo.jpg" alt="" />
          </span>
          <span>
            <strong>Ambulanta za fizikalnu medicinu i rehabilitaciju Radović</strong>
            <small>Fizioterapija, osteopatija i rehabilitacija</small>
          </span>
        </a>
        <nav aria-label="Glavna navigacija">
          <a href="#terapije">Terapije</a>
          <a href="#centar">O centru</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-call" href="tel:+381637002120">
          063/700 21 20
        </a>
      </header>

      <section className="hero" id="top" aria-label="Ambulanta za fizikalnu medicinu i rehabilitaciju Radović">
        <img src="/therapy-emfieldpro.png" alt="Savremena fizikalna terapija u ambulanti" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Sremska Mitrovica</p>
          <h1>Ambulanta za fizikalnu medicinu i rehabilitaciju Radović</h1>
          <p>
            Fizikalna terapija, osteopatija, manuelna terapija i savremene
            procedure za bol, oporavak i povratak pokretu.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="tel:+381637002120">
              Pozovi ambulantu
            </a>
            <a className="secondary-button" href="#terapije">
              Pogledaj terapije
            </a>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Brze informacije">
        <article>
          <span>Telefon</span>
          <a href="tel:+381637002120">063/700 21 20</a>
        </article>
        <article>
          <span>Email</span>
          <a href="mailto:ambulanta.radovicb@gmail.com">ambulanta.radovicb@gmail.com</a>
        </article>
        <article>
          <span>Adresa</span>
            <a href={`https://maps.google.com/?q=${mapsQueryEncoded}`}>
              Petra Preradovića 54, Sremska Mitrovica
            </a>
        </article>
      </section>

      <section className="section" id="terapije">
        <div className="section-heading">
          <p className="eyebrow">Terapije</p>
        </div>
        <div className="service-grid">
          {therapyDetails.map((therapy) => (
            <a className="service-card" href={`#${therapy.id}`} key={therapy.id}>
              <img src={therapy.image} alt={therapy.title} />
              <span>{therapy.subtitle}</span>
              <h3>{therapy.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="section treatment-band">
        <div className="section-heading">
          <p className="eyebrow">Tretmani kod</p>
          <h2>Stanja i tegobe koje se tretiraju u ambulanti.</h2>
        </div>
        <div className="condition-list">
          {conditions.map((condition) => (
            <span key={condition}>{condition}</span>
          ))}
        </div>
      </section>

      <section className="section therapy-details" aria-label="Detaljni opisi terapija">
        {therapyDetails.map((therapy, index) => (
          <article className="therapy-detail" id={therapy.id} key={therapy.id}>
            <div className="therapy-copy">
              <p className="eyebrow">Terapija {String(index + 1).padStart(2, "0")}</p>
              <h2>{therapy.title}</h2>
              <h3>{therapy.subtitle}</h3>
              {therapy.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="uses">
                <strong>Primena:</strong>
                <ul>
                  {therapy.uses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={therapy.image} alt={therapy.title} />
          </article>
        ))}
      </section>

      <section className="section about" id="centar">
        <div className="about-card">
          <p className="eyebrow">O centru</p>
          <h2>Branislav Radović D.O.</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="about-photo">
          <img src="/old-site/o_centru.jpg" alt="O centru i pristupu pacijentu" />
          <div>
            <strong>20+ godina iskustva</strong>
            <span>Fizikalna terapija, rehabilitacija, osteopatija i manuelna medicina.</span>
          </div>
        </aside>
      </section>

      <section className="section credentials">
        <div>
          <p className="eyebrow">Edukacije</p>
          <h2>Kontinuirano usavršavanje u zemlji i inostranstvu.</h2>
        </div>
        <ul>
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section exercise">
        <div>
          <p className="eyebrow">Vežbe za donji deo leđa</p>
          <h2>Program vežbi za lumbalni deo.</h2>
        </div>
        <div className="video-panel">
          <iframe
            src="https://www.youtube.com/embed/qfJKBOENFkM?start=0&rel=0"
            title="Program vežbi za lumbalni deo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Zakažite pregled ili tretman.</h2>
          <p>
            Ambulanta se nalazi u ulici Petra Preradovića 54 u Sremskoj
            Mitrovici. Za zakazivanje je najbrže da pozovete ambulantu.
          </p>
        </div>
        <div className="contact-panel">
          <a href="tel:+381637002120">
            <span>Telefon</span>
            063/700 21 20
          </a>
          <a href="mailto:ambulanta.radovicb@gmail.com">
            <span>Email</span>
            ambulanta.radovicb@gmail.com
          </a>
          <a href={`https://maps.google.com/?q=${mapsQueryEncoded}`}>
            <span>Adresa</span>
            Petra Preradovića 54, 22000 Sremska Mitrovica, Srbija
          </a>
        </div>
      </section>

      <section className="map-section" aria-label="Mapa lokacije ambulante">
        <div className="map-heading">
          <p className="eyebrow">Lokacija</p>
          <h2>Petra Preradovića 54, Sremska Mitrovica</h2>
          <a href={`https://maps.google.com/?q=${mapsQueryEncoded}`}>
            Otvori u Google Maps
          </a>
        </div>
        <iframe
          src={`https://maps.google.com/maps?q=${mapsQueryEncoded}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
          title="Mapa lokacije Ambulante Radović"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer>
        <span>Ambulanta za fizikalnu medicinu i rehabilitaciju Radović</span>
        <span>Fizioterapija, osteopatija i rehabilitacija</span>
        <span>Copyright © 2026. Sva prava zadržana.</span>
      </footer>

      <BackToTop />
    </main>
  );
}
