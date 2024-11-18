import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto mb-10">
      <div className="border-blue border mx-20"></div>

      <div className="mx-5 text-center">
        <div className="text-blue text-3xl mt-10 mb-5">
          <a href="https://www.facebook.com/smartechrs" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="https://wa.me/555491605056" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="mx-3"/></a>
          <a href="https://www.instagram.com/smartechrs" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>

        <div className="flex justify-center items-center gap-4 mb-2">
          <img src="images/logo-smartech-letter.png" alt="Logo Smartech" className="w-44"/>
          <p className="text-xl text-blue/50">© 2024</p>
        </div>

        <div className="text-blue/50 font-medium">
          <p className="mb-1">DESENVOLVIDO POR:
            <span className="text-blue-cyan">
              <a target="_blank" href="https://www.mayconviniciusdev.com/"> MAYCON VINICIUS</a>
            </span>
          </p>
          
          <a href="">VOLTAR AO TOPO</a>
        </div>
      </div>
    </footer>
  )
}