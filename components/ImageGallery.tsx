import Image, { StaticImageData } from "next/image";

interface ImageGalleryProps {
  images: StaticImageData[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-12 w-full h-[632px]">
      <div className="col-span-2 row-span-1">
        <Image
          src={images[0]}
          alt="Gallery item 1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="col-span-2 row-span-2">
        <Image
          src={images[1]}
          alt="Gallery item 2"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="col-span-2 row-span-1">
        <Image
          src={images[2]}
          alt="Gallery item 3"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="col-span-2 row-span-1">
        <Image
          src={images[3]}
          alt="Gallery item 4"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="col-span-2 row-span-1">
        <Image
          src={images[4]}
          alt="Gallery item 5"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
