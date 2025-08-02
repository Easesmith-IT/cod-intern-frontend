import Image from "next/image";
import React from "react";

export const EvolutionOFCodIntern = () => {
  return (
    <section className="section-container py-24">
      <h2 className="text-2xl font-stolzl relative leading-9 lg:leading-14 md:text-4xl lg:text-[40px] text-para-3 font-medium capitalize text-center">
        <span className="text-main">The Evolution</span> of CodIntern Timeline
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      <p className="font-stolzl text-sm max-w-[840px] text-center mx-auto text-para mt-2 font-book">
        Lorem ipsum dolor sit amet consectetur. Dui amet maecenas duis
        vestibulum tincidunt sit leo. Orci nulla praesent vitae sed faucibus
        pretium vitae dapibus facilisis. Ut sem arcu suspendisse viverra amet.
      </p>

      <div className="mt-10">
        <Image
          src="/about-us/evolution.jpg"
          width={1350}
          height={390}
          alt="Evolution"
        />
      </div>
    </section>
  );
};
