import { headers } from "next/headers";
import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    title: "Getting Started with Gardening: A Beginner's Guide",
    img: "/blog.jpg",
    desc: `This blog post can serve as an introduction to gardening for beginners. Cover topics like selecting the right location, understanding soil types, choosing suitable plants, and essential tools and equipment for a successful garden.`,
    date: "November 06, 2023",
  },
  {
    title: "Watering Tips for Healthy Plants: Gardening Basics",
    img: "/blog.jpg",
    desc: "Discuss the importance of proper watering techniques. Explain when and how to water different types of plants, the benefits of mulching, and how to prevent overwatering or underwatering.",
    date: "November 03, 2023",
  },
  {
    title: "Sunlight and Your Garden: A Gardener's Guide to Light",
    img: "/blog.jpg",
    desc: "Explore the significance of sunlight in plant growth. Discuss how to identify your garden's sunlight conditions, choose plants that match those conditions, and provide tips for optimizing light exposure.",
    date: "October 29, 2023",
  },
  {
    title: "Soil 101: Understanding Your Garden's Foundation",
    img: "/blog.jpg",
    desc: "Focus on the fundamentals of soil preparation. Explain the importance of soil quality, how to test your soil, and techniques for improving soil fertility through composting and amendments.",
    date: "October 25, 2023",
  },
];

const page = () => {
  const heads = headers();
  const pathname = heads.get("next-url");
  const category = pathname
    ?.split("/")
    .at(2)
    ?.split("-")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

  return (
    <div className="container">
      <h1 className="font-semibold text-3xl">{category}</h1>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {blogs.map((val, index) => (
          <BlogCard key={index} category={category} {...val} />
        ))}
      </div>
    </div>
  );
};

export default page;
