import { QUICK_BROWSE } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const QuickBrowse = () => {
  return (
    <div className="mt-12 flex justify-between items-center w-full overflow-x-scroll gap-x-8 md:overflow-clip md:gap-0">
      {QUICK_BROWSE.map(({ title, href, img }) => (
        <div key={title} className="">
          <Link
            href={href}
            className="flex flex-col items-center gap-1 md:gap-2 w-max"
          >
            <div className="border-2 border-green-500 rounded-full">
              <Image
                src={img}
                alt={title}
                width={84}
                height={84}
                sizes="(max-width: 767px) 84px, 128px"
                className="object-cover rounded-full border-4 border-white md:w-32"
              />
            </div>
            <span className="text-xs md:text-lg">{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickBrowse;
