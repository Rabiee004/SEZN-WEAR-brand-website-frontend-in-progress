import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css"; // main only

export default function ImageSlider({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className="h-80 rounded-lg mb-4 overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, ]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-80 object-cover cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={images.map((src) => ({ src }))}
          plugins={[Zoom]} // zoom works even without the CSS import
        />
      )}
    </div>
  );
}
