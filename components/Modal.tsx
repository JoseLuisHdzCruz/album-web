import React from "react";
import Image from "next/image";
import { Calendar, Download } from "lucide-react";

interface Album {
  _id: string;
  title: string;
  description: string;
  categoria: string;
  date: string;
  imageUrl: string;
}

interface ModalProps {
  album: Album;
  onClose: () => void;
  onDownload: (imageUrl: string, fileName: string) => void;
}

export default function Modal({ album, onClose, onDownload }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl p-6 overflow-auto">
        {/* Botón de Cierre */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Contenido del Modal */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen Expandida */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={album.imageUrl || "/placeholder.svg"}
              alt={album.title}
              width={600}
              height={400}
              className="max-w-full max-h-[400px] object-contain rounded-lg shadow-lg"
            />
          </div>
          {/* Detalles del Álbum */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-indigo-600">{album.title}</h2>
            <p className="text-gray-600">{album.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(album.date).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700">
              <strong>Categoría:</strong> {album.categoria}
            </p>
            {/* Botón de Descarga */}
            <button
              onClick={() =>
                onDownload(
                  album.imageUrl,
                  `${album.title.replace(/\s+/g, "_")}.jpg`
                )
              }
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Imagen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}