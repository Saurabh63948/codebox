import Image from "next/image";
import saurabhImage from "../../public/saurabh.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src={saurabhImage}
        alt="bg image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute w-full flex flex-col items-center" >
        <h2 className="font-bold text-7xl font-game mt-24">
          Start Your
        </h2>
        <h2 className="font-bold text-7xl font-game text-yellow-400 drop-shadow-[2px_2px_0_#000]">
  Coding Adventure
</h2>
<h2 className="mt-5 font-game text-2xl">
  Beginner friendly coding courses and projects
</h2>
   <Link href={"/sign-in"} >
<Button className="font-game text-3xl p-6 mt-7 bg-amber-400" >GET STARTED</Button></Link>
      </div>
    </div>
  );
}

export default Hero;
