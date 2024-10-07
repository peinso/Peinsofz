import { Linkedin, FacebookIcon, Instagram } from "lucide-react";

import Link from "next/link";

const iconsLinks = [
  {
    href: "https://www.facebook.com/PEINSOFZ",
    icon: (
      <FacebookIcon className="w-6 h-6  hover:scale-125 hover:text-[#ffb82b] " />
    ),
  },
  {
    href: "https://eg.linkedin.com/company/petrological-integrated-solutions---peinso",
    icon: (
      <Linkedin className="w-6 h-6 hover:scale-125 hover:text-[#ffb82b] " />
    ),
  },
  {
    href: "https://www.instagram.com/pienso.us",
    icon: (
      <Instagram className="w-6 h-6 hover:scale-125 hover:text-[#ffb82b] " />
    ),
  },
];
export default function NavIcons() {
  return (
    <ul className="hidden gap-4 md:flex ">
      {iconsLinks.map((item, index) => (
        <li key={index}>
          <Link target="_blank" href={item.href}>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
