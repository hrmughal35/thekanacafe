export const siteConfig = {
  name: "THE KANA CAFE",
  tagline: "Luxury café lounge · Dubai",
  instagram: "https://www.instagram.com/thekanacafe/",
  instagramHandle: "@thekanacafe",
  email: "hello@thekanacafe.com",
  /** Replace with real numbers before launch */
  defaultCountryCode: "971",
};

export type Branch = {
  id: string;
  name: string;
  area: string;
  address: string;
  image: string;
  blurData?: string;
  mapsQuery: string;
  restaurantPhone: string;
  managerPhone: string;
  whatsapp: string;
  featured?: boolean;
};

export const branches: Branch[] = [
  {
    id: "sheikh-zayed",
    name: "Sheikh Zayed Branch",
    area: "Sheikh Zayed Road",
    address: "Sheikh Zayed Road, Trade Centre, Dubai",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80",
    mapsQuery: "Sheikh Zayed Road Dubai cafe",
    restaurantPhone: "+971400000001",
    managerPhone: "+971500000001",
    whatsapp: "971500000001",
  },
  {
    id: "uptown-mirdif",
    name: "Uptown Mirdif Branch",
    area: "Mirdif",
    address: "Uptown Mirdif, Dubai",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    mapsQuery: "Uptown Mirdif Dubai",
    restaurantPhone: "+971400000002",
    managerPhone: "+971500000002",
    whatsapp: "971500000002",
  },
  {
    id: "business-bay",
    name: "Business Bay Branch",
    area: "Business Bay",
    address: "Canal promenade, Business Bay, Dubai",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
    mapsQuery: "THE KANA CAFE BUSINESS BAY",
    restaurantPhone: "+971400000003",
    managerPhone: "+971500000003",
    whatsapp: "971500000003",
    featured: true,
  },
  {
    id: "motor-city",
    name: "Motor City Branch",
    area: "Motor City",
    address: "Motor City, Dubai",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80",
    mapsQuery: "Motor City Dubai",
    restaurantPhone: "+971400000004",
    managerPhone: "+971500000004",
    whatsapp: "971500000004",
  },
  {
    id: "silicon-oasis",
    name: "Silicon Oasis Branch",
    area: "Dubai Silicon Oasis",
    address: "Dubai Silicon Oasis, Dubai",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80",
    mapsQuery: "Dubai Silicon Oasis cafe",
    restaurantPhone: "+971400000005",
    managerPhone: "+971500000005",
    whatsapp: "971500000005",
  },
];

export const menuCategories = [
  {
    key: "coffee",
    title: "Coffee",
    subtitle: "Single origin · Turkish ritual · late-night espresso",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
  },
  {
    key: "tea",
    title: "Tea",
    subtitle: "Karak artistry · silver service · aromatic blends",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80",
  },
  {
    key: "juices",
    title: "Juices",
    subtitle: "Cold-pressed glow · fresh Dubai nights",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=900&q=80",
  },
  {
    key: "shisha",
    title: "Shisha",
    subtitle: "Premium blends · lounge seating · canal breeze",
    image:
      "https://images.unsplash.com/photo-1527169402691-f478f14109f9?w=900&q=80",
  },
  {
    key: "desserts",
    title: "Desserts",
    subtitle: "Velvet textures · midnight indulgence",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
  },
  {
    key: "main",
    title: "Main Course",
    subtitle: "Chef signatures · sharing plates",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    alt: "Gourmet plated dish at Kana Cafe",
    tag: "Food",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a701?w=900&q=80",
    alt: "Warm ambient lounge lighting",
    tag: "Ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1560067174-7d020f48f57e?w=900&q=80",
    alt: "Premium lounge seating",
    tag: "Seating",
  },
  {
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=900&q=80",
    alt: "Night city lights from the terrace",
    tag: "Night",
  },
  {
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=900&q=80",
    alt: "Shisha service with charcoal glow",
    tag: "Shisha",
  },
  {
    src: "https://images.unsplash.com/photo-1437418747212-8d9709428023?w=900&q=80",
    alt: "Signature cocktails and cold drinks",
    tag: "Drinks",
  },
  {
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80",
    alt: "Canal reflection at night",
    tag: "Canal",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80",
    alt: "Friends sharing a late dinner",
    tag: "Social",
  },
];

export const reviews = [
  {
    id: "1",
    name: "Amira H.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "Velvety atmosphere — our favorite karak tea in Dubai. Service felt truly five-star.",
  },
  {
    id: "2",
    name: "James L.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Late-night perfection. Canal views, great shisha, and the team remembered our names.",
  },
  {
    id: "3",
    name: "Sara K.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Business Bay branch is unreal — skyline energy meets lounge calm. Worth every visit.",
  },
  {
    id: "4",
    name: "Omar F.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "Turkish coffee ritual was stunning. Perfect spot for conversations after midnight.",
  },
];

export const businessBayMenu = [
  {
    name: "Turkish Coffee",
    note: "Copper cezve · cardamom mist",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
  },
  {
    name: "Avocado Smoothie",
    note: "Silky · honey drizzle · chia",
    image:
      "https://images.unsplash.com/photo-1553530666-d1e690dac7f2?w=800&q=80",
  },
  {
    name: "Hummus Plate",
    note: "WOOD-FIRE bread · zhoug oil",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
  },
  {
    name: "Karak Tea",
    note: "Slow-steamed · saffron velvet",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
  },
];
