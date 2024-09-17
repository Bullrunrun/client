import Image from "next/image";
import Header from "@/app/common/header/header";
import MenuButton from "./common/menubutton/menubutton";
export default function Main() {
  return (
    <>
      <div>
        <Header />
        <div className="mt-20 ml-40">
                <p className="text-5xl text-[#DF3130] ">Roping Challenge</p>

                <p className="text-2xl mt-5">Catch the cow to earn tokens!</p>
              </div>
        <MenuButton />
      </div>



    </>

  );
}
