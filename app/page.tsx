import AlbumTabs from "@/components/AlbumTabs";
import { FaImage } from "react-icons/fa";


export default function AlbumFotografico() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <FaImage className="mr-2" />
        Álbum de Recuerdos
      </h1>
      <AlbumTabs />
    </div>
  );
}