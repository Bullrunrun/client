'use client';
import Image from "next/image";
import Link from "next/link";

import "../globals.css";
import balance from "@/public/YourBalance.png";
import claim from "@/public/claim.png";

import know from "@/public/i-know.png";

import { useState } from "react";

export default function Home() {

  const [isClaim, setIsClaim] = useState(true);

  function clickButton() {
    setIsClaim(!isClaim);
  }

  return (
    <>
      <div className="w-full h-full flex  flex-row justify-end">
        {isClaim ? (
          <div className="mt-36 mr-80">
            <div className="flex flex-col justify-content items-center h-96 w-96 bg-white border-black rounded-xl p-5 border-8 z-10">
              <p className="mt-20 text-xl">When your score reaches 20, the difficulty will double,
                and when the score hits 30, a very fast bull will appear!</p>

              <div className="mt-10" onClick={() => clickButton()}>
                <Image
                  className="dark:invert"
                  src={know}
                  alt="i-know"
                  width={100}
                  height={100}
                  priority

                />
              </div>
            </div>
          </div>

        ) : (<>

        </>)}
        <div className="flex w-200 flex-col items-end mt-56 mr-24 z-0 ">
          <div className="mr-5 mr-10">
            <Image
              className="dark:invert"
              src={balance}
              alt="yource balance"
              width={300}
              priority
            />
          </div>
          <div className="mt-10 mr-10">
            <Link href="coin">
              <Image
              className="dark:invert"
              src={claim}
              alt="claim game tokens"
              width={300}
              priority
            />
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
