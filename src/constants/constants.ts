const BASE_URL = "/collections";

export const PAGE_SIZE = 6;

export const MENU_ITEMS: { title: string; href: string, content: { title: string, href: string }[] }[] = [
  {
    title: "Plants",
    href: `${BASE_URL}/plants`,
    content: [
      {
        title: "Flowering Plants",
        href: `${BASE_URL}/flowering-plants`,
      },
      {
        title: "Fruit Plants",
        href: `${BASE_URL}/fruit-plants`,
      },
      {
        title: "Low Maintenance Plants",
        href: `${BASE_URL}/low-maintenance-plants`,
      },
      {
        title: "Air Purifying Plants",
        href: `${BASE_URL}/air-purifying-plants`,
      },
      {
        title: "Low Light Plants",
        href: `${BASE_URL}/low-light-plants`,
      },
      {
        title: "Cacti & Succulent Plants",
        href: `${BASE_URL}/cacti-&-succulent-plants`,
      },
    ],
  },
  {
    title: "Seeds",
    href: `${BASE_URL}/seeds`,
    content: [
      {
        title: "Flower Seeds",
        href: `${BASE_URL}/flower-seeds`,
      },
      {
        title: "Vegetable Seeds",
        href: `${BASE_URL}/vegetable-seeds`,
      },
      {
        title: "Microgreen Seeds",
        href: `${BASE_URL}/microgreen-seeds`,
      },
      {
        title: "Herb Seeds",
        href: `${BASE_URL}/herb-seeds`,
      },
      {
        title: "Flower Bulbs",
        href: `${BASE_URL}/flower-bulbs`,
      },
      {
        title: "Fruit Seeds",
        href: `${BASE_URL}/fruit-seeds`,
      },
      {
        title: "Tree & Grass Seeds",
        href: `${BASE_URL}/tree-&-grass-seeds`,
      },
    ],
  },
  {
    title: "Pots & Planters",
    href: `${BASE_URL}/pots-&-planters`,
    content: [
      {
        title: "Plastic Pots",
        href: "/"
      },
      {
        title: "Ceramic Pots",
        href: "/"
      },
      {
        title: "Metal Planters",
        href: "/"
      },
    ],
  },
  {
    title: "Plant Care",
    href: `${BASE_URL}/plant-care`,
    content: [
      {
        title: "Potting Mix & Fertilizers",
        href: `${BASE_URL}/potting-mix-&-fertilizers`,
      },
      {
        title: "Garden Tools",
        href: `${BASE_URL}/garden-tools`,
      },
      {
        title: "Watering Cans & Sprayers",
        href: `${BASE_URL}/watering-cans-&-sprayers`,
      },
    ],
  },
];

export const QUICK_BROWSE: { title: string, href: string, img: string }[] = [
  {
    title: "Bestsellers",
    href: `${BASE_URL}/plants?sort-by=bs`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714595005/assets/BestSelling_p2ii5q.jpg",
  },
  {
    title: "Easy to Care",
    href: `${BASE_URL}/plants?custom.filter=37`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714594539/assets/EasyToCare_sehpmh.jpg",
  },
  {
    title: "XL Plants",
    href: `${BASE_URL}/plants?custom.filter=36`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714594660/assets/XLPlants_rr5jod.jpg",
  },
  {
    title: "Ceramic Pots",
    href: `${BASE_URL}/ceramic-pots`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714594729/assets/CeramicPots_tollhv.jpg",
  },
  {
    title: "Vegitable Seeds",
    href: `${BASE_URL}/vegetable-seeds`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714594690/assets/VegitableSeeds_agv9s8.jpg",
  },
  {
    title: "Fertilizers",
    href: `${BASE_URL}/potting-mix-and-fertilizers`,
    img: "https://res.cloudinary.com/garden-up/image/upload/v1714595289/assets/Fertilizers_oj2lnc.jpg",
  },
]