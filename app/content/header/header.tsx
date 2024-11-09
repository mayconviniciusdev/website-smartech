import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element, Link } from "react-scroll";

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

  return (
    <Element name="initial">
      <section className="py-10 mx-5">
        {/* desktop menu */}
        <div className="flex justify-end md:justify-center">  
          <div className="bg-blue/25 mr-10 p-2 rounded-2xl hidden lg:flex justify-center">
            <img src="/images/logo-smartech.png" alt="Logo Smartech" style={{ maxWidth: '75%' }}/>
          </div>

          <nav className="hidden lg:flex items-center font-medium text-lg text-blue bg-blue/25 rounded-2xl p-2">
            <ul className="flex space-x-5 mx-3"> 
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                  to={item.to}
                  smooth={true}
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
            <img src="/images/logo-smartech-letter.png" alt="Logo Smartech" style={{ maxWidth: '75%'}}/>
            
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
                    className="flex flex-col items-end cursor-pointer hover:text-black-grey my-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul> 
            </nav>
          )}
        </div>
      </section>
    </Element>
  )
}