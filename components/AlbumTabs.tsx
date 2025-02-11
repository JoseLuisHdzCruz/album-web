import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Gallery from "./Gallery";
import UploadForm from "./UploadForm";

export default function AlbumTabs() {
  return (
    <Tabs defaultValue="galeria" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="galeria">Galería</TabsTrigger>
        <TabsTrigger value="subir">Subir Foto</TabsTrigger>
      </TabsList>
      <TabsContent value="galeria">
        <Gallery />
      </TabsContent>
      <TabsContent value="subir">
        <UploadForm />
      </TabsContent>
    </Tabs>
  );
}