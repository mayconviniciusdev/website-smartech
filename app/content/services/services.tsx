import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faDesktop, faHandshakeAngle, faLaptop, faMobile, faTablet } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";


export const Services = () => {
  return (
    <Element name="services">
      <section className="max-w-6xl mx-auto pt-12 pb-10">
        <div className="mx-5">
          <h2 className="font-bold text-2xl text-blue mb-5">O QUE NÓS FAZEMOS?</h2>

          <div className="lg:grid grid-cols-3 gap-7 mt-5">
            <div className="bg-blue/20 p-5 rounded-xl my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faBasketShopping}/> Vendas</h2>
              <p className="mt-2">Com uma vasta linha de produtos voltados a informática e segurança, estamos sempre dispostos a oferecer a nossos clientes, produtos de qualidade e com garantia.</p>
            </div>

            <div className="bg-blue/20 p-5 rounded-xl col-span-2 my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faLaptop} /> Manutenção em notebooks</h2>
              <p className="mt-2">Os notebooks são verdadeiros parceiros, já que seu fácil uso e portabilidade para qualquer lugar é de muito agrado a nós. Logo, não há novidade na importância em cuidar deles e essa atenção especial para continuarem a funcionar bem por muito tempo é uma das nossas especialidades.</p>
            </div>

            <div className="bg-blue/20 p-5 rounded-xl my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faMobile}/> Manutenção em celulares</h2>
              <p className="mt-2">Consertar o celular sozinho nem sempre é uma boa ideia. Tentando economizar, você pode acabar piorando ainda mais o problema do aparelho e é com esse pensamento que optamos em trabalhar com todas as marcas de celulares.</p>
            </div>

            <div className="bg-blue/20 p-5 rounded-xl my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faHandshakeAngle}/> Atendimento ao cliente</h2>
              <p className="mt-2">As pessoas buscam se conectar, pesquisar e conversar sobre seus interesses de compra e dúvidas. Por isso, a comunicação e atenção voltada a nossos clientes, juntamente com o interesse em resolver suas dores é um pilar fundamental para nós.</p>
            </div>

            <div className="bg-blue/20 p-5 rounded-xl my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faTablet}/> Manutenção em tablets</h2>
              <p className="mt-2">Também somos especialistas em manutenção de tablets, com uma equipe tecnicamente qualificada para atuar nessa área. Nosso objetivo é executar o melhor serviço, com segurança e garantia para a satisfação de nossos clientes.</p>
            </div>

            <div className="bg-blue/20 p-5 rounded-xl col-span-2 my-5 lg:my-0">
              <h2 className="font-bold text-lg text-blue"><FontAwesomeIcon icon={faDesktop}/> Manutenção em computadores</h2>
              <p className="mt-2">A manutenção de computadores geralmente não está no topo da nossa lista de prioridades e acaba que durante a correria do dia a dia, é fácil adiar a busca por uma manutenção de qualidade. Só que, mais cedo ou mais tarde, o peso dessa negligência acaba chegando e muitas vezes de forma imprevista.</p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}