'use client';

import Image from "next/image";
import Link from "next/link";

import "../globals.css";

import flag from "@/public/flag.png";
import coin from "@/public/coin.png";
import cow from "@/public/Cow2.png";
import first from "@/public/champion.png"
import second from "@/public/runner-up.png"
import third from "@/public/third.png"



import { useRef, useEffect, useState } from "react";

export default function Play() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cowRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0); // 存储得分
  const [showModal, setShowModal] = useState(false); // 控制模态框的显示
  const [showWithdraw, setShowWithdraw] = useState(false); 

  useEffect(() => {
    const container = containerRef.current!;
    const cow = cowRef.current!;

    if (!container || !cow) {
      console.error('Element not found!');
      return;
    }

    // 初始化位置
    setPosition(cow);

    const moveInterval = score > 30 ? 200 : score > 20 ? 1000 : 3000;

    // 每隔一段时间改变牛的位置
    const intervalId = setInterval(() => {
      setPosition(cow);
    }, moveInterval); // 每1秒移动一次

    // 设置牛的新位置
    function setPosition(element: HTMLDivElement) {
      const rect = container.getBoundingClientRect();
      const x = Math.random() * (rect.width - element.offsetWidth);
      const y = Math.random() * (rect.height - element.offsetHeight);
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    }

    // 添加点击事件监听器
    cow.addEventListener('click', function () {
      handleCowClick(); // 处理点击牛的事件
    });

    // 处理点击牛的事件
    function handleCowClick() {
      setScore(score + 5); // 增加得分
      setShowModal(true); // 显示模态框
    }

    if (score >0) {
      setShowWithdraw(true);
    }

    // 清理函数
    return () => {
      clearInterval(intervalId);
      cow.removeEventListener('click', handleCowClick);
    };

  }, [score, showModal]); // 注意依赖数组包含 score 和 showModal，以确保 effect 在得分或模态框变化时重新运行

  return (
    <>
      <div className="w-full h-full flex flex-row items-center justify-content px-10">
        <div ref={containerRef} id="game-container" className="relative overflow-hidden bg-[#D9D9D9] h-playbox w-2/3 mr-5 border-4 rounded-lg border-black bg-play">
          <div ref={cowRef} id="cow" className="absolute transition-all duration-150 ease-in-out">
            <Image
              className="dark:invert"
              src={cow}
              alt="cow"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>

        <div id="Leaderboard" className="flex flex-col bg-white h-playbox w-1/3 border-4 rounded-lg border-black">
          <div className="text-center flex flex-row mt-10 ml-5">
            <div className="">
              <Image
                className="dark:invert"
                src={flag}
                alt="flag"
                width={40}
                height={50}
                priority
              />
            </div>
            <p className="text-3xl mt-1 ml-4">Leaderboard</p>
          </div>

          <div className="text-center flex flex-row mt-10 ml-5">
              <Image
                className="dark:invert"
                src={first}
                alt="first"
                width={40}
                height={50}
                priority
              />
            <p className="text-3xl mt-2 ml-10">300</p>
          </div>
          <div className="text-center flex flex-row mt-10 ml-5">
              <Image
                className="dark:invert"
                src={second}
                alt="second"
                width={40}
                height={50}
                priority
              />
            <p className="text-3xl mt-2 ml-10">285</p>
          </div>

          <div className="text-center flex flex-row mt-10 ml-5">
              <Image
                className="dark:invert"
                src={third}
                alt="third"
                width={40}
                height={50}
                priority
              />
            <p className="text-3xl mt-2 ml-10">120</p>
          </div>



        </div>
      </div>

      <div className="mt-10 flex justify-end items-end mr-10">
      {showWithdraw?(<>
      <Link href="/withdraw">
      <div className="border-4 rounded-lg border-black flex flex-row bg-[#F4608A] pt-2 pl-2 w-36 mr-5">
          <div className="text-2xl text-center">
            WITHDRAW
          </div>
        </div>
      </Link>
        
      </>):(
        <></>
      )}
       <Link href="/home">
      <div className="border-4 rounded-lg border-black flex flex-row bg-[#F4608A] pt-2 pl-2 w-36 mr-5">
          <div className="text-2xl text-center ml-4">
            RETURN
          </div>
        </div>
      </Link>
        <div className="border-4 rounded-lg border-black flex flex-row bg-[#F4608A] pt-2 w-72">
          <div className="text-2xl text-center ml-3">
            YOUR SCORE
          </div>

          <div className="ml-6 mr-5">
            <Image
              className="dark:invert"
              src={coin}
              alt="coin"
              width={25}
              height={50}
              priority
            />
          </div>

          <div className="text-2xl text-center">
            {score}
          </div>
        </div>
      </div>
      

      {/* 模态框 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
          <div className="flex flex-col bg-white text-center w-80 h-64 border-black rounded-xl border-8 p-5">
            <p className="mt-10 text-2xl">You click the cow!</p>
          <p className="mt-2 text-3xl"> Score +5 !</p>
          <div className="border-4 text-center rounded-lg border-black bg-[#F4608A] pt-2 w-30 h-10" onClick={() => setShowModal(false)}>
              <p>Close</p>
          </div> 
          </div>
         
        </div>
      )}
    </>
  );
}