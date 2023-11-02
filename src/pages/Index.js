import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
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
              <a className='text-xl text-white font-semibold' href='#'>
                <img
                  src='images/DeepClean-Logo.png'
                  alt=''
                  className='rounded h-16'
                />
              </a>
              <div className='lg:hidden'>
                <button className='navbar-burger flex items-center p-3 rounded bg-green-700'>
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
                  <a className='text-black text-lg font-semibold' href='#'>
                    Despre noi
                  </a>
                </li>
                <li>
                  <a className='text-black text-lg font-semibold' href='#'>
                    De ce noi?
                  </a>
                </li>
                <li>
                  <a className='text-black text-lg font-semibold' href='#'>
                    Servicii
                  </a>
                </li>
                <li>
                  <a className='text-black text-lg font-semibold' href='#'>
                    Contact
                  </a>
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
                      <a
                        className='inline-block w-full md:w-auto mb-2 md:mb-0 py-5 px-8 mr-6 text-center text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-400 transition duration-200'
                        href='#'
                      >
                        Contact
                      </a>
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
          <div className='navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden'>
            <div className='navbar-backdrop fixed inset-0 bg-blue-800 opacity-90' />
            <nav className='relative flex flex-col py-8 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a
                  className='ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none'
                  href='#'
                >
                  <img
                    className='h-16'
                    src='images/DeepCleanLogo.png'
                    alt=''
                    width='auto'
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className='mb-1'>
                    <a
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      href='#'
                    >
                      Despre noi
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      href='#'
                    >
                      De ce noi?
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      href='#'
                    >
                      Servicii
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block pl-16 py-5 font-semibold rounded text-black hover:text-pink-500'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <div className='pt-6'>
                  <a
                    className='block mb-2 py-4 text-center text-blue-800 font-semibold'
                    href='#'
                  >
                    Sign in
                  </a>
                  <a
                    className='block py-4 text-center text-blue-800 leading-normal uppercase border-2 border-blue-800 hover:bg-blue-50 font-semibold'
                    href='#'
                  >
                    Sign Up
                  </a>
                </div>
                <p className='mt-6 mb-4 text-sm text-center text-blue-400'>
                  <span>
                    © 2021 All rights reserved © Wireframes Corporation 2021
                  </span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <div className='fixed bottom-0 inset-x-0 z-50'>
          <div className='p-8 bg-green-700'>
            <div className='container px-4 mx-auto'>
              <p className='text-sm leading-loose text-white'>
                Site-ul nostru utilizează cookie-uri pentru a asigura
                funcționarea optimă a platformei și pentru a analiza modul în
                care interacționați cu conținutul nostru.
              </p>
              <a
                className='flex items-center font-medium text-coolGray-500 hover:text-yellow-500 mb-4'
                href='#'
              >
                <span className='mr-2'>
                  Citiți politica noastră de confidențialitate
                </span>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.71 12.71C15.801 12.6149 15.8724 12.5028 15.92 12.38C16.02 12.1365 16.02 11.8635 15.92 11.62C15.8724 11.4972 15.801 11.3851 15.71 11.29L12.71 8.29C12.5217 8.1017 12.2663 7.99591 12 7.99591C11.7337 7.99591 11.4783 8.1017 11.29 8.29C11.1017 8.4783 10.9959 8.7337 10.9959 9C10.9959 9.2663 11.1017 9.5217 11.29 9.71L12.59 11L9 11C8.73479 11 8.48043 11.1054 8.2929 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.2929 12.7071C8.48043 12.8946 8.73479 13 9 13L12.59 13L11.29 14.29C11.1963 14.383 11.1219 14.4936 11.0711 14.6154C11.0203 14.7373 10.9942 14.868 10.9942 15C10.9942 15.132 11.0203 15.2627 11.0711 15.3846C11.1219 15.5064 11.1963 15.617 11.29 15.71C11.383 15.8037 11.4936 15.8781 11.6154 15.9289C11.7373 15.9797 11.868 16.0058 12 16.0058C12.132 16.0058 12.2627 15.9797 12.3846 15.9289C12.5064 15.8781 12.617 15.8037 12.71 15.71L15.71 12.71ZM22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.7612C13.9996 2.00433 11.9889 1.80629 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92894 4.92893C3.53041 6.32746 2.578 8.10929 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8268C3.51809 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C19.9997 18.1425 20.7363 17.0401 21.2388 15.8268C21.7413 14.6136 22 13.3132 22 12ZM4 12C4 10.4177 4.4692 8.87103 5.34825 7.55544C6.2273 6.23985 7.47673 5.21446 8.93854 4.60896C10.4003 4.00346 12.0089 3.84504 13.5607 4.15372C15.1126 4.4624 16.538 5.22433 17.6569 6.34315C18.7757 7.46197 19.5376 8.88743 19.8463 10.4393C20.155 11.9911 19.9965 13.5997 19.391 15.0615C18.7855 16.5233 17.7602 17.7727 16.4446 18.6518C15.129 19.5308 13.5823 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84286 16.1566 4 14.1217 4 12Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <a
                className='inline-block mr-2 text-sm leading-normal bg-yellow-500 hover:bg-yellow-400 uppercase font-bold border-2 border-transparent py-2 px-4'
                href='#'
              >
                Accept
              </a>
              <a
                className='inline-block text-sm leading-normal bg-transparent text-gray-50 hover:text-blue-100 uppercase font-bold border-2 border-white py-2 px-4'
                href='#'
              >
                Refuz
              </a>
            </div>
          </div>
        </div>
        <section className='py-20'>
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
                La Deep Clean, nu oferim doar servicii de curățenie, ci aducem
                în fiecare loc în care intervenim un nivel superior de igienă și
                prospețime. Cu o echipă dedicată de specialiști în curățenie și
                o pasiune inepuizabilă pentru detaliu, suntem mai mult decât
                angajați - suntem partenerii dvs. de încredere în menținerea
                unui mediu impecabil.
              </p>
              <p
                className='mb-6 text-lg font-medium text-green-700'
                contentEditable='false'
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
                oferi servicii de curățenie de neegalat. Alegeți Deep Clean și
                lăsați-ne să vă ajutăm să transformați fiecare spațiu într-un
                sanctuar de prospețime și claritate, în care fiecare detaliu
                este îngrijit cu grijă și precizie. Cu Deep Clean, confortul și
                igiena sunt la doar un apel distanță.
              </p>
            </div>
          </div>
        </section>
        <section className='relative overflow-x-hidden pb-24 lg:py-24'>
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
                    <h3 className='mb-2 text-lg font-semibold font-heading text-yellow-500 text-pink-500'>
                      Experiență și Profesionalism:
                    </h3>
                    <p className='text-base text-gray-500 leading-loose'>
                      Deep Clean se remarcă prin experiența sa vastă în
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
                      Deep Clean utilizează produse ecologice și echipamente de
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
                      Deep Clean oferă clienților comoditatea de a economisi
                      timp și efort, eliminând necesitatea curățării propriilor
                      spații. Alegând serviciile Deep Clean, clienții pot să se
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
        <section className='relative py-24'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-8 font-bold font-heading text-center text-black text-5xl p-2'>
              De ce ai nevoie de noi?
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
                    Deep Clean oferă servicii de curățenie pentru birouri care
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
                    Pentru locatarii de apartamente, Deep Clean oferă servicii
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
                    Deep Clean oferă servicii de curățenie pentru instituții
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
                    Indiferent de dimensiunea clădirii, Deep Clean se ocupă de
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
                    1686 Geraldine Lane New York
                  </p>
                  <p className='mb-6 font-medium text-green-700'>
                    New York 10013
                  </p>
                  <h3 className='uppercase font-semibold leading-loose tracking-widest text-gray-300'>
                    CONTACT
                  </h3>
                  <p className='text-green-700 font-medium'>
                    hello@wireframes.org
                  </p>
                  <p className='text-green-700 font-medium'>+7 843 672 431</p>
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
                      TRimite
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
                <a
                  className='inline-block mb-6 text-white text-lg font-semibold'
                  href='#'
                >
                  <img
                    className='h-16'
                    src='images/DeepClean-LogoWhite.png'
                    alt=''
                    width='auto'
                  />
                </a>
                <p className='hidden lg:block text-sm text-blue-300'>
                  Toate drepturile rezervate © Deep Clean 2023
                </p>
              </div>
              <div className='w-full lg:w-4/6 px-2'>
                <div className='flex flex-wrap justify-end items-center'>
                  <ul className='w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-16'>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <a
                        className='text-sm text-white hover:text-blue-100'
                        href='#'
                      >
                        Despre noi
                      </a>
                    </li>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <a
                        className='text-sm text-white hover:text-blue-100'
                        href='#'
                      >
                        De ce noi?
                      </a>
                    </li>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <a
                        className='text-sm text-white hover:text-blue-100'
                        href='#'
                      >
                        Servicii
                      </a>
                    </li>
                    <li className='mr-10 mb-2 md:mb-0'>
                      <a
                        className='text-sm text-white hover:text-blue-100'
                        href='#'
                      >
                        Servicii
                      </a>
                    </li>
                    <li className='mb-2 md:mb-0'>
                      <a
                        className='text-sm text-white hover:text-blue-100'
                        href='#'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <p className='mt-6 lg:hidden text-sm text-blue-300'>
                  All rights reserved © Wireframes Corporation 2021
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

