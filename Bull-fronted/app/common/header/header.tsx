'use client';

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Connect from "@/public/ConnectWallet.png";
import Music from "@/public/Music.png";
import Music1 from "@/public/Music1.png";
import { useConnection } from "arweave-wallet-kit";
import {ConnectButton} from "arweave-wallet-kit";


export default function Header() {
    const { connected, connect, disconnect } = useConnection();
    const [isClick, setIsClick] = useState(false);

    function clickButton() {
        console.log("Before toggle:", isClick);
        setIsClick(!isClick);
        console.log("After toggle:", isClick);
    }

    async function ConnectWallet() {
        try {
            await connect();
            console.log("Connected to wallet.");
        } catch (error) {
            console.error("Failed to connect to wallet:", error);
        }
    }

    return (
            <div className="flex justify-between h-24 w-full">
             
                <div className="mt-5 ml-16 h-18">
                    <Image
                        className="dark:invert"
                        src={logo}
                        alt="logo"
                        width={300}
                        height={100}
                        priority
                    />
                </div>
                <div className="mt-5 mr-16  flex flex-row h-18">
                    <div className="mr-5 mt-1" onClick={() => clickButton()}>
                        <Image
                            className="dark:invert"
                            src={isClick ? Music1 : Music}
                            alt="ConnectButton"
                            width={60}
                            priority
                        />
                    </div>
                    <div className="mt-2" onClick={() => ConnectWallet()}>
                        <Image
                            className="dark:invert"
                            src={Connect}
                            alt="ConnectButton"
                            width={200}
                            priority
                        />
                    </div>
                </div>   
        
                
            </div>
    );
}