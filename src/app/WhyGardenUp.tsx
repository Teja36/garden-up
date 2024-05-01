import Image from "next/image";

const WhyGardenUp = () => {
  return (
    <div className="w-full bg-green-50 flex flex-col gap-4 md:gap-8 p-8 md:p-12 mt-12">
      <h2 className="text-2xl md:text-4xl text-center">Why Garden Up</h2>

      <div className="flex justify-around gap-4">
        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <Image
            src={"/RecyclablePackaging.avif"}
            alt=""
            width={40}
            height={40}
            sizes="(max-width: 767px) 40px, 64px"
            className="md:w-16"
          />

          <span className="text-xs md:text-base font-medium text-center ">
            Secure and Recyclable Packaging
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <Image
            src={"/FreeReplacement.avif"}
            alt=""
            width={40}
            height={40}
            sizes="(max-width: 767px) 40px, 64px"
            className="md:w-16"
          />

          <span className="text-xs md:text-base font-medium text-center ">
            Free Replacements if Damaged
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <Image
            src={"/SelfWateringPots.avif"}
            alt=""
            width={40}
            height={40}
            sizes="(max-width: 767px) 40px, 64px"
            className="md:w-16"
          />

          <span className="text-xs md:text-base font-medium text-center ">
            Self-Watering Pots with Every Plant
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyGardenUp;
