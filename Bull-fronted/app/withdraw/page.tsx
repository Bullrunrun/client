'use client';
import Image from "next/image";
import "../globals.css";

import get from "@/public/button-get.png";
import withdraw from "@/public/Withdraw.png";
import smile from "@/public/smile.png";



import { useState } from "react";
import Link from "next/link";

export default function Withdraw() {

  const [isGet, setIsGet] = useState(false);

  function clickButton() {
    setIsGet(!isGet);
  }

  return (
    <>
      {/* {
        isGet ? (<>
          <div className="w-full h-full flex flex-col items-center justify-content">
            <div className="mt-20">
              <div className="text-center">
                <p className="text-5xl text-[#DF3130] ">Roping Challenge</p>

                <p className="text-2xl mt-5">Please start your challenge！</p>

              </div>
              <div className="mt-5 flex flex-col justify-content items-center h-72 w-96 bg-white border-black rounded-xl p-5 border-8 z-10">
                <div className="mt-10">
                  <Image
                    className="dark:invert"
                    src={smile}
                    alt="smile"
                    width={200}
                    height={50}
                    priority
                  />
                </div>

                <p className="mt-5 text-xl">Congratulations!</p>

                <div className="mt-5" onClick={() => clickButton()}>
                  <Image
                    className="dark:invert"
                    src={continuePng}
                    alt="continue"
                    width={100}
                    height={100}
                    priority

                  />
                </div>
              </div>
            </div>



          </div>
        </>) : (<> */}
      <div className="w-full h-full flex flex-col items-center justify-content">
        <div className="mt-20">
          <div className="text-center">
            <p className="text-5xl text-[#DF3130] ">Roping Challenge</p>
            <p className="text-2xl mt-5">We look forward to your next visit!</p>
          </div>
          <div className="mt-10 flex flex-col justify-content items-center h-72 w-96 bg-white border-black rounded-xl p-5 border-8 z-10">
            <p className="mt-10 text-xl">ENTER AMOUNT</p>

            <div className="w-18 h-10 bg-[#D9D9D9] p-3 rounded-xl mt-4">
              <input type="number" className="bg-transparent outline-none focus:outlin-none focus:shadow-outline placeholder-black" placeholder="10"></input>
            </div>

            <div className="mt-10">
              <Link href="/home">
              <Image
                className="dark:invert"
                src={withdraw}
                alt="withdraw button"
                width={100}
                height={100}
                priority
              />
              </Link>
              
            </div>
          </div>
        </div>



      </div>
      {/* </>)
      } */}


    </>

  );
}
