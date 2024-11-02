"use client";

import Image from "next/image";
import React, { useState } from "react";

function TopBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="relative h-fit w-full overflow-hidden bg-black">
      <Image src={"/images/top-bg.jpg"} alt="top banner" fill />
      <div className="relative z-[1] mx-auto flex max-w-[932px] items-center justify-between gap-1 px-4 py-[15px]">
        <div className="flex items-center gap-3">
          <p className="text-white font-medium text-xs leading-[1.125rem] lg:text-base">
            Use Uncheck AI to humanize AI essays and assignments to effortlessly
            bypass Turnitin!
          </p>
        </div>
        <a
          target="_blank"
          rel="noreferrer nofollow noopener"
          className="text-white bg-f-primary hover:bg-f-primary-hover whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold"
          href="https://uncheck.ai/"
        >
          Try Now
        </a>
      </div>
      <span
        onClick={() => setShowBanner(false)}
        className="i-com--x text-f-text-light absolute lg:end-2 end-0 lg:top-1/2 z-[1] size-6 lg:-translate-y-1/2 hover:cursor-pointer top-0 translate-y-0"
      ></span>
    </div>
  );
}

export default TopBanner;
