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
      { text: "Coffee", href: "/menu/coffee" },
      { text: "Tea", href: "/menu/tea" },
      { text: "Food", href: "/menu/food" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Careers", href: "/careers" },
      { text: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Locations", href: "/locations" },
      { text: "Gift Cards", href: "/gift-cards" },
      { text: "Help Center", href: "/help" }
    ]
  }
]; 