import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Element } from "react-scroll";

export const Contact = () => {
  const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" height="40"><path fill="#052B47" d="${faLocationDot.icon[4]}"></path></svg>`),
    iconSize: [30, 30],
  });
  
  return (
    <Element name="contact">
      <section className="max-w-6xl mx-auto py-10">
        <div className="mx-5">
          <h2 className="font-bold text-2xl text-blue">ENTRE EM CONTATO</h2>
          <p className="text-blue/50">Envie-nos um e-mail com todas as perguntas ou dúvidas ou use nossos dados de contato.</p>
        
          <div className="my-8">
            <form action="">
              <div className="lg:grid lg:grid-cols-2 gap-10">
                <div className="mb-5 lg:mb-0">
                  <input type="text"
                  placeholder="Como você se chama?"
                  className="font-bold w-full py-4 pl-4 rounded-lg bg-blue/25 border placeholder-blue focus:outline-none focus:border-blue/25"/>
                </div>

                <div>
                  <input 
                  type="text"
                  placeholder="Seu telefone?"
                  className="font-bold w-full py-4 pl-4 rounded-lg bg-blue/25 border placeholder-blue focus:outline-none focus:border-blue/25"/>
                </div>
              </div>

              <div className="my-5">
                <input
                type="email"
                placeholder="Digite seu e-mail..."
                className="font-bold w-full py-4 pl-4 rounded-lg bg-blue/25 border placeholder-blue focus:outline-none focus:border-blue/25"/>
              </div>

              <textarea 
              placeholder="Qual sua dúvida ou problema?"
              className="font-bold w-full h-36 py-4 pl-4 rounded-lg bg-blue/25 border placeholder-blue focus:outline-none focus:border-blue/25"/>

              <button className="mt-5 p-4 w-full rounded-lg font-bold text-blue bg-blue/25">ENVIAR CONTATO</button>
            </form>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:items-end flex flex-col-reverse">
            <div className="lg:text-end lg:mr-10 lg:mt-0 lg:block md:flex justify-around mt-10 gap-10 ">
              <div className="text-blue/50 lg:mb-8">
                <h2 className="pb-2 font-semibold">ENDEREÇO:</h2>
                <p>Av. XV DE NOVEMBRO, 1023 - CENTRO | TAPERA</p>
                <p>Rio Grande do Sul - 99490-000</p>
              </div>

              <div className="text-blue/50 lg:mb-8">
                <h2 className="pb-2 font-semibold">TELEFONE:</h2>
                <p>(54) 9 9160-5056</p>
              </div>
            </div>

            <div>
              <MapContainer
              zoom={16}
              center={[-28.624554, -52.870624]}
              style={{ height: '500px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <Marker position={[-28.624554, -52.870624]} icon={customIcon}>
                  <Popup>Oi, tudo bem? Estamos te esperando!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </Element>
    
  )
}