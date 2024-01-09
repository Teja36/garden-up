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
            <div className="relative border-2 border-green-500 rounded-full w-[84px] h-[84px] md:w-32 md:h-32">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-full border-4 border-white"
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
