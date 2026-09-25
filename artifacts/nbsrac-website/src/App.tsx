import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, Building2, CalendarDays, Check, ChevronDown, Clock3, Download, ExternalLink, FlaskConical, Globe2, Linkedin, Mail, MapPin, Menu, Search, Send, Users, X } from 'lucide-react';

type RevealProps = { children: ReactNode; className?: string; delay?: string };

function Reveal({ children, className = '', delay = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>;
}

function Mark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3" data-testid="brand-mark">
      <div className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border ${inverse ? 'border-white/30 bg-white/10' : 'border-[#d7ac5a]/50 bg-[#112a46]'}`}>
        <span className="absolute h-20 w-20 rounded-full border border-[#d7ac5a]/70" />
        <span className="absolute h-12 w-12 rounded-full border border-[#3e9b9a]/80" />
        <span className={`relative font-mono text-[10px] font-medium tracking-[-.08em] ${inverse ? 'text-white' : 'text-[#f7f9fb]'}`}>NB</span>
      </div>
      <div className="leading-none">
        <div className={`font-bold tracking-[.16em] ${inverse ? 'text-white' : 'text-[#112a46]'}`}>NBSRAC</div>
        <div className={`mt-1 text-[9px] font-semibold uppercase tracking-[.11em] ${inverse ? 'text-white/60' : 'text-[#52677f]'}`}>North Bengal Society</div>
      </div>
    </div>
  );
}

const navItems = [
  ['About', 'about'], ['Objectives', 'objectives'], ['Leadership', 'leadership'],
  ['Activities', 'activities'], ['Publications', 'publications'], ['Membership', 'membership'],
  ['Partners', 'partners'], ['Conference', 'conference'], ['FAQ', 'faq'], ['Contact', 'contact'],
];

const objectives = [
  {
    number: '01',
    icon: FlaskConical,
    title: 'Research & Innovation',
    text: 'Promote cross-disciplinary research across Science, Technology, Humanities, Social Sciences and Management, with focus areas including AI, Data Science, Environmental Studies and Health Sciences.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Academic Collaboration',
    text: 'Build partnerships among universities, colleges, research institutions and industry in India and abroad through joint projects, academic networks and MoUs.',
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Academic Events',
    text: 'Organize and support conferences, seminars, workshops, symposiums, faculty development programmes and training programmes with technical and administrative assistance.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Publication & Dissemination',
    text: 'Facilitate the publication and dissemination of research through journals, conference proceedings, edited volumes, books and technical reports.',
  },
  {
    number: '05',
    icon: BookOpen,
    title: 'Researcher & Student Support',
    text: 'Provide platforms for researchers and students to present and publish their work while supporting mentoring, academic development and research skills.',
  },
  {
    number: '06',
    icon: MapPin,
    title: 'Regional Development',
    text: 'Address academic and research needs specific to North Bengal and encourage research that contributes to the region’s educational, social and economic development.',
  },
  {
    number: '07',
    icon: MapPin,
    title: 'Networking',
    text: 'Connect academicians, researchers, industry professionals and policymakers to encourage knowledge exchange, collaboration and meaningful academic partnerships.',
  },
  {
    number: '08',
    icon: Building2,
    title: 'Institutional Support Services',
    text: 'Provide institutional support for academic events and initiatives, including event organization, certification and official branding or logo support.',
  },
  {
    number: '09',
    icon: Building2,
    title: 'Capacity Building',
    text: 'Strengthen research and teaching capabilities through faculty development programmes, research methodology workshops, training and professional development activities.',
  },
  {
    number: '10',
    icon: Building2,
    title: 'Government & Agency Collaboration',
    text: 'Collaborate with government bodies, funding agencies and educational organizations to support research funding, academic development and alignment with education policies.',
  },
];

const leadership = [
  {
    role: 'President',
    name: 'Dr. Saroj Kr. Biswas',
  },
  {
    role: 'Secretary',
    name: 'Dr. Rakesh Kumar Mandal',
  },
];
const committee = [
  {
    initials: 'SB',
    name: 'Dr. Saroj Kr. Biswas',
    role: 'Associate Professor, CSE',
    institution: 'NIT Silchar',
    contact: 'saroj@cse.nits.ac.in',
    image: '/members/Saroj.jpg',
    tone: 'bg-[#d9ebe8]',
  },
  {
    initials: 'AD',
    image: '/members/Saroj.jpg',
    name: 'Dr. Akhil Kumar Das',
    role: 'Assistant Professor, CS',
    institution: 'Gour Mahavidyalaya',
    contact: 'd.akhil@gourmaha.ac.in',
    tone: 'bg-[#f4e6cf]',
  },
  {
    initials: 'AM',
    image: '/members/Saroj.jpg',
    name: 'Dr. Ardhendu Mandal',
    role: 'Associate Professor, CST',
    institution: 'University of North Bengal',
    contact: 'am.csa.nbu@nbu.ac.in',
    tone: 'bg-[#e8e0ee]',
  },
  {
    initials: 'AB',
    image: '/members/Saroj.jpg',
    name: 'Mr. Arijit Bhattacharya',
    role: 'Assistant Professor, CS',
    institution: 'Gour Mahavidyalaya',
    contact: 'barijit@gourmaha.ac.in',
    tone: 'bg-[#e8e8d7]',
  },
  {
    initials: 'PS',
    image: '/members/Saroj.jpg',
    name: 'Dr. Payel Saha',
    role: 'Assistant Professor, CS & Application',
    institution: "North Bengal Snt. Xavier's College",
    contact: 'payel17.10@gmail.com',
    tone: 'bg-[#d9ebe8]',
  },
  {
    initials: 'DS',
    image: '/members/Saroj.jpg',
    name: 'Mrs. Debasmita Saha',
    role: 'Assistant Professor, CS',
    institution: 'University of Gour Banga',
    contact: 'debasmita_cs@ugb.ac.in',
    tone: 'bg-[#f4e6cf]',
  },
];

const events = [
  { status: 'upcoming', date: '18—19', month: 'OCT 2025', title: 'North Bengal Research Colloquium', location: 'Siliguri, West Bengal', description: 'Two days of short talks, methods clinics and cross-disciplinary conversations on regions in transition.', type: 'Annual gathering' },
  { status: 'upcoming', date: '07', month: 'NOV 2025', title: 'Methods Across the Borderlands', location: 'Online · 16:00 IST', description: 'A practical seminar on ethical, collaborative fieldwork with Dr. Farah Qureshi and Dr. Pema Dorjee.', type: 'Open seminar' },
  { status: 'past', date: '22', month: 'MAR 2025', title: 'Water, Work & the Eastern Himalaya', location: 'University of North Bengal', description: 'A public roundtable bringing together researchers, civil society and river-dependent communities.', type: 'Roundtable' },
  { status: 'past', date: '14', month: 'DEC 2024', title: 'First Convening: What Can We Share?', location: 'Siliguri · 42 participants', description: 'Our first gathering set the questions, principles and working groups that shaped NBSRAC.', type: 'Founding convening' },
];

const publications = [
  { year: '2025', type: 'Working paper', title: 'Beyond the Corridor: Mobility, Memory and the Siliguri Region', authors: 'R. Banerjee, M. Nandi & A. Roy', tag: 'Place & Mobility' },
  { year: '2025', type: 'Research brief', title: 'Small Tea Growers and the Future of Work in the Dooars', authors: 'S. Chatterjee & T. Angmo', tag: 'Livelihoods' },
  { year: '2024', type: 'Field note', title: 'Listening at the Edge: Notes from Three Borderland Archives', authors: 'NBSRAC Archive Working Group', tag: 'Methods' },
  { year: '2024', type: 'Discussion paper', title: 'Teaching the Region: A Syllabus for Connected Histories', authors: 'P. S. Das, F. Qureshi & A. Roy', tag: 'Pedagogy' },
];

const partnerMarks = [
  ['UNB', 'University of North Bengal'], ['CPBU', 'Cooch Behar Panchanan Barma University'],
  ['IITG', 'Indian Institute of Technology Guwahati'], ['SNU', 'Sikkim National University'],
  ['CES', 'Centre for Eastern Studies'], ['HRI', 'Himalayan Research Initiative'],
];

const faqs = [
  ['Who is NBSRAC for?', 'NBSRAC welcomes researchers, students, independent scholars, institutions, community organisations and partners who care about thoughtful, collaborative work connected to North Bengal and the Eastern Himalaya.'],
  ['Does my work need to be based in North Bengal?', 'Not necessarily. We welcome work that studies, serves, teaches with or builds meaningful connections to the region. We are especially interested in collaborations that share knowledge in both directions.'],
  ['How can I join the society?', 'Membership applications will open shortly. You can register your interest now and we will contact you when the membership framework and fee structure are formally announced.'],
  ['Is NBSRAC a registered society?', 'Society registration is currently in progress. Until registration is complete, NBSRAC operates as a convened academic network and does not make claims of charitable or institutional status.'],
  ['Can I propose an event or publication?', 'Yes. Send a short outline through the contact form, including your proposed format, audience and connection to NBSRAC’s objectives. Our programme team reviews proposals quarterly.'],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventView, setEventView] = useState<'upcoming' | 'past'>('upcoming');
  const [publicationFilter, setPublicationFilter] = useState('All');
  const [publicationQuery, setPublicationQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const [membershipSent, setMembershipSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const filteredPublications = useMemo(() => publications.filter((publication) => {
    const matchesFilter = publicationFilter === 'All' || publication.type === publicationFilter;
    const query = publicationQuery.toLowerCase();
    return matchesFilter && (!query || `${publication.title} ${publication.authors} ${publication.tag}`.toLowerCase().includes(query));
  }), [publicationFilter, publicationQuery]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const submitMembership = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMembershipSent(true);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#f7f9fb] text-[#112a46]">
      <div className="bg-[#d7ac5a] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[.14em] text-[#112a46]" data-testid="status-registration">
        Society registration is in progress · Join the founding network
      </div>

      <header className="sticky top-0 z-50 border-b border-[#dbe3ea] bg-[#f7f9fb]/95 backdrop-blur-md">
        <div className="section-shell flex h-[74px] items-center justify-between">
          <button onClick={() => scrollTo('home')} aria-label="Go to NBSRAC home" data-testid="button-home">
            <Mark />
          </button>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-[11px] font-bold uppercase tracking-[.08em] text-[#52677f] transition-colors hover:text-[#112a46]" data-testid={`link-${id}`}>{label}</button>)}
          </nav>
          <button onClick={() => setMobileOpen((open) => !open)} className="grid h-11 w-11 place-items-center rounded-full border border-[#cfdbe4] text-[#112a46] xl:hidden" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-[#dbe3ea] bg-[#f7f9fb] px-5 py-4 xl:hidden" aria-label="Mobile navigation">
            <div className="section-shell grid gap-1">
              {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="flex justify-between border-b border-[#dbe3ea] py-3 text-left text-sm font-bold text-[#112a46]" data-testid={`mobile-link-${id}`}>{label}<ArrowUpRight size={15} /></button>)}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[#112a46] text-[#f7f9fb]">
          <div className="topo-lines absolute inset-0 opacity-50" />
          <div className="absolute -right-36 top-16 h-[430px] w-[430px] rounded-full border border-[#3e9b9a]/30" />
          <div className="absolute -right-16 top-36 h-[270px] w-[270px] rounded-full border border-[#d7ac5a]/30" />
          <div className="section-shell relative grid min-h-[660px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
            <Reveal>
              <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-[#8bc7c2]"><span className="h-px w-9 bg-[#8bc7c2]" /> A regional network for shared inquiry</div>
              <h1 className="max-w-4xl font-display text-[clamp(3.7rem,8vw,7.6rem)] leading-[.88] tracking-[-.045em]">Research that<br /><em className="text-[#d7ac5a]">travels</em> both ways.</h1>
              <p className="mt-9 max-w-xl text-[17px] leading-8 text-[#d5e0ea]">NBSRAC brings together people asking generous, rigorous questions about North Bengal, the Eastern Himalaya and the worlds connected to them.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('membership')} className="group flex items-center gap-3 bg-[#3e9b9a] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#58afa9]" data-testid="button-join-network">Join the network <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
                <button onClick={() => scrollTo('about')} className="flex items-center gap-3 border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/60" data-testid="button-discover-nbsrac">Discover NBSRAC <ArrowDown size={16} /></button>
              </div>
            </Reveal>
            <Reveal delay="delay-2">
              <div className="relative mx-auto w-full max-w-[430px]">
                <div className="relative aspect-[.82] overflow-hidden border border-white/15 bg-[#173856]">
                  <div className="absolute inset-0 opacity-80" style={{ background: 'linear-gradient(145deg, rgba(62,155,154,.3), transparent 45%), linear-gradient(25deg, rgba(215,172,90,.18), transparent 55%)' }} />
                  <div className="absolute -bottom-20 -left-12 h-[360px] w-[500px] rotate-[-16deg] border-t border-[#8bc7c2]/40 bg-[#1a4962]/60" />
                  <div className="absolute -bottom-40 -right-28 h-[400px] w-[520px] rotate-[18deg] border-t border-[#d7ac5a]/35 bg-[#112a46]/50" />
                  <div className="absolute left-7 top-7 font-mono text-[10px] uppercase tracking-[.16em] text-[#d5e0ea]">Field note / 001</div>
                  <div className="absolute bottom-8 left-7 right-7">
                    <div className="mb-4 h-px w-12 bg-[#d7ac5a]" />
                    <p className="font-display text-4xl leading-none text-white">The region is not<br /><em>at the edge.</em></p>
                    <p className="mt-5 max-w-[260px] text-xs leading-5 text-[#b9cbd9]">It is a site of methods, memory and movement — with its own centre of gravity.</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 border border-[#d7ac5a]/60 bg-[#112a46] px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#d7ac5a]">26°43′N · 88°26′E</div>
              </div>
            </Reveal>
          </div>
          <div className="border-t border-white/10">
            <div className="section-shell grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
              {[['42', 'Founding participants'], ['06', 'Working groups'], ['04', 'Research areas'], ['01', 'Shared ambition']].map(([value, label], index) => <div key={label} className={`py-6 ${index > 1 ? 'hidden md:block' : ''} ${index === 1 ? 'pl-6 md:pl-8' : ''} ${index > 1 ? 'pl-8' : ''}`}><div className="font-display text-3xl text-[#d7ac5a]">{value}</div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#a9bdcc]">{label}</div></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell scroll-mt-24 py-24 md:py-32">
          <Reveal className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div><div className="font-mono text-[10px] font-medium uppercase tracking-[.2em] text-[#3e9b9a]">01 / About the society</div><h2 className="academic-rule mt-5 max-w-md font-display text-5xl leading-[.95] tracking-[-.03em] md:text-6xl">A society with a sense of <em>place.</em></h2></div>
            <div className="max-w-2xl pt-1"><p className="text-xl leading-9 text-[#274663]">Promote Research Excellence, Academic Collaboration, and Knowledge Exchange at regional, national, and international levels, with special focus on strengthening the research and academic ecosystem in North Bengal.</p><p className="mt-6 leading-7 text-[#52677f]">We are building an open, interdisciplinary home for research and academic collaboration across North Bengal and the Eastern Himalayan region. Our work connects universities with communities, ideas with practice, and local questions with wider conversations.</p><div className="mt-9 flex items-center gap-4"><div className="h-10 w-10 rounded-full border border-[#d7ac5a] p-2"><div className="h-full w-full rounded-full bg-[#d7ac5a]" /></div><p className="text-sm font-semibold text-[#112a46]">Rooted here. In conversation everywhere.</p></div></div>
          </Reveal>
        </section>

        <section id="objectives" className="scroll-mt-24 border-y border-[#dbe3ea] bg-[#edf3f6] py-24 md:py-28">
          <div className="section-shell">
            <Reveal className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">02 / What guides us</div><h2 className="mt-4 font-display text-5xl leading-none tracking-[-.03em] md:text-6xl">Objectives</h2></div><p className="max-w-xs text-sm leading-6 text-[#52677f]">Our objectives are deliberately practical: make more room for better questions, better company and better public knowledge.</p></Reveal>
            <div className="grid border-l border-t border-[#cbd9e2] md:grid-cols-3">
              {objectives.map(({ number, icon: Icon, title, text }, index) => <Reveal key={number} delay={`delay-${index + 1}`} className="border-b border-r border-[#cbd9e2] bg-[#edf3f6] p-7 transition-colors hover:bg-white md:p-9"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#3e9b9a]">{number}</span><Icon size={22} strokeWidth={1.4} className="text-[#112a46]" /></div><h3 className="mt-14 max-w-[220px] text-xl font-bold leading-7">{title}</h3><p className="mt-4 text-sm leading-6 text-[#52677f]">{text}</p></Reveal>)}
            </div>
          </div>
        </section>
        <section id="leadership" className="section-shell scroll-mt-24 py-24 md:py-32">
  <Reveal className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">

    {/* Left side */}
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">
        03 / Leadership 
      </div>

      <h2 className="academic-rule mt-5 font-display text-5xl leading-[.94] tracking-[-.03em] md:text-6xl">
        Leadership <em> & Members</em>
      </h2>

      <p className="mt-7 max-w-sm text-sm leading-6 text-[#52677f]">
        Our leadership and founding committee work together to guide the
        society, strengthen academic collaboration, and create opportunities
        for others.
      </p>
    </div>

    {/* Right side */}
    <div>

      {/* President & Secretary */}
      <div className="mb-14 grid gap-6 sm:grid-cols-2">
        {leadership.map((person) => (
          <Reveal
            key={person.role}
            className="border-t-2 border-[#112a46] pt-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">
              {person.role}
            </p>

            <h3 className="mt-3 font-display text-3xl tracking-[-.02em] text-[#112a46]">
              {person.name}
            </h3>
          </Reveal>
        ))}
      </div>

      {/* Founding Committee */}
      <div className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">
          Founding Committee
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {committee.map((person, index) => (
          <Reveal
            key={person.name}
            delay={`delay-${index + 1}`}
            className="group border-t border-[#dbe3ea] pt-5"
          >
            <div
              className={`relative mb-5 grid aspect-[1.25] place-items-center overflow-hidden ${person.tone}`}
            >
              <img
  src={person.image}
  alt={person.name}
  className="absolute inset-0 h-full w-full object-cover"
/>



              <div className="absolute inset-0 bg-gradient-to-t from-[#112a46]/20 to-transparent" />
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold">{person.name}</h3>

                <p className="mt-1 text-xs text-[#3e9b9a]">
                  {person.role}
                </p>

                <p className="mt-3 text-xs leading-5 text-[#52677f]">
                  {person.institution}
                </p>

                <a
                  href={`mailto:${person.contact}`}
                  className="mt-2 block text-xs text-[#3e9b9a] hover:underline"
                >
                  {person.contact}
                </a>
              </div>

              <a
                href={`mailto:${person.contact}`}
                aria-label={`Email ${person.name}`}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#cbd9e2] text-[#112a46] transition-colors hover:border-[#3e9b9a] hover:text-[#3e9b9a]"
                data-testid={`link-email-${index}`}
              >
                <Mail size={15} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </Reveal>
</section>
       

        <section id="activities" className="scroll-mt-24 bg-[#112a46] py-24 text-[#f7f9fb] md:py-28">
          <div className="section-shell">
            <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8bc7c2]">04 / In the field</div><h2 className="mt-4 font-display text-5xl leading-none tracking-[-.03em] md:text-6xl">A calendar of exchange.</h2></div><div className="flex border border-white/20 p-1" role="tablist" aria-label="Event filter"><button onClick={() => setEventView('upcoming')} className={`px-4 py-2 text-xs font-bold ${eventView === 'upcoming' ? 'bg-[#d7ac5a] text-[#112a46]' : 'text-[#d5e0ea]'}`} role="tab" aria-selected={eventView === 'upcoming'} data-testid="tab-upcoming-events">Upcoming</button><button onClick={() => setEventView('past')} className={`px-4 py-2 text-xs font-bold ${eventView === 'past' ? 'bg-[#d7ac5a] text-[#112a46]' : 'text-[#d5e0ea]'}`} role="tab" aria-selected={eventView === 'past'} data-testid="tab-past-events">Past events</button></div></Reveal>
            <div className="mt-12 border-t border-white/15">{events.filter((event) => event.status === eventView).map((event, index) => <Reveal key={event.title} delay={`delay-${index + 1}`} className="group grid gap-5 border-b border-white/15 py-7 md:grid-cols-[120px_1fr_auto] md:items-center"><div className="flex items-center gap-3 md:block"><div className="font-display text-4xl leading-none text-[#d7ac5a]">{event.date}</div><div className="font-mono text-[10px] tracking-[.15em] text-[#8bc7c2]">{event.month}</div></div><div><div className="mb-2 flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-[#8bc7c2]">{event.type}</span><span className="h-1 w-1 rounded-full bg-[#d7ac5a]" /><span className="flex items-center gap-1 text-xs text-[#a9bdcc]"><MapPin size={12} /> {event.location}</span></div><h3 className="text-xl font-bold">{event.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#a9bdcc]">{event.description}</p></div><button onClick={() => scrollTo('contact')} className="flex items-center gap-2 text-xs font-bold text-[#d7ac5a] transition-colors hover:text-white md:justify-self-end" data-testid={`button-event-interest-${index}`}>Event details <ArrowUpRight size={15} /></button></Reveal>)}</div>
            {events.filter((event) => event.status === eventView).length === 0 && <div className="py-12 text-center text-[#a9bdcc]">More gatherings will be added soon.</div>}
            <Reveal className="mt-14 grid gap-4 md:grid-cols-3"><div className="border border-white/15 p-6"><CalendarDays className="text-[#d7ac5a]" size={22} /><h3 className="mt-12 font-bold">Annual colloquium</h3><p className="mt-2 text-sm leading-6 text-[#a9bdcc]">A flagship meeting for work-in-progress and new collaborations.</p></div><div className="border border-white/15 p-6"><Clock3 className="text-[#d7ac5a]" size={22} /><h3 className="mt-12 font-bold">Monthly seminars</h3><p className="mt-2 text-sm leading-6 text-[#a9bdcc]">Short, useful conversations open to members and guests.</p></div><div className="border border-white/15 p-6"><BookOpen className="text-[#d7ac5a]" size={22} /><h3 className="mt-12 font-bold">Methods clinics</h3><p className="mt-2 text-sm leading-6 text-[#a9bdcc]">Peer learning for the practical parts of research.</p></div></Reveal>
          </div>
        </section>

        <section id="publications" className="scroll-mt-24 py-24 md:py-32">
          <div className="section-shell">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">05 / Open knowledge</div><h2 className="mt-4 font-display text-5xl leading-none tracking-[-.03em] md:text-6xl">What we are reading,<br /><em>making and sharing.</em></h2></div><div className="relative w-full md:w-64"><Search size={15} className="absolute left-3 top-3.5 text-[#52677f]" /><input value={publicationQuery} onChange={(event) => setPublicationQuery(event.target.value)} placeholder="Search publications" className="h-11 w-full border border-[#cbd9e2] bg-white pl-9 pr-3 text-sm placeholder:text-[#8293a3] focus:border-[#3e9b9a] focus:outline-none" aria-label="Search publications" data-testid="input-publication-search" /></div></Reveal>
            <div className="mt-12 flex flex-wrap gap-2 border-b border-[#dbe3ea] pb-4">{['All', 'Working paper', 'Research brief', 'Field note', 'Discussion paper'].map((filter) => <button key={filter} onClick={() => setPublicationFilter(filter)} className={`border px-3 py-2 text-xs font-bold transition-colors ${publicationFilter === filter ? 'border-[#112a46] bg-[#112a46] text-white' : 'border-[#cbd9e2] text-[#52677f] hover:border-[#112a46]'}`} data-testid={`filter-publications-${filter.toLowerCase().replaceAll(' ', '-')}`}>{filter}</button>)}</div>
            <div className="divide-y divide-[#dbe3ea]">{filteredPublications.map((publication, index) => <Reveal key={publication.title} delay={`delay-${(index % 3) + 1}`} className="grid gap-4 py-7 md:grid-cols-[80px_1fr_120px_auto] md:items-center"><div className="font-mono text-xs text-[#3e9b9a]">{publication.year}</div><div><div className="mb-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#d49f3d]">{publication.type}</div><h3 className="max-w-xl text-lg font-bold leading-7">{publication.title}</h3><p className="mt-2 text-xs text-[#52677f]">{publication.authors}</p></div><div className="text-xs text-[#52677f] md:text-right">{publication.tag}</div><button className="flex items-center gap-2 text-xs font-bold text-[#112a46] hover:text-[#3e9b9a]" onClick={() => window.alert('The publication PDF will be available when the NBSRAC repository opens.')} data-testid={`button-download-publication-${index}`}>Preview <Download size={14} /></button></Reveal>)}</div>
            {filteredPublications.length === 0 && <div className="py-14 text-center text-sm text-[#52677f]">No publications match that search. Try a different term.</div>}
          </div>
        </section>

        <section id="membership" className="scroll-mt-24 border-y border-[#dbe3ea] bg-[#edf3f6] py-24 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <Reveal><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">06 / Become part of it</div><h2 className="mt-5 font-display text-5xl leading-[.94] tracking-[-.03em] md:text-6xl">Bring your<br /><em>question.</em></h2><p className="mt-7 max-w-md text-sm leading-7 text-[#52677f]">Founding membership will be open to students, scholars, institutions and independent researchers. Register your interest and help shape what comes next.</p><div className="mt-8 border-l-2 border-[#d7ac5a] pl-5 text-sm leading-6 text-[#274663]">No membership fee or commitment is required at this stage. We will share the full framework once registration is complete.</div></Reveal>
            <Reveal delay="delay-2"><div className="bg-white p-6 shadow-[var(--shadow-sm)] md:p-9">{membershipSent ? <div className="flex min-h-[360px] flex-col items-start justify-center"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#d9ebe8] text-[#3e9b9a]"><Check size={22} /></div><h3 className="mt-6 font-display text-4xl">You are on the list.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#52677f]">Thank you for helping us build this carefully. We will be in touch when founding membership opens.</p><button onClick={() => setMembershipSent(false)} className="mt-7 text-xs font-bold text-[#3e9b9a] underline underline-offset-4" data-testid="button-membership-reset">Register another interest</button></div> : <form onSubmit={submitMembership} className="grid gap-5" aria-label="Membership interest form"><div><label htmlFor="member-name" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Full name</label><input required id="member-name" className="h-12 w-full border border-[#cbd9e2] px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="Your name" data-testid="input-member-name" /></div><div><label htmlFor="member-email" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Email address</label><input required type="email" id="member-email" className="h-12 w-full border border-[#cbd9e2] px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="you@institution.edu" data-testid="input-member-email" /></div><div><label htmlFor="member-affiliation" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Affiliation / practice</label><input required id="member-affiliation" className="h-12 w-full border border-[#cbd9e2] px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="University, organisation or independent" data-testid="input-member-affiliation" /></div><div><label htmlFor="member-interest" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">I am interested as a…</label><select id="member-interest" className="h-12 w-full border border-[#cbd9e2] bg-white px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" data-testid="select-member-interest"><option>Researcher / scholar</option><option>Student / early career researcher</option><option>Institutional partner</option><option>Community or practice partner</option></select></div><button className="mt-2 flex h-12 items-center justify-center gap-2 bg-[#112a46] text-sm font-bold text-white transition-colors hover:bg-[#1d4767]" data-testid="button-submit-membership">Register interest <Send size={15} /></button></form>}</div></Reveal>
          </div>
        </section>

        <section id="partners" className="scroll-mt-24 py-24 md:py-28">
          <div className="section-shell">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">07 / In good company</div><h2 className="mt-4 font-display text-5xl leading-none tracking-[-.03em] md:text-6xl">Collaboration is<br /><em>the method.</em></h2></div><p className="max-w-sm text-sm leading-6 text-[#52677f]">We are growing a network of institutions and initiatives that share knowledge without flattening difference.</p></Reveal>
            <Reveal delay="delay-2" className="mt-14 grid grid-cols-2 border-l border-t border-[#dbe3ea] sm:grid-cols-3">{partnerMarks.map(([mark, name], index) => <div key={name} className="group flex min-h-[130px] flex-col justify-between border-b border-r border-[#dbe3ea] p-5 transition-colors hover:bg-[#edf3f6] md:p-7"><div className="font-mono text-lg font-medium tracking-[-.08em] text-[#112a46]">{mark}</div><div className="flex items-end justify-between gap-2"><span className="max-w-[150px] text-[11px] leading-4 text-[#52677f]">{name}</span><Building2 size={15} className="text-[#d7ac5a]" /></div></div>)}</Reveal>
            <Reveal className="mt-14 flex flex-col items-start justify-between gap-5 border-y border-[#dbe3ea] py-6 md:flex-row md:items-center"><p className="text-sm text-[#52677f]">Interested in a research, teaching or public programme collaboration?</p><button onClick={() => scrollTo('contact')} className="flex items-center gap-2 text-sm font-bold text-[#3e9b9a]" data-testid="button-partner-contact">Start a conversation <ArrowUpRight size={16} /></button></Reveal>
          </div>
        </section>

        <section id="conference" className="scroll-mt-24 bg-[#112a46] py-24 text-[#f7f9fb] md:py-28">
          <div className="section-shell">
            <Reveal>
              <div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8bc7c2]">
                08 / NBSRAC Conference
              </div>

              <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
                <div>
                  <h2 className="font-display text-5xl leading-[.94] tracking-[-.03em] md:text-7xl">
                    Ideas meet<br />
                    <em>people.</em>
                  </h2>

                  <p className="mt-7 max-w-2xl text-sm leading-7 text-[#c9d8e3]">
                    NBSRAC conferences bring researchers, academicians, students,
                    institutions and practitioners together to share research,
                    exchange ideas and build meaningful academic collaborations.
                  </p>
                </div>

                <div className="border-l-2 border-[#d7ac5a] pl-6">
                  <p className="text-sm leading-7 text-[#c9d8e3]">
                    Explore conference announcements, calls for papers,
                    important dates, registration details and other event
                    information on our dedicated conference website.
                  </p>

                  <a
                    href="https://nbsrac-conference.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 bg-[#d7ac5a] px-6 py-3 text-sm font-bold text-[#112a46] transition-colors hover:bg-[#e4c27d]"
                    data-testid="link-conference-website"
                  >
                    Visit Conference Website
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-[#edf3f6] py-24 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <Reveal><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#3e9b9a]">09 / The short answer</div><h2 className="mt-5 font-display text-5xl leading-[.94] tracking-[-.03em] md:text-6xl">Questions we<br /><em>hear often.</em></h2></Reveal>
            <Reveal delay="delay-2"><div className="border-t border-[#cbd9e2]">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-[#cbd9e2]"><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold" aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span>{question}</span><ChevronDown size={18} className={`shrink-0 text-[#3e9b9a] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <div className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#52677f]" data-testid={`text-faq-answer-${index}`}>{answer}</div>}</div>)}</div></Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#3e9b9a] py-24 text-white md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#d7f0ed]">10 / Write to us</div><h2 className="mt-5 font-display text-5xl leading-[.94] tracking-[-.03em] md:text-6xl">Good work<br /><em>starts somewhere.</em></h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#d7f0ed]">Tell us what you are working on, what you want to learn, or who you would like to meet. We read every note.</p><div className="mt-10 flex flex-wrap gap-3"><a href="mailto:hello@nbsrac.org" className="flex items-center gap-2 border border-white/40 px-4 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-[#3e9b9a]" data-testid="link-general-email"><Mail size={15} /> hello@nbsrac.org</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-white/40 transition-colors hover:bg-white hover:text-[#3e9b9a]" aria-label="NBSRAC on LinkedIn" data-testid="link-linkedin"><Linkedin size={16} /></a></div></Reveal>
            <Reveal delay="delay-2"><div className="bg-[#f7f9fb] p-6 text-[#112a46] md:p-9">{contactSent ? <div className="flex min-h-[330px] flex-col items-start justify-center"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#d9ebe8] text-[#3e9b9a]"><Check size={22} /></div><h3 className="mt-6 font-display text-4xl">Message received.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#52677f]">Thank you. A member of the NBSRAC team will reply from our shared office shortly.</p><button onClick={() => setContactSent(false)} className="mt-7 text-xs font-bold text-[#3e9b9a] underline underline-offset-4" data-testid="button-contact-reset">Send another message</button></div> : <form onSubmit={submitContact} className="grid gap-5" aria-label="Contact form"><div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Name</label><input required id="contact-name" className="h-12 w-full border border-[#cbd9e2] bg-white px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="Your name" data-testid="input-contact-name" /></div><div><label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Email</label><input required type="email" id="contact-email" className="h-12 w-full border border-[#cbd9e2] bg-white px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="you@email.com" data-testid="input-contact-email" /></div></div><div><label htmlFor="contact-topic" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">I am writing about</label><select id="contact-topic" className="h-12 w-full border border-[#cbd9e2] bg-white px-3 text-sm focus:border-[#3e9b9a] focus:outline-none" data-testid="select-contact-topic"><option>A research collaboration</option><option>An event or seminar proposal</option><option>A publication idea</option><option>Press or general enquiry</option></select></div><div><label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-[.08em]">Message</label><textarea required id="contact-message" rows={5} className="w-full resize-none border border-[#cbd9e2] bg-white px-3 py-3 text-sm focus:border-[#3e9b9a] focus:outline-none" placeholder="A few words about your idea…" data-testid="textarea-contact-message" /></div><button className="flex h-12 items-center justify-center gap-2 bg-[#112a46] text-sm font-bold text-white transition-colors hover:bg-[#1d4767]" data-testid="button-submit-contact">Send message <Send size={15} /></button></form>}</div></Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#112a46] py-12 text-[#f7f9fb]">
        <div className="section-shell">
          <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.1fr_.9fr_.9fr]">
            <div><Mark inverse /><p className="mt-6 max-w-xs text-sm leading-6 text-[#a9bdcc]">A regional society for research and academic collaboration across North Bengal and the Eastern Himalaya.</p></div>
            <div><div className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#8bc7c2]">Explore</div><div className="grid grid-cols-2 gap-y-3">{navItems.slice(0, 6).map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-left text-xs text-[#d5e0ea] hover:text-white" data-testid={`footer-link-${id}`}>{label}</button>)}</div></div>
            <div><div className="mb-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#8bc7c2]">Founding office</div><p className="text-sm leading-6 text-[#d5e0ea]">Siliguri, West Bengal<br />India · 734001</p><a href="mailto:hello@nbsrac.org" className="mt-3 inline-flex items-center gap-2 text-xs text-[#d7ac5a] hover:text-white" data-testid="footer-email"><Mail size={13} /> hello@nbsrac.org</a></div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[.12em] text-[#8298aa] sm:flex-row"><span>© 2025 NBSRAC · Society registration in progress</span><span>Built for shared inquiry</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;