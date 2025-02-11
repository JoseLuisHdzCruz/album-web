import Link from "next/link";
import { FaImage, FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

const sidebarLinks = [
  { href: "/", label: "Galería", icon: <FaImage /> },
  { href: "/profile", label: "Perfil", icon: <FaUser /> },
];

const categories = [
  { href: "/navidad", label: "Navidad", icon: <FaCalendarAlt /> },
  { href: "/vacaciones", label: "Vacaciones", icon: <MdOutlineHolidayVillage /> },
  { href: "/familia", label: "Familia", icon: <IoPeopleOutline /> },
  { href: "/amigos", label: "Amigos", icon: <IoPeopleOutline /> },
  { href: "/pareja", label: "Pareja", icon: <IoPeopleOutline /> },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 border-r hidden md:block">
      <h2 className="text-center text-lg font-semibold text-gray-700">Menú</h2>
      <nav>
        <ul className="space-y-2 mt-4">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 p-2 rounded-md">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-gray-600 font-medium">Categorías</h3>
        <ul className="space-y-2 mt-2">
          {categories.map((category) => (
            <li key={category.href}>
              <Link href={category.href} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 p-2 rounded-md">
                {category.icon}
                <span>{category.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}