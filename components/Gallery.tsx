"use client"; // Indica que este es un Client Component

import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import Pagination from "./Pagination";
import Modal from "./Modal";

interface Album {
  _id: string;
  title: string;
  description: string;
  categoria: string;
  date: string;
  imageUrl: string;
}

export default function Gallery() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 9;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/albums");
        if (!response.ok) {
          throw new Error("Error al cargar los álbumes");
        }
        const data: Album[] = await response.json();
        setAlbums(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("No se pudieron cargar los álbumes. Inténtalo más tarde.");
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const downloadImage = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error("Error al descargar la imagen");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("No se pudo descargar la imagen. Inténtalo más tarde.");
    }
  };

  return (
    <>
      {/* Galería */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {currentAlbums.length > 0 ? (
          currentAlbums.map((album) => (
            <AlbumCard
              key={album._id}
              album={album}
              onClick={() => setSelectedAlbum(album)}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No hay álbumes disponibles.</p>
        )}
      </div>

      {/* Paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(albums.length / albumsPerPage)}
        paginate={paginate}
      />

      {/* Modal */}
      {selectedAlbum && (
        <Modal
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          onDownload={downloadImage}
        />
      )}
    </>
  );
}