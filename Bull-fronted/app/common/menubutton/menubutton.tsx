import Image from "next/image";
import Link from 'next/link'

import play from "@/public/play.png";
import home from "@/public/home.png";

export default function MenuButton() {
    return (
        <>
            <div className="flex w-200 flex-col mt-20 ml-40">
                <div className="mb-5 ml-10">
                    <Link href="/play">
                        <Image
                            className="dark:invert"
                            src={play}
                            alt="play button"
                            width={200}
                            priority
                        />
                    </Link>
                </div>
                <div className="mt-5 ml-10">
                    <Link href="/home">
                        <Image
                            className="dark:invert"
                            src={home}
                            alt="home button"
                            width={200}
                            priority
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}