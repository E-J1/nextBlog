"use client";

import Image from "next/image";
import logo from "assets/logo.png";
export default function SideMenu({ children }: { children: React.ReactNode }) {
  return (
    <section className="md:flex p-5">
      <div className="image-wrapper  md:max-w-xs md:p-5">
        <Image
          src={logo}
          alt=""
          className="object-cover object-center w-40 md:w-full"
        />
      </div>
      <main className="md:justify-center md:w-full ">{children}</main>

      <style jsx>{`
        .image-wrapper img {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
