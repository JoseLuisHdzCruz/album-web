import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface Album {
  _id: string;
  title: string;
  description: string;
  categoria: string;
  date: string;
  imageUrl: string;
}

interface AlbumCardProps {
  album: Album;
  onClick: () => void;
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 mb-4"
      onClick={onClick}
    >
      <Image
        src={album.imageUrl || "/placeholder.svg"}
        alt={album.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{album.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{album.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(album.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}