"use client"; // Indica que este es un Client Component

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";

export default function UploadForm() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(""); // Estado para el título
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Familia"); // Estado para la categoría
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !title.trim()) {
      setError("Por favor, selecciona una imagen y proporciona un título.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("image", image); // Agrega la imagen al FormData
      formData.append("title", title); // Agrega el título
      formData.append("description", description); // Agrega la descripción
      formData.append("date", date); // Agrega la fecha
      formData.append("categoria", category); // Agrega la categoría

      const response = await fetch(
        `https://formal-lyndsey-universidad-uthh-255ac07b.koyeb.app/api/albums`, // Reemplaza con el ID del álbum que deseas actualizar
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el álbum");
      }

      setSuccess(true);
      setError(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("No se pudo actualizar el álbum. Inténtalo más tarde.");
      console.log('Error: ',err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        {/* Campo de Título */}
        <div className="mb-4">
          <Label htmlFor="titulo">Título</Label>
          <Input
            id="titulo"
            placeholder="Ingresa el título de la foto..."
            className="mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Campo de Imagen */}
        <div className="mb-4">
          <Label htmlFor="foto">Seleccionar Foto</Label>
          <div className="mt-1 flex items-center">
            <Input
              id="foto"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
            <Label
              htmlFor="foto"
              className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Upload className="w-4 h-4 mr-2 inline-block" />
              Subir Imagen
            </Label>
          </div>
        </div>

        {/* Campo de Descripción */}
        <div className="mb-4">
          <Label htmlFor="descripcion">Descripción</Label>
          <Input
            id="descripcion"
            placeholder="Describe este recuerdo..."
            className="mt-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Campo de Fecha */}
        <div className="mb-4">
          <Label htmlFor="fecha">Fecha</Label>
          <Input
            id="fecha"
            type="date"
            className="mt-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Campo de Categoría */}
        <div className="mb-4">
          <Label htmlFor="categoria">Categoría</Label>
          <select
            id="categoria"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Familia">Familia</option>
            <option value="Pareja">Pareja</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Amigos">Amigos</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Celebración">Celebración</option>
          </select>
        </div>

        {/* Botón de Envío */}
        <Button
          type="submit"
          className="w-full mt-6"
          disabled={loading}
        >
          {loading ? (
            "Cargando..."
          ) : (
            <>
              <ImageIcon className="w-4 h-4 mr-2" />
              Guardar Recuerdo
            </>
          )}
        </Button>

        {/* Mensajes de Estado */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">Álbum actualizado exitosamente.</p>}
      </form>
    </div>
  );
}