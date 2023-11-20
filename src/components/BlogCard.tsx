import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  category?: string;
  img: string;
  desc: string;
  date: string;
};

const BlogCard = ({ title, category, img, desc, date }: BlogCardProps) => {
  const currentDate = new Date(date);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long", // Full month name
    day: "numeric", // Day of the month
    year: "numeric", // Four-digit year
  });

  return (
    <Link
      href={`/blogs/${category
        ?.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[-]+/g, "-")
        .replace(/[^\w-]+/g, "")}/${title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[-]+/g, "-")
        .replace(/[^\w-]+/g, "")}`}
    >
      <div className="flex flex-col gap-2 items-start group cursor-pointer">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill={true}
            className="object-cover group-hover:scale-[1.02] ease-linear duration-300"
          />
        </div>
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-xs text-gray-400">{formattedDate}</p>
        <p className="text-sm text-gray-700">{desc}</p>
        <div className="flex items-center gap-2 ">
          <span className="w-4 h-[1px] bg-black group-hover:w-10 transition ease-in-out duration-200"></span>
          <button className="text-sm font-medium">Read more</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
