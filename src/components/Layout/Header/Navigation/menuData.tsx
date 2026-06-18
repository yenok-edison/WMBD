import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Growth Programs", href: "/enterprise", 
    submenu: [
      { label: "WMBD - Enterprise", href: "/enterprise" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/", 
    submenu: [
      { label: "OPA Assessment", href: "/forms" },
      { label: "Leaders Productivity Assessment", href: "/leadership" },
      { label: "Blog", href: "/blog" },
      { label: "The Unwavering Leader", href: "/book" },
    ],
  },
  { label: "Contact", href: "/contact" },
];  