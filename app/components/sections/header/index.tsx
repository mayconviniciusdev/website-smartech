import { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuItem { label: string, to: string; }
const menuItems: MenuItem[] = [
  { label: 'SOBRE NÓS', to: 'about' },
  { label: 'SERVIÇOS', to: 'services' },
  { label: 'PORTFÓLIO', to: 'portfolio' },
  { label: 'CONTATO', to: 'contact' },
];

export const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {setMenuOpen(!menuOpen);};

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent;
    const safari = /^((?!chrome|android).)*safari/i.test(ua);
    setIsSafari(safari);
  }, []);

  return (
    <Element name="initial">
      <div className="my-10 mx-5">
        {/* desktop menu */}
        <div className="flex justify-end md:justify-center">  
          <div className="bg-blue/25 mr-10 p-2 rounded-2xl hidden lg:flex justify-center">
            <img src="images/logo-smartech.png" alt="Logo Smartech" style={{ maxWidth: '75%' }}/>
          </div>

          <nav className="hidden lg:flex items-center font-medium text-lg text-blue bg-blue/25 rounded-2xl p-2">
            <ul className="flex space-x-5 mx-3"> 
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                  to={item.to}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:text-black-grey">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul> 
          </nav>
        </div>
        
        {/* mobile menu */}
        <div className="lg:hidden flex flex-col items-end">  
          <div className="lg:hidden flex justify-between items-center">
            <img src="images/logo-smartech-letter.png" alt="Logo Smartech" style={{ maxWidth: '75%'}}/>
            
            <FontAwesomeIcon
            onClick={toggleMenu}
            size="2x"
            icon={menuOpen ? faTimes : faBars}
            className="text-blue"/>
          </div>

          {menuOpen && (
            <nav className="lg:hidden cursor-pointer font-medium text-lg text-blue mt-5">
              <ul> 
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="flex flex-col items-end cursor-pointer hover:text-black-grey my-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul> 
            </nav>
          )}
        </div>    
      </div>

      {/* banner */}
      <div className="relative h-[700px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <p className="text-3xl font-bold mb-2">SOMOS<br/>ESPECIALIZADOS EM</p>
          <p className="text-2xl font-medium">manutenção de computadores,<br/> notebooks e celulares.</p>

          <Link 
          smooth={true}
          duration={500}
          to="contact"
          offset={-50}
          className="mt-8 px-6 py-3 bg-blue rounded-xl cursor-pointer font-medium hover:text-blue-white">
            FAÇA UM ORÇAMENTO
          </Link>
        </div>

        {isSafari ? 
        (<img
        src="images/bg-smartech.mp4"
        alt="Video poster"
        className="w-[100%] h-full object-cover z-0"/>) 
        : (<video
          src="images/bg-smartech.mp4"
          className="w-[100%] h-full object-cover z-0"
          muted
          autoPlay
          playsInline
          loop/>)}
      </div>
    </Element>
  )
}