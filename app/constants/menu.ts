export interface MenuItem {
  imageUrl: string;
  title: string;
  description: string;
  altText: string;
}

export const POPULAR_DRINKS: MenuItem[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop",
    title: "Mint Mojito Iced Coffee",
    description: "Our signature drink with fresh mint and cream",
    altText: "Mint Mojito Iced Coffee"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    title: "Philharmonic",
    description: "Rich, smooth blend with notes of chocolate",
    altText: "Philharmonic Coffee"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    title: "Jacob's Wonderbar",
    description: "Bold and complex with a hint of sweetness",
    altText: "Jacob's Wonderbar Coffee"
  }
]; 