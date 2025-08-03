import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; 

interface InstagramFeedItem {
  id: string;
  media_url?: string;
  thumbnail_url?: string;
  media_type: string;
  permalink: string;
}
interface Props { feed: InstagramFeedItem[]; error?: string; }

const InstagramFeed = ({ feed }: Props) => {
  if (!feed || feed.length === 0) return null;

  return (
    <Swiper
    modules={[Autoplay, A11y]}
    spaceBetween={5}
    breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }}}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}>
        {feed.map((post) => (
          <SwiperSlide key={post.id}>
            {(post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") && (
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img
                src={post.media_url}
                alt="Imagem do feed"
                style={{ width: "400px", height: "400px", objectFit: "cover", objectPosition: 'center', borderRadius: "8px" }}/>
              </a>
            )}

            {(post.media_type === "VIDEO") && (
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img
                src={post.thumbnail_url}
                alt="Imagem do feed"
                style={{ width: "400px", height: "400px", objectFit: "cover", objectPosition: 'center', borderRadius: "8px" }}/>
              </a>
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default InstagramFeed;