import { FaBars } from "react-icons/fa";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"; // Avatar de usuario

export function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      {/* Banner superior */}
      <div className="bg-indigo-700 py-2">
        <p className="text-center text-sm font-medium">
          🎉 ¡Bienvenido a Nuestro Álbum de Recuerdos D 💘 J! 📸
        </p>
      </div>

      {/* Contenido principal del header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Ícono del menú */}
        <button className="text-white hover:text-gray-300 focus:outline-none lg:hidden">
          <FaBars className="h-6 w-6" />
        </button>

        {/* Título */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-center flex-grow lg:flex-grow-0">
          Álbum de Recuerdos
        </h1>

        {/* Avatar y botón de cerrar sesión */}
        <div className="flex items-center gap-4">
          {/* Avatar de usuario */}
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <AvatarImage
              src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/472105927_3358144754330147_5118599029875200626_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DMW5v6juW7MQ7kNvgGTyUfE&_nc_oc=Adjt5eDhrt97EGJkfURukJburLrZ5FOiWpQLDOvWZirDW_c5GU6b0GpQ94tlPuq7ZCf_mu3e23xA_3t-VB4IaXif&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=AT4R6DRdh4sindRYzrBv6dg&oh=00_AYApSNS-2xuiKoQ8dr2_SvQDDXJzVh64C2S3l1iFdEu3yQ&oe=67AC3E8E" // Imagen del avatar
              alt="Usuario"
            />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>

          {/* Botón de cerrar sesión */}
          <Button variant="ghost" className="bg-gray-600 text-white hidden sm:flex">
            <LogOut className="w-4 h-4 mr-2" />
            <span className="hidden lg:inline">Cerrar Sesión</span>
          </Button>
        </div>
      </div>
    </header>
  );
}