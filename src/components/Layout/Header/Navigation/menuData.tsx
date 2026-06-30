import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "WMBD", href: "/enterprise", 
    submenu: [
      { label: "WMBD - Enterprise", href: "/enterprise" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "OPA", href: "/forms" },
  { label: "Resources", href: "/", 
    submenu: [
      // { label: "OPA Assessment", href: "/forms" },
      // { label: "Leaders Productivity Assessment", href: "/leadership" },
      { label: "Blog (Arjun's lens)", href: "/blog" },
      { label: "The Unwavering Leader", href: "/book" },
    ],
  },
  { label: "Contact", href: "/contact" },
];  