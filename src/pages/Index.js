import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import  logo  from '../assets/images/DeepClean-Logo.png';
import  whitelogo  from '../assets/images/DeepClean-LogoWhite.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CookieBanner from '../components/CookieBanner';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='relative overflow-hidden w-full'
          style={{
            backgroundImage:
              'url("images/backgroundblue.png")',
          }}
        >
          <nav className='relative py-8 px-4 xl:px-10'>
            <div className='flex justify-between items-center'>
              <Link className='text-xl text-white font-semibold' to='/'>
                <img
                  src={logo}
                  alt=''
                  className='rounded h-16'
                />
              </Link>
              <div className='lg:hidden'>
                <button className='navbar-burger flex items-center p-3 rounded bg-green-700' onClick={() => setMenuOpen(true)}>
                  <svg
                    className='text-white block h-4 w-4'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                  >
                    <title>Mobile menu</title>
                    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                  </svg>
                </button>
              </div>
              <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-10'>
                <li>
                  <Link className='text-black text-lg font-semibold' to='#Despre_noi'>
                    Despre noi
                  </Link>
                </li>
                <li>
                  <Link className='text-black text-lg font-semibold' to='#De_ce_noi'>
                    De ce noi?
                  </Link>
                </li>
                <li>
                  <Link className='text-black text-lg font-semibold' to='#Servicii'>
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link className='text-black text-lg font-semibold' to='#Contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='relative'>
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap relative items-center -mx-4'>
                <div className='relative z-10 w-full md:w-1/2 mb-6 md:mb-0 px-4 lg:py-24'>
                  <div className='flex flex-wrap lg:flex-nowrap'>
                    <div className='mb-6 lg:mb-0 lg:mt-36 lg:-mr-24'>
                      <p className='lg:transform lg:rotate-90 tracking-widest text-green-700 text-lg'>
                        Curățenie&nbsp;Impecabilă,&nbsp;Bucurie Garantată!
                      </p>
                    </div>
                    <div>
                      <h2 className='mb-8 text-4xl lg:text-6xl font-bold text-green-700'>
                        Transformăm Spațiile în Locuri Impecabile!
                      </h2>
                      <Link
                        className='inline-block w-full md:w-auto mb-2 md:mb-0 py-5 px-8 mr-6 text-center text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-400 transition duration-200'
                        to='#Contact'
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='hidden md:block absolute top-0 right-0 w-full md:w-1/2 mr-10 px-4'>
                  <img
                    className='w-full object-cover h-80 lg:h-128'
                    src='images/blue-cleaning-tools-2021-0-png-1696426446717.webp'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${menuOpen ? "" : "hidden"} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
            <div className='navbar-backdrop fixed inset-0 bg-blue-800 opacity-90' />
            <nav className='relative flex flex-col py-8 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <Link
                  className='ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none'
                  to='#'
                >
                  <img
                    className='h-16'
                    src={logo}
                    alt=''
                    width='auto'
                  />
                </Link>
                <button className='navbar-close'
                 onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className='mb-1'>
                    <Link
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      to='#Despre_noi'
                    >
                      Despre noi
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      to='#De_ce_noi'
                    >
                      De ce noi?
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      to='#Servicii'
                    >
                      Servicii
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      to='#Contact'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <p className='mt-6 mb-4 text-sm text-center text-blue-400'>
                  <span>
                    © 2023 Toate drepturile rezervate © Deep Clean Services 2023
                  </span>
                </p>
              </div>
            </nav>
          </div>
        </section>

        {localStorage.getItem("cookie_consent") ? null : <CookieBanner />}
        
        <section id="Despre_noi" className='py-20'>
          <div className='container px-4 mx-auto mb-12 lg:mb-24'>
            <div className='flex flex-wrap -mx-4 items-center'>
              <div className='w-full px-4 mb-12 lg:mb-0'>
                <h2 className='text-5xl font-bold font-heading text-green-700 text-center'>
                  Despre noi
                </h2>
              </div>
            </div>
          </div>
          <div className='container px-4 mx-auto'>
            <div className='max-w-2xl mx-auto'>
              <p className='mb-6 text-lg font-medium text-green-700'>
                La Deep Clean Services, nu oferim doar servicii de curățenie, ci aducem
                în fiecare loc în care intervenim un nivel superior de igienă și
                prospețime. Cu o echipă dedicată de specialiști în curățenie și
                o pasiune inepuizabilă pentru detaliu, suntem mai mult decât
                angajați - suntem partenerii dvs. de încredere în menținerea
                unui mediu impecabil.
              </p>
              <p
                className='mb-6 text-lg font-medium text-green-700'
              >
                {' '}
                Echipa noastră este formată din experți cu o vastă experiență,
                dornici să răspundă oricăror cerințe și să transforme fiecare
                proiect într-un succes impecabil. Ne adaptăm fiecărui mediu în
                parte, oferind soluții personalizate pentru a satisface nevoile
                specifice ale fiecărui client.
              </p>
              <img
                src='images/steam-cleaner-mop-on-yellow-background-top-view-2021-08-26-20-11-23-utc-jpg-1696429096419.webp'
                alt=''
                className='rounded shadow-md'
              />
              <p className='mb-6 text-lg font-medium text-green-700'>
                Ce ne diferențiază de restul? Este pasiunea noastră pentru
                curățenie. Fiecare echipament utilizat, fiecare produs folosit
                și fiecare mișcare pe care o facem sunt ghidate de dorința de a
                vă oferi un mediu care nu doar arată curat, ci și simte curat.
                Ne mândrim cu atenția noastră la detalii, fiind convinși că
                aceasta face diferența între o curățenie obișnuită și o
                curățenie extraordinară.
              </p>
              <p className='mb-6 text-lg font-medium text-green-700'>
                Indiferent dacă este vorba despre biroul dvs. plin de vitalitate
                sau locuința dvs. caldă și primitoare, suntem aici pentru a vă
                oferi servicii de curățenie de neegalat. Alegeți Deep Clean Services și
                lăsați-ne să vă ajutăm să transformați fiecare spațiu într-un
                sanctuar de prospețime și claritate, în care fiecare detaliu
                este îngrijit cu grijă și precizie. Cu Deep Clean Services, confortul și
                igiena sunt la doar un apel distanță.
              </p>
            </div>
          </div>
        </section>
        <section id="De_ce_noi" className='relative overflow-x-hidden pb-24 lg:py-24'>
          <img
            className='lg:absolute lg:top-0 lg:left-0 h-full w-full lg:w-5/12 mb-12 lg:mb-0 object-cover lg:clip-path-right-top'
            src='images/detergents-and-cleaning-accessories-in-pastel-colo-2022-03-10-02-00-41-utc-jpg-1696424961537.webp'
            alt=''
          />
          <div className='relative container px-4 mx-auto'>
            <div className='w-full lg:w-1/2 lg:ml-auto'>
              <div className='max-w-md'>
                <h2 className='mb-8 font-bold font-heading text-blue-300 text-4xl'>
                  De ce să apelezi la noi de noi?
                </h2>
                <div className='flex items-start mb-8'>
                  <div className='mr-4'>
                    <svg
                      className='text-blue-500 h-6 w-6'
                      viewBox='0 0 26 21'
                      fill='#000'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='mb-2 text-lg font-semibold font-heading text-pink-500'>
                      Experiență și Profesionalism:
                    </h3>
                    <p className='text-base text-gray-500 leading-loose'>
                      Deep Clean Services se remarcă prin experiența sa vastă în
                      industria curățeniei și profesionalismul echipei sale bine
                      instruite. Firma oferă soluții personalizate și înțelege
                      nevoile specifice ale fiecărui client, asigurând un mediu
                      curat și sănătos.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className='mr-4'>
                    <svg
                      className='text-blue-500 h-6 w-6'
                      viewBox='0 0 26 21'
                      fill='#000'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='mb-2 text-lg font-semibold font-heading text-pink-500'>
                      Calitatea Serviciilor și Produselor Ecologice:{' '}
                    </h3>
                    <p className='text-base text-gray-500 leading-loose'>
                      Deep Clean Services utilizează produse ecologice și echipamente de
                      curățenie de ultimă generație. Cu angajamentul de a oferi
                      rezultate impecabile, firma garantează un mediu curat și
                      sigur, utilizând produse prietenoase cu mediul
                      înconjurător.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='mr-4'>
                    <svg
                      className='text-blue-500 h-6 w-6'
                      viewBox='0 0 26 21'
                      fill='#000'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.8075 15.5254L23.3675 0.965393L26 3.59789L8.8075 20.8229L0 12.0479L2.665 9.38289L8.8075 15.5254Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='mb-2 text-lg font-semibold font-heading text-blue-800 text-pink-500'>
                      Confort și Economie de Timp:{' '}
                    </h3>
                    <p className='text-base text-gray-500 leading-loose'>
                      Deep Clean Services oferă clienților comoditatea de a economisi
                      timp și efort, eliminând necesitatea curățării propriilor
                      spații. Alegând serviciile Deep Clean Services, clienții pot să se
                      concentreze pe activitățile lor importante, beneficiind
                      totodată de un mediu curat și ordonat în locuință sau
                      birou.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Servicii" className='relative py-24'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-8 font-bold font-heading text-center text-black text-5xl p-2'>
              Ce servicii găsești la noi?
            </h2>
            <div className='flex flex-wrap -m-4'>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    1
                  </span>
                  <h3 className='mt-8 mb-4 lg:max-w-xs text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Birouri
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Deep Clean Services oferă servicii de curățenie pentru birouri care
                    asigură un mediu de lucru impecabil și profesional. Echipa
                    noastră se ocupă de curățarea și dezinfectarea birourilor,
                    spațiilor comune și a echipamentelor, contribuind la
                    creșterea productivității și a satisfacției angajaților.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    2
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Case
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Curățenia în casă este cheia unui mediu locuibil și sănătos.
                    Oferim servicii personalizate de curățenie pentru case,
                    inclusiv curățarea detaliată a fiecărei camere, a
                    bucătăriilor și a băilor, asigurând confortul și prospețimea
                    locuinței dumneavoastră.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    3
                  </span>
                  <h3 className='mt-8 mb-4 lg:max-w-xs text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Apartamente
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Pentru locatarii de apartamente, Deep Clean Services oferă servicii
                    de curățenie eficiente și fiabile. Ne ocupăm de toate
                    spațiile, inclusiv de cele mici și compacte, pentru a vă
                    asigura că apartamentul dumneavoastră este întotdeauna curat
                    și primitor.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    4
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Magazine
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Un magazin curat și ordonat atrage clienții și sporește
                    vânzările. Oferim servicii de curățenie pentru magazine,
                    asigurându-ne că produsele sunt expuse într-un mediu curat
                    și atractiv, contribuind astfel la o experiență de
                    cumpărături plăcută.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    5
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    {' '}
                    Servicii de Curățenie pentru Instituții
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Deep Clean Services oferă servicii de curățenie pentru instituții
                    precum școli, clinici și instituții publice. Echipa noastră
                    se asigură că aceste locuri sunt curate, sigure și igienice,
                    oferind un mediu propice pentru învățare și tratament
                    medical.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    6
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Imobile Profesionale
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Imobilele profesionale precum hotelurile și restaurantele
                    necesită o curățenie deosebită pentru a menține un standard
                    înalt. Oferim servicii de curățenie pentru imobile
                    profesionale, asigurând un mediu impecabil și plăcut pentru
                    clienții dumneavoastră.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    7
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Clădiri Interioare
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Indiferent de dimensiunea clădirii, Deep Clean Services se ocupă de
                    curățenia interioară. Curățăm și întreținem fiecare
                    colțișor, asigurând un mediu proaspăt și plăcut pentru
                    locatari sau angajați.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    8
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    Servicii de Curățenie pentru Zone Exterioare
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Zona exterioară este prima impresie pe care oamenii o au
                    despre proprietatea dumneavoastră. Echipa noastră se ocupă
                    de curățarea curților, teraselor și a altor spații
                    exterioare, transformându-le în zone curate și primitoare.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div className='relative py-16 px-6 md:px-20 bg-blue-300 h-full'>
                  <span className='absolute top-0 left-0 flex w-20 h-12 pl-6 items-center clip-path-right-top bg-yellow-500 text-2xl text-black font-bold'>
                    9
                  </span>
                  <h3 className='mt-8 mb-4 text-3xl font-semibold font-heading text-white'>
                    {' '}
                    Servicii de Curățenie pentru Piscine
                  </h3>
                  <p className='text-base text-white leading-relaxed'>
                    Piscinele necesită o curățenie regulată pentru a menține
                    siguranța și claritatea apei. Oferim servicii profesionale
                    pentru curățarea piscinelor, asigurându-ne că apa este
                    echilibrată chimic și că zona din jur este curată și sigură
                    pentru toți utilizatorii.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Contact"
          className='relative py-24 overflow-hidden'
          style={{
            backgroundImage:
              'url("images/detergents-and-cleaning-accessories-in-pastel-colo-2021-08-30-13-51-50-utc-jpg-1696425506108.webp")',
          }}
        >
          <div className='relative container px-4 mx-auto'>
            <div className='flex flex-wrap items-center -mx-4'>
              <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
                <div className='max-w-md bg-white p-8 lg:p-16'>
                  <h2 className='mb-8 text-4xl font-bold font-heading text-green-700'>
                    Unde ne găsești
                  </h2>
                  <h3 className='uppercase leading-loose tracking-widest font-semibold text-gray-300'>
                    ADRESĂ
                  </h3>
                  <p className='text-green-700 font-medium'>
                    Alba Iulia, Str. Mărășești, 
                  </p>
                  <p className='mb-6 font-medium text-green-700'>
                    Nr.95, județ Alba
                  </p>
                  <h3 className='uppercase font-semibold leading-loose tracking-widest text-gray-300'>
                    CONTACT
                  </h3>
                  <p className='text-green-700 font-medium'>
                   office.deep.clean.services@gmail.com
                  </p>
                  <p className='text-green-700 font-medium'>0745 357 905</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='bg-white p-8 lg:p-16'>
                  <h3 className='mb-2 text-2xl font-bold font-heading text-green-700'>
                    Alte Întrebări? Contactează-ne!
                  </h3>
                  <p className='mb-6 text-gray-500'>Află toate detaliile</p>
                  <form action=''>
                    <input
                      className='block w-full bg-blue-50 py-4 pl-6 mb-2 placeholder-blue-400 text-sm text-blue-400'
                      type='email'
                      placeholder='E-mail'
                    />
                    <input
                      className='block w-full bg-blue-50 py-4 pl-6 mb-2 placeholder-blue-400 text-sm text-blue-400'
                      type='text'
                      placeholder='Nume'
                    />
                    <textarea
                      className='block w-full bg-blue-50 py-4 px-6 mb-2 resize-none placeholder-blue-400 tetx-sm text-blue-400'
                      name=''
                      id=''
                      rows={4}
                      placeholder='Mesajul Tău...'
                      defaultValue={''}
                    />
                    <button className='block w-full py-5 bg-yellow-500 hover:bg-yellow-400 text-sm uppercase font-bold transition duration-200'>
                      Trimite
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 bg-green-700'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-between -mx-2'>
              <div className='w-full lg:w-2/6 px-2'>
                <Link
                  className='inline-block mb-6 text-white text-lg font-semibold'
                  to='#'
                >
                  <img
                    className='h-16'
                    src={whitelogo}
                    alt=''
                    width='auto'
                  />
                </Link>
                <p className='hidden lg:block text-sm text-blue-300'>
                  Toate drepturile rezervate © Deep Clean Services 2023
                </p>
              </div>
              <div className='w-full lg:w-4/6 px-2'>
                <div className='flex flex-wrap justify-end items-center'>
                  <ul className='w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-16'>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <Link
                        className='text-sm text-white hover:text-blue-100'
                        to='#Despre_noi'
                      >
                        Despre noi
                      </Link>
                    </li>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <Link
                        className='text-sm text-white hover:text-blue-100'
                        to='#De_ce_noi'
                      >
                        De ce noi?
                      </Link>
                    </li>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <Link
                        className='text-sm text-white hover:text-blue-100'
                        to='#Servicii'
                      >
                        Servicii
                      </Link>
                    </li>
                    <li className='mb-2 md:mb-0'>
                      <Link
                        className='text-sm text-white hover:text-blue-100'
                        to='#Contact'
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className='mt-6 lg:hidden text-sm text-blue-300'>
                  Toate drepturile rezervate © Deep Clean Services
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

