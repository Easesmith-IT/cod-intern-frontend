import Image from "next/image";

export const Step = ({ className, title, icon, index,desc }) => {
  return (
    <div className="p-1 sm:w-[292px]">
      <div
        style={{ boxShadow: "0px 0px 15px 0px #00000026" }}
        className="flex justify-center items-center relative w-20 h-20 mx-auto rounded-full bg-white"
      >
        <Image src={icon} width={34} height={34} alt="step" />
        <div className="flex justify-center items-center absolute top-0 -right-2 text-white w-7 h-7 text-xs md:text-sm font-stolzl rounded-full bg-main">
          0{index}
        </div>
      </div>
      <h4 className="font-stolzl font-medium text-lg md:text-xl lg:text-2xl text-center mt-5">{title}</h4>
      <p className="text-para text-xs lg:text-sm font-stolzl text-center mt-2">
        {desc}
      </p>
    </div>
  );
};
