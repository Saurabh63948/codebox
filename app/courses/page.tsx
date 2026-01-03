import Image from "next/image";
import CoursesList from "../(routes)/dashboard/_components/CoursesList";

function Page() {
  return (
    <div>
      {/* HERO / BANNER */}
      <div className="relative w-full h-[320px] overflow-hidden">
        {/* Image */}
        <Image
          src="/coursesBanner.jpg"
          alt="Courses Banner"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Text ON IMAGE */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32">
          <h2 className="font-game text-3xl md:text-5xl lg:text-6xl text-white">
            Explore All Courses
          </h2>
          <p className="font-game text-base md:text-xl text-gray-200 mt-3 max-w-2xl">
            Explore all courses and enroll to learn and increase your skills!
          </p>
        </div>
        
      </div>
      <div className="mt-8 md:px-16 lg:px-32">
          <h2 className="font-game text-4xl">
            All Courses
          </h2>
          <CoursesList/>
        </div>
    </div>
  );
}

export default Page;
