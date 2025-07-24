import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const SignupLogin = () => {
  return (
    <div
      style={{
        background: "linear-gradient(100.43deg, #E3E7FF 0%, #FFE7FC 100%)",
      }}
      className="flex flex-col items-center justify-center py-10 px-5 sm:px-5 sm:py-5 gap-4"
    >
      <Link href="/">
        <Image
          className="w-[160px] h-14 sm:w-[224px] sm:h-[65px]"
          src="/logo.svg"
          width={224}
          height={65}
          alt="Logo"
        />
      </Link>
      <Image
        className="mt-3"
        src="/sign-in/sign-in-img.svg"
        width={423}
        height={356}
        alt="Sign In"
      />
      <h1 className="max-w-[555px] text-center text-2xl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium capitalize">
        <span className="text-main">Online Community</span> For Front-end
        Developers
      </h1>
      <p className="font-stolzl text-para text-xs sm:text-sm lg:text-base font-book max-w-[472px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun.
      </p>
    </div>
  );
}
