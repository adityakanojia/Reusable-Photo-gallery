import type { PhotosInterface } from "../../types/PhotosInterFace";

interface InterfaceCardProps {
  photo: PhotosInterface;
  isFavourite: boolean;
  toggleFavourite: (id: string) => void;
}

const Card = ({ photo, isFavourite, toggleFavourite }: InterfaceCardProps) => {
  return (
    <div className="bg-[#111] rounded-lg overflow-hidden shadow-lg border shadow-xl border-purple-800 hover:scale-105 transition-transform duration-300">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-[220px] object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-white font-poppins text-sm">{photo.author}</p>

        <button
          onClick={() => toggleFavourite(photo.id)}
          className={`text-xl ${
            isFavourite ? "text-red-500" : "text-gray-400"
          } hover:text-red-500 transition`}
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default Card;
