import Image from "next/image";

const WhyGardenUp = () => {
  return (
    <div className="w-full bg-green-50 flex flex-col gap-4 md:gap-8 p-8 md:p-12 mt-12">
      <h2 className="text-2xl md:text-4xl text-center">Why Garden Up</h2>

      <div className="flex justify-around gap-4">
        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <div className="relative w-10 h-10 md:w-16 md:h-16">
            <Image src={"/RecyclablePackaging.avif"} alt="" fill={true} />
          </div>
          <span className="text-xs md:text-base font-medium text-center ">
            Secure and Recyclable Packaging
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <div className="relative w-10 h-10 md:w-16 md:h-16">
            <Image src={"/FreeReplacement.avif"} alt="" fill={true} />
          </div>
          <span className="text-xs md:text-base font-medium text-center ">
            Free Replacements if Damaged
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-[15ch] md:w-[20ch]">
          <div className="relative w-10 h-10 md:w-16 md:h-16">
            <Image src={"/SelfWateringPots.avif"} alt="" fill={true} />
          </div>
          <span className="text-xs md:text-base font-medium text-center ">
            Self-Watering Pots with Every Plant
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyGardenUp;
