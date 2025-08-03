import { useEffect, useState } from "react";
import { Element } from "react-scroll";

import AnimatedNumber from "../../components/animatedNumber";

import InstagramFeed from "@/app/components/instagramFeed";
import { fetchInstagram } from "@/app/utils/fetchInstagram";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faPenClip, faSpinner, faUsersLine } from "@fortawesome/free-solid-svg-icons";

export const Portfolio = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(() => {
  const getFeed = async () => {
    try 
    {const data = await fetchInstagram();
    setFeed(data);}
      
    catch (err: any) 
    {setError(err.message)} 
    
    finally 
    {await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);}
  };

  getFeed();
}, []);


  return (
    <Element name="portfolio">
      <section>
      <div className="max-w-6xl mx-auto">
        <div className="mx-5">
          <div className="mb-5 flex gap-2 items-center">
            <h2 className="font-bold text-2xl text-blue">PORTFÓLIO</h2>
            <p className="text-sm">| GALERIA DO INSTAGRAM</p>
          </div>
          
          {loading && <p>Carregando feed...</p>}
          {!loading && error && <p className="text-red-500">{error}</p>}
          {!loading && !error && <InstagramFeed feed={feed}/>}
        </div>
      </div>

      <div className="relative w-full my-10">
        <img
        src="images/bg-banner.png"
        className="w-full h-[820px] lg:h-[630px] object-cover"/>
        
        <div className="absolute top-0 left-0 right-0 bottom-0 text-blue-white text-center text-2xl font-medium mx-5 gap-10 flex justify-center flex-col lg:flex-row lg:gap-20 lg:items-center">
          <div>
            <FontAwesomeIcon icon={faSpinner} />
            <div className="py-2">
              <AnimatedNumber value={14}/>
            </div>
            <p>ANOS DE <br/>EXPERIÊNCIA</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faPenClip} />
            <div className="py-2">
              <AnimatedNumber value={4177}/>
            </div>
            <p>ORDENS DE <br/>SERVIÇOS</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUsersLine} />
            <div className="py-2">
              <AnimatedNumber value={1380}/>
            </div>
            <p>CLIENTES <br/>FELIZES</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faMugHot}/>
            <div className="py-2">
              <AnimatedNumber value={5137}/>
            </div>
            <p>XÍCARAS DE <br/>CAFÉ</p>
          </div>
        </div>
      </div>
      </section>
    </Element>
  )
}