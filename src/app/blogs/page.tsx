import BlogCard from "@/components/BlogCard";
import Link from "next/link";

const content = [
  {
    title: "Gardening Basics",
    blogs: [
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
    ],
  },
  {
    title: "Garden Maintenance",
    blogs: [
      {
        title:
          "Seasonal Garden Maintenance Checklist: Spring, Summer, Fall, and Winter",
        img: "/blog.jpg",
        desc: "Create a comprehensive guide that outlines the key maintenance tasks gardeners should perform during each season. Cover topics like pruning, weeding, fertilizing, and protecting plants from extreme weather conditions.",
        date: "November 01, 2023",
      },
      {
        title: "Pest and Disease Management: Protecting Your Garden's Health",
        img: "/blog.jpg",
        desc: "Explore common pests and diseases that can affect your garden. Discuss prevention and treatment methods, including natural and chemical options, to help gardeners maintain healthy plants",
        date: "November 03, 2023",
      },
      {
        title:
          "Efficient Watering and Irrigation Systems for Garden Maintenance",
        img: "/blog.jpg",
        desc: "Dive into the world of garden irrigation. Explain different watering systems, such as drip irrigation and soaker hoses, and how to install them to conserve water and keep your garden well-hydrated.",
        date: "October 14, 2023",
      },
      {
        title: "Pruning and Deadheading: Maintaining the Beauty of Your Garden",
        img: "/blog.jpg",
        desc: "Focus on the importance of proper pruning and deadheading techniques. Provide guidance on when and how to prune various types of plants, trees, and shrubs to promote growth and aesthetics.",
        date: "October 12, 2023",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="container">
      {content.map(({ title, blogs }, index) => (
        <div
          key={index}
          className="flex flex-col mt-16 border-b border-gray-300 last:border-none"
        >
          <h1 className="font-semibold text-3xl">{title}</h1>
          <div className="grid grid-cols-2 gap-8 mt-4">
            {blogs.map((val, index) => (
              <BlogCard key={index} category={title} {...val} />
            ))}
          </div>
          <Link
            href={`/blogs/${title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[-]+/g, "-")
              .replace(/[^\w-]+/g, "")}`}
            className="text-sm uppercase self-center bg-green-600 text-white rounded-sm px-16 py-2 mt-16 mb-8"
          >
            View All
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
