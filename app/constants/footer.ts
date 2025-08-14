export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Menu",
    links: [
      { text: "Coffee", href: "/not-found" },
      { text: "Tea", href: "/not-found" },
      { text: "Food", href: "/not-found" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/not-found" },
      { text: "Careers", href: "/not-found" },
      { text: "Contact", href: "/not-found" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Locations", href: "/not-found" },
      { text: "Gift Cards", href: "/not-found" },
      { text: "Help Center", href: "/not-found" }
    ]
  }
]; 