import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex justify-center items-center bg-main/10 py-2 border-b-2">
      <Link href="/">
        <Image
          className="w-[120px] h-14 sm:w-[200px]"
          src="/logo.svg"
          width={224}
          height={65}
          alt="Logo"
        />
      </Link>
    </div>
  );
}
