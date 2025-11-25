export const languages = {
  no: 'Norsk',
  en: 'English'
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'no';

export const translations = {
  no: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.about': 'Om meg',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Ta kontakt',

    // Home page
    'home.badge': 'VP Product & Engineering',
    'home.tagline': 'Skalerer B2B SaaS med AI-drevet produktutvikling',
    'home.intro': '<strong>Produktleder med over 10 års erfaring</strong> i B2B SaaS. Bygger sterke Product-, Engineering- og Design-team og leverer konkrete forretningsresultater gjennom AI-innovasjon og målrettede operasjonelle forbedringer.',

    // Leadership Impact
    'home.impact.title': 'Ledelse & Påvirkning',
    'home.impact.executive.title': 'Executive Impact',
    'home.impact.executive.1': '<strong>Medlem av ledergruppen</strong> med ansvar for hele produktfunksjonen — produktområdet — strategi, innsikt, leveranse og resultat for <strong>over 5 000 bedrifter</strong>',
    'home.impact.executive.2': 'Nøkkelbidragsyter i <strong>tre finansieringsrunder som sikret $20M</strong> og skalerte Timely gjennom produktledet vekst',
    'home.impact.executive.3': 'Leder distribuerte team i Europa, Asia og USA med en effektiv, asynkron samarbeidsmodell',

    'home.impact.ai.title': 'AI & Innovasjon',
    'home.impact.ai.1': 'Bygget <strong>AI/ML-team fra grunnen av</strong> og skapte varige konkurransefortrinn gjennom proprietære datasett',
    'home.impact.ai.2': 'Fullførte avanserte ML-programmer (Stanford, deeplearning.ai) og ledet produktutforming av systemer basert på nevrale nettverk, SVM-er og LLM-er',
    'home.impact.ai.3': 'Gjorde avansert ML forståelig og nyttig gjennom intuitive funksjoner brukt av mer enn <strong>5 000 kunder</strong>',

    'home.impact.team.title': 'Team & Systemer',
    'home.impact.team.1': 'Identifiserte og utviklet PM-er fra utradisjonelle fagområder (Marketing, Support, QA) til senior produktroller',
    'home.impact.team.2': 'Integrerte fragmenterte produkt- og engineering-team i én felles, høytytende leveransemodell',
    'home.impact.team.3': 'Etablerte en innsiktsdrevet beslutningskultur med rammeverk som <strong>Cost of Delay</strong> og <strong>Jobs to be Done</strong>',

    // Philosophy
    'home.philosophy.title': 'Tilnærming & Filosofi',
    'home.philosophy.text': 'Jeg bygger team med <strong>høy tillit, tydelige mål og stor grad av autonomi</strong>. Lederstilen min kombinerer strategisk retning med dyp produktfaglig forståelse, og jeg prioriterer klarhet, innsiktsbaserte beslutninger og rask læring. ',
    'home.philosophy.plg': 'Produkt-ledet vekst',
    'home.philosophy.plg.desc': 'Produktet må være motoren for bærekraftig vekst, salg og markedsføring er rakettene',
    'home.philosophy.evidence': 'Innsiktsdrevet',
    'home.philosophy.evidence.desc': 'Jeg bruker data og innsikt for å prioritere riktig, ikke synsing og magefølelse ',
    'home.philosophy.team': 'Myndiggjorte team',
    'home.philosophy.team.desc': 'Autonome team som eier resultatene både trives bedre, og leverer bedre resultater ',

    // CTA
    'home.cta.title': 'La oss ta en prat',
    'home.cta.text': 'Interessert i å diskutere produktlederskap, AI-innovasjon eller B2B SaaS-vekst?',
    'home.cta.experience': 'Se full erfaring',
    'home.cta.contact': 'Ta kontakt',

    // About page
    'about.title': 'Om meg',
    'about.subtitle': 'Bygger produkter som driver målbar forretningsverdi',
    'about.summary.lead': 'Jeg har bakgrunn fra B2B SaaS, e-handel og startup-ledelse, med dyp ekspertise i produktledet vekst, AI/ML-drevet produktutvikling og skalering av distribuerte team.',
    'about.summary.p1': 'Karrieren startet i digital markedsføring for store e-handelsselskaper før jeg gikk inn i produktledelse hos Timely. Der har jeg tilbrakt nær et tiår med å bygge selskapet fra tidlig traction til en global SaaS-plattform. I rollen som VP Product & Engineering forener jeg produktstrategi og teknisk gjennomføring på tvers av distribuerte team.',
    'about.summary.p2': 'Jeg har solid teknisk forståelse som styrker samarbeidet med engineering og forbedrer produktbeslutninger. Jeg bruker moderne verktøy, inkludert LLM-assisterte arbeidsflyter, til raske prototyper og effektiv validering. Kombinerer strategisk retning med praktisk produktarbeid når det kreves.',

    'about.experience.title': 'Profesjonell erfaring',
    'about.experience.vp.title': 'VP Product & Engineering',
    'about.experience.vp.period': '2023 – Nå',
    'about.experience.vp.subtitle': 'Ledergruppen',
    'about.experience.vp.1': 'Har ansvar for hele produktfunksjonen fra ende til annen — strategi, innsikt, levering og resultater',
    'about.experience.vp.2': 'Slo sammen produkt- og engineering-funksjoner under én driftsmodell, økte hastighet og samkjøring',
    'about.experience.vp.3': 'Utvikler AI-baserte automatiseringsfunksjoner som forbedrer differensiering av kjerneproduktet og kundeeffektivitet for over 5 000 globale kunder',
    'about.experience.vp.4': 'Utvikler og forfremmer interne ansatte (fra engineering og support) til PM-roller; veileder analyse-, AI- og tverrfaglige team til å operere autonomt',
    'about.experience.vp.5': 'Leder distribuerte team på tvers av Europa og Amerika, optimalisert for asynkron kommunikasjon og skriftlig beslutningstaking',
    'about.experience.vp.6': 'Introduserte rammeverk som Cost of Delay for å veilede prioritering og bevege selskapet mot evidensbasert beslutningstaking',
    'about.experience.vp.7': 'Støttet selskapet gjennom ekspansjon til en flerprodukt-portefølje og påfølgende konsolidering rundt Timelys kjerneprodukt',

    'about.experience.interim.title': 'Interim VP Engineering',
    'about.experience.interim.period': '2022 – 2023',
    'about.experience.interim.subtitle': 'Ledergruppen',
    'about.experience.interim.1': 'Hadde overordnet ansvar for engineering-organisasjonen gjennom større restruktureringsfase, ledet backend-, frontend- og infrastrukturteam',
    'about.experience.interim.2': 'Stabiliserte leveranser og arbeidsmoral samtidig som ansvarsstrukturer og leveringssporing ble implementert',
    'about.experience.interim.3': 'Samarbeidet med produktledelse for å opprettholde fremdrift på roadmap under kostnadsoptimalisering',
    'about.experience.interim.4': 'Tilpasset engineering-investeringer til langsiktig produktstrategi og mål for skalerbarhet',

    'about.experience.growth.title': 'VP Growth / Product Lead',
    'about.experience.growth.period': '2016 – 2022',
    'about.experience.growth.subtitle': 'Ledergruppen',
    'about.experience.growth.1': 'Sentral bidragsyter i tre finansieringsrunder som sikret $20M totalt, med styrestøttet key person-beskyttelse',
    'about.experience.growth.2': 'Skalerte Timely fra tidlig traction til flere millioner i ARR gjennom PLG-eksperimentering, oppnådde 10x MRR-vekst over fem år',
    'about.experience.growth.3': 'Etablerte Timelys første vekst-, AI/ML-, dataanalyse- og kommersielle funksjoner fra oppstart til operasjonell modenhet',
    'about.experience.growth.4': 'Ledet tre vellykkede Product Hunt-lanseringer inkludert #1 Product of the Day; hjalp Timely med å oppnå "Leader"-status på G2 i tre påfølgende kvartaler',
    'about.experience.growth.5': 'Fungerte som praktisk orientert Product Manager for vekst, onboarding og Dewo Calendar; ledet tverrfaglig team med fokus på trial-to-paid-konvertering',
    'about.experience.growth.6': 'Implementerte maskinlæring for automatisk tidssporing i produksjon; fullførte avanserte ML-kurs (Stanford, deeplearning.ai, Coursera) og anvendte teknisk innsikt direkte i produktbeslutninger',
    'about.experience.growth.7': 'Etablerte analyseverktøy og eksperimenteringskultur (Segment, Amplitude, GA, FullStory, Intercom) på tvers av alle produkter',
    'about.experience.growth.8': 'Formet selskapets fortelling og produktretning gjennom flere finansieringsrunder; lanserte første go-to-market-strategi på tvers av prising, posisjonering og kanaler',

    'about.experience.moonwalk.title': 'Medgründer & Chief Marketing Officer',
    'about.experience.moonwalk.period': '2015',
    'about.experience.moonwalk.badge': 'Medgründer',
    'about.experience.moonwalk.1': 'Lanserte syv oppstartsselskaper via en kollaborativ crowdfunding-modell, bygget PR-momentum i nasjonale medier',

    'about.experience.jernia.title': 'Head of Digital Marketing & E-Commerce',
    'about.experience.jernia.period': '2011 – 2015',
    'about.experience.jernia.badge': 'Marketing',
    'about.experience.jernia.1': 'Ledet et team på 4 spesialister for å drive digital markedsføring og e-handelsinitiativ, oppnådde 10x økning i konverteringsrate for e-handel',
    'about.experience.jernia.2': 'Ledet transformasjonen av Jernias nettside og e-handelsplattform, resulterte i 5x økning i e-handelsinntekter',
    'about.experience.jernia.3': 'Oppnådde 3x vekst i antall medlemmer i kundelojalitetsprogrammet gjennom strategiske digitale markedsføringstiltak',

    'about.experience.komplett.title': 'Digital Marketer',
    'about.experience.komplett.period': '2009 – 2011',
    'about.experience.komplett.badge': 'Marketing',
    'about.experience.komplett.1': 'Hadde ansvar for SEM og sosiale medier for Skandinavias største e-handelsaktør, med ansvar for 6 millioner NOK budsjett',
    'about.experience.komplett.2': 'Vokste Facebook-siden fra 500 til 50 000 følgere og drev Google Ads-kontoen med høyest ROI i Norge',
    'about.experience.komplett.3': 'Koordinerte mellom innkjøp og markedsavdelinger, produserte markedsføringsmateriell og gjennomførte PPC-kampanjer',

    // Skills
    'about.skills.title': 'Kompetanse og ekspertise',
    'about.skills.product.title': 'Product & Lederskap',
    'about.skills.product.strategy': 'Produktstrategi',
    'about.skills.product.plg': 'PLG-vekst',
    'about.skills.product.leadership': 'Tverrfunksjonelt lederskap',
    'about.skills.product.delay': 'Cost of Delay',
    'about.skills.product.discovery': 'Discovery & Eksperimentering',
    'about.skills.product.remote': 'Ledelse av distribuerte team',
    'about.skills.product.coaching': 'Coaching & Mentorskap',

    'about.skills.tech.title': 'Teknologi & Data',
    'about.skills.tech.ml': 'Maskinlæring',
    'about.skills.tech.llm': 'LLM-applikasjoner',
    'about.skills.tech.ai': 'AI-produktutvikling',
    'about.skills.tech.analytics': 'Dataanalyse',
    'about.skills.tech.testing': 'Eksperimentering & Testing',

    // Education
    'about.education.title': 'Utdanning & Profesjonell utvikling',
    'about.education.bi': 'Handelshøyskolen BI, Oslo',
    'about.education.bi.desc': 'Spesialisering i markedsføring og ledelse fra en «Triple Crown»-akkreditert institusjon i topp 1 % av handelshøyskoler globalt',
    'about.education.stanford': 'Stanford University',
    'about.education.stanford.desc': 'Machine Learning (MOOC) av Andrew Ng: Solid fundament i moderne ML og praktisk modellutvikling undervist av en av verdens ledende eksperter på kunstig intelligens',
    'about.education.deeplearning': 'DeepLearning.AI',
    'about.education.deeplearning.desc': 'Neural Networks and Deep Learning; Moderne nevrale nettverk, backpropagation og dyp læring, med fokus på praktisk modellbygging og forståelse av underliggende matematikk',
    'about.education.coursera': 'Coursera',
    'about.education.coursera.desc': 'NLP with Classification and Vector Spaces; Linear Algebra for Machine Learning',
    'about.education.udacity': 'Udacity',
    'about.education.udacity.desc': 'Growth Product Manager Nanodegree; Activation & Retention Strategy',
    'about.education.amplitude': 'Amplitude',
    'about.education.amplitude.desc': 'Insights Expert Certification',

    // Media
    'about.media.title': 'Media & Presse',
    'about.media.tc1.title': 'Memory.ai raises $14M to build AI-based productivity apps',
    'about.media.tc1.date': 'Juni 2021',
    'about.media.tc1.excerpt': 'Ekspansjonsfinansiering med over 5 000 bedrifter som bruker Timely i 160 land',

    'about.media.kode24.title': 'Timely fører timer automatisk med AI',
    'about.media.kode24.date': 'April 2021',
    'about.media.kode24.excerpt': 'Growth Manager diskuterer AI-drevet tidssporing, datapersonvern og bygging av Norges neste store teknologiselskap',

    'about.media.tc2.title': 'Memory raises $5M to bring AI to time tracking',
    'about.media.tc2.date': 'Oktober 2018',
    'about.media.tc2.excerpt': 'Serie A-finansiering ledet av Concentric og Investinor mens Timely skalerte til over 4 000 bedrifter globalt',

    'about.media.podcast.title': 'Vekst Podcast: Skalering av Timely og global produktivitet',
    'about.media.podcast.date': 'Februar 2018',
    'about.media.podcast.excerpt': 'Grundig intervju om tekniske, praktiske og strategiske aspekter ved vekst hos Memory',

    'about.media.innomag.title': 'Finansierer morgendagens arbeidsplasser gjennom crowdfunding',
    'about.media.innomag.date': 'Desember 2015',
    'about.media.innomag.excerpt': 'Medgründer og CMO hos Moonwalk, demokratiserer oppstartsinvesteringer gjennom crowdfunding',

    'about.media.netthandel.title': 'Det viktigste er at kundene handler hos Jernia',
    'about.media.netthandel.date': 'April 2014',
    'about.media.netthandel.excerpt': 'Digital Manager diskuterer Jernias flerkanalstrategi som prioriterer kundevalg',

    'about.media.retail.title': 'Jernia lanserer ny e-handelsløsning',
    'about.media.retail.date': 'August 2013',
    'about.media.retail.excerpt': 'Digital Manager leder lansering av flerkanals detaljhandelsplattform med vekt på brukeropplevelse',

    // Contact page
    'contact.title': 'Ta kontakt',
    'contact.subtitle': 'La oss diskutere produktlederskap, AI-innovasjon eller nye muligheter',
    'contact.intro.lead': 'Jeg er alltid interessert i å ta kontakt med andre <strong>produktledere</strong>, diskutere <strong>AI-produktstrategi</strong>, eller utforske nye muligheter.',
    'contact.email': 'E-post',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Sted',
    'contact.location.text': 'Porsgrunn, Telemark',

    // Footer
    'footer.title': 'La oss jobbe sammen',
    'footer.subtitle': 'Bygger intelligente systemer for fremtidsrettede team.',

    // Common
    'common.showMore': 'Vis mer',
    'common.showLess': 'Vis mindre',
    'common.timely': 'Timely',
    'common.leadership': 'Lederskap',
    'common.engineering': 'Engineering',
    'common.growth': 'Vekst',
    'common.cofounder': 'Medgründer',
    'common.marketing': 'Marketing',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',

    // Home page
    'home.badge': 'VP Product & Engineering',
    'home.tagline': 'Scaling B2B SaaS through AI-driven product development',
    'home.intro': '<strong>Product leader with over 10 years of experience</strong> in B2B SaaS. Building strong Product, Engineering, and Design teams and delivering tangible business results through AI innovation and targeted operational improvements.',

    // Leadership Impact
    'home.impact.title': 'Leadership Impact',
    'home.impact.executive.title': 'Executive Impact',
    'home.impact.executive.1': '<strong>Executive Leadership Team</strong> member with responsibility for the entire product function — the product domain — strategy, insights, delivery, and results for <strong>over 5,000 businesses</strong>',
    'home.impact.executive.2': 'Key contributor in <strong>three funding rounds that secured $20M</strong>, scaling Timely through product-led growth',
    'home.impact.executive.3': 'Leading distributed teams in Europe, Asia, and the USA with an efficient, asynchronous collaboration model',

    'home.impact.ai.title': 'AI & Innovation',
    'home.impact.ai.1': 'Built <strong>AI/ML team from the ground up</strong> and created lasting competitive advantages through proprietary datasets',
    'home.impact.ai.2': 'Completed advanced ML programs (Stanford, deeplearning.ai) and led product design of systems based on neural networks, SVMs, and LLMs',
    'home.impact.ai.3': 'Made advanced ML understandable and useful through intuitive features used by more than <strong>5,000 customers</strong>',

    'home.impact.team.title': 'Team & Systems',
    'home.impact.team.1': 'Identified and developed PMs from <strong>non-traditional backgrounds</strong>: Marketing, Support, QA → senior product roles',
    'home.impact.team.2': '<strong>Unified siloed Product and Engineering</strong> functions under one high-performing operating model',
    'home.impact.team.3': 'Built evidence-based decision-making culture using frameworks like <strong>Cost of Delay</strong> and <strong>Jobs to be Done</strong>',

    // Philosophy
    'home.philosophy.title': 'Approach & Philosophy',
    'home.philosophy.text': 'I build teams with <strong>high trust, clear goals, and a high degree of autonomy</strong>. My leadership style combines strategic direction with deep product expertise, and I prioritize clarity, insight-based decisions, and rapid learning.',
    'home.philosophy.plg': 'Product-Led Growth',
    'home.philosophy.plg.desc': 'The product must be the engine for sustainable growth, sales and marketing are the rockets',
    'home.philosophy.evidence': 'Insight-driven',
    'home.philosophy.evidence.desc': 'I use data and insights to prioritize correctly, not speculation and gut feeling',
    'home.philosophy.team': 'Empowered Teams',
    'home.philosophy.team.desc': 'Autonomous teams that own the results both thrive better and deliver better results',

    // CTA
    'home.cta.title': 'Let\'s Connect',
    'home.cta.text': 'Interested in discussing product leadership, AI innovation, or B2B SaaS growth?',
    'home.cta.experience': 'View Full Experience',
    'home.cta.contact': 'Get In Touch',

    // About page
    'about.title': 'About Me',
    'about.subtitle': 'Building products that drive measurable business impact',
    'about.summary.lead': 'I have a background in <strong>B2B SaaS, e-commerce, and startup leadership</strong>, with deep expertise in product-led growth, AI/ML-driven product development, and scaling distributed teams.',
    'about.summary.p1': 'My career started in digital marketing for major e-commerce companies before I moved into product leadership at <strong>Timely</strong>. There I have spent nearly a decade building the company from early traction into a global SaaS platform. In my role as VP Product & Engineering, I unite product strategy and technical execution across distributed teams.',
    'about.summary.p2': 'I have solid technical understanding that strengthens collaboration with engineering and improves product decisions. I use modern tools, including LLM-assisted workflows, for rapid prototypes and efficient validation. Combine strategic direction with hands-on product work when required.',

    'about.experience.title': 'Professional Experience',
    'about.experience.vp.title': 'VP Product & Engineering',
    'about.experience.vp.period': '2023 – Present',
    'about.experience.vp.subtitle': 'Executive Leadership Team',
    'about.experience.vp.1': 'Own the full product function end-to-end — strategy, discovery, delivery, and performance',
    'about.experience.vp.2': 'Unified Product and Engineering under one operating model, increasing velocity and alignment',
    'about.experience.vp.3': 'Develop AI-based automation features that enhance core product differentiation and customer efficiency for 5,000+ global clients',
    'about.experience.vp.4': 'Train and promote internal hires (from engineering and support) into PM roles; mentor analytics, AI, and cross-functional teams to operate autonomously',
    'about.experience.vp.5': 'Lead distributed teams across Europe and the Americas, optimizing for async communication and written decision-making',
    'about.experience.vp.6': 'Introduced frameworks such as Cost of Delay to guide prioritization and move the company toward evidence-based decision-making',
    'about.experience.vp.7': 'Supported the company through an expansion into a multi-product setup and the subsequent consolidation around Timely\'s core offering',

    'about.experience.interim.title': 'Interim VP Engineering',
    'about.experience.interim.period': '2022 – 2023',
    'about.experience.interim.subtitle': 'Executive Leadership Team',
    'about.experience.interim.1': 'Oversaw engineering organization through major restructuring phase, managing backend, frontend, and infrastructure teams',
    'about.experience.interim.2': 'Stabilized delivery and morale while implementing accountability systems and delivery tracking',
    'about.experience.interim.3': 'Partnered with product leadership to maintain roadmap execution during cost optimization',
    'about.experience.interim.4': 'Aligned engineering investments with long-term product strategy and scalability goals',

    'about.experience.growth.title': 'VP Growth / Product Lead',
    'about.experience.growth.period': '2016 – 2022',
    'about.experience.growth.subtitle': 'Executive Leadership Team',
    'about.experience.growth.1': 'Key contributor in three funding rounds raising $20M total, with board-backed key personnel protections',
    'about.experience.growth.2': 'Scaled Timely from early traction to multi-million ARR through PLG experimentation, achieving 10x MRR growth over five years',
    'about.experience.growth.3': 'Established Timely\'s first growth, AI/ML, data analytics, and commercial functions from inception to operational maturity',
    'about.experience.growth.4': 'Led three successful Product Hunt launches including #1 Product of the Day; helped Timely earn "Leader" status on G2 for three consecutive quarters',
    'about.experience.growth.5': 'Served as hands-on Product Manager for growth, onboarding, and Dewo Calendar; led cross-functional team on trial-to-paid improvements',
    'about.experience.growth.6': 'Operationalized machine learning for automatic time tracking; completed advanced ML coursework (Stanford, deeplearning.ai, Coursera) and applied technical knowledge directly in product decisions',
    'about.experience.growth.7': 'Established analytics stack and experimentation culture (Segment, Amplitude, GA, FullStory, Intercom) across all products',
    'about.experience.growth.8': 'Shaped company narrative and product direction through multiple funding rounds; launched initial go-to-market strategy across pricing, positioning, and channels',

    'about.experience.moonwalk.title': 'Co-Founder & Chief Marketing Officer',
    'about.experience.moonwalk.period': '2015',
    'about.experience.moonwalk.badge': 'Co-Founder',
    'about.experience.moonwalk.1': 'Launched seven startups via a collaborative crowdfunding model, building PR traction across national media',

    'about.experience.jernia.title': 'Head of Digital Marketing & E-Commerce',
    'about.experience.jernia.period': '2011 – 2015',
    'about.experience.jernia.badge': 'Marketing',
    'about.experience.jernia.1': 'Led a team of 4 specialists to drive digital marketing and e-commerce efforts, achieving a 10X increase in e-commerce conversion rate',
    'about.experience.jernia.2': 'Managed the transformation of Jernia\'s website and e-commerce platform, resulting in a 5X increase in e-commerce revenue',
    'about.experience.jernia.3': 'Oversaw a 3X growth in customer loyalty program membership through strategic online marketing initiatives',

    'about.experience.komplett.title': 'Digital Marketer',
    'about.experience.komplett.period': '2009 – 2011',
    'about.experience.komplett.badge': 'Marketing',
    'about.experience.komplett.1': 'Managed SEM and social media for Scandinavia\'s largest e-commerce player, overseeing a 6 MNOK budget',
    'about.experience.komplett.2': 'Successfully grew Facebook page from 500 to 50,000 fans and ran Norway\'s highest ROI Google Ads account',
    'about.experience.komplett.3': 'Coordinated between purchasing and marketing departments, handled marketing material, and executed PPC campaigns',

    // Skills
    'about.skills.title': 'Skills & Expertise',
    'about.skills.product.title': 'Product & Leadership',
    'about.skills.product.strategy': 'Product Strategy',
    'about.skills.product.plg': 'PLG Growth',
    'about.skills.product.leadership': 'Cross-Functional Leadership',
    'about.skills.product.delay': 'Cost of Delay',
    'about.skills.product.discovery': 'Discovery & Experimentation',
    'about.skills.product.remote': 'Remote Team Management',
    'about.skills.product.coaching': 'Coaching & Mentorship',

    'about.skills.tech.title': 'Technology & Data',
    'about.skills.tech.ml': 'Machine Learning',
    'about.skills.tech.llm': 'LLM Applications',
    'about.skills.tech.ai': 'AI Product Development',
    'about.skills.tech.analytics': 'Data Analytics',
    'about.skills.tech.testing': 'Experimentation & Testing',

    // Education
    'about.education.title': 'Education & Professional Development',
    'about.education.bi': 'BI Norwegian Business School',
    'about.education.bi.desc': 'Specialization in Marketing and Management from a \'Triple Crown\' accredited institution in the top 1% of business schools worldwide',
    'about.education.stanford': 'Stanford University',
    'about.education.stanford.desc': 'Machine Learning (MOOC) by Andrew Ng: Solid foundation in modern ML and practical model development taught by one of the world\'s leading experts in artificial intelligence',
    'about.education.deeplearning': 'DeepLearning.AI',
    'about.education.deeplearning.desc': 'Neural Networks and Deep Learning; Modern neural networks, backpropagation, and deep learning, with focus on practical model building and understanding of underlying mathematics',
    'about.education.coursera': 'Coursera',
    'about.education.coursera.desc': 'NLP with Classification and Vector Spaces; Linear Algebra for Machine Learning',
    'about.education.udacity': 'Udacity',
    'about.education.udacity.desc': 'Growth Product Manager Nanodegree; Activation & Retention Strategy',
    'about.education.amplitude': 'Amplitude',
    'about.education.amplitude.desc': 'Insights Expert Certification',

    // Media
    'about.media.title': 'Media & Press',
    'about.media.tc1.title': 'Memory.ai raises $14M to build AI-based productivity apps',
    'about.media.tc1.date': 'June 2021',
    'about.media.tc1.excerpt': 'Expansion funding with 5,000+ businesses using Timely across 160 countries',

    'about.media.kode24.title': 'Timely Tracks Time Automatically With AI',
    'about.media.kode24.date': 'April 2021',
    'about.media.kode24.excerpt': 'Growth Manager discussing AI-powered time tracking, data privacy, and building Norway\'s next major tech company',

    'about.media.tc2.title': 'Memory raises $5M to bring AI to time tracking',
    'about.media.tc2.date': 'October 2018',
    'about.media.tc2.excerpt': 'Series A funding led by Concentric and Investinor as Timely scaled to 4,000+ businesses globally',

    'about.media.podcast.title': 'Vekst Podcast: Scaling Timely & Driving Global Productivity',
    'about.media.podcast.date': 'February 2018',
    'about.media.podcast.excerpt': 'Deep-dive interview on technical, practical and strategic aspects of growth at Memory',

    'about.media.innomag.title': 'Financing Tomorrow\'s Workplaces Through Crowdfunding',
    'about.media.innomag.date': 'December 2015',
    'about.media.innomag.excerpt': 'Co-founder and CMO at Moonwalk, democratizing startup investment through crowdfunding',

    'about.media.netthandel.title': 'What\'s Important Is That Customers Shop With Jernia',
    'about.media.netthandel.date': 'April 2014',
    'about.media.netthandel.excerpt': 'Digital Manager discussing Jernia\'s evolved multichannel strategy prioritizing customer choice',

    'about.media.retail.title': 'Jernia Launches New E-Commerce Solution',
    'about.media.retail.date': 'August 2013',
    'about.media.retail.excerpt': 'Digital Manager leading launch of multichannel retail platform emphasizing user experience',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss product leadership, AI innovation, or new opportunities',
    'contact.intro.lead': 'I\'m always interested in connecting with fellow <strong>product leaders</strong>, discussing <strong>AI product strategy</strong>, or exploring new opportunities.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Location',
    'contact.location.text': 'Porsgrunn, Telemark',

    // Footer
    'footer.title': 'Let\'s Work Together',
    'footer.subtitle': 'Building intelligent systems for forward-thinking teams.',

    // Common
    'common.showMore': 'Show more',
    'common.showLess': 'Show less',
    'common.timely': 'Timely',
    'common.leadership': 'Leadership',
    'common.engineering': 'Engineering',
    'common.growth': 'Growth',
    'common.cofounder': 'Co-Founder',
    'common.marketing': 'Marketing',
  }
} as const;

export function t(key: string, lang: Language = defaultLang): string {
  return translations[lang][key] || key;
}
