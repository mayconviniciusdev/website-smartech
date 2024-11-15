import InstagramFeedSite from "./instagramFeed";

export const Portfolio = () => {

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="mx-5">
          <div className="mb-5 flex gap-2 items-center">
            <h2 className="font-bold text-2xl text-blue">PORTFÓLIO</h2>
            <p className="text-sm">| GALERIA DO INSTAGRAM</p>
          </div>
          
          <InstagramFeedSite/>
        </div>
      </div>
    </section>
  )
}