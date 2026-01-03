"use client";

import axios from "axios";
import { ChartNoAxesColumn } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Course={
  id:number,
  courseId:number,
  title:string,
  level:string,
  desc:string,
  bannerImage:string,
  tag:string
}


function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading,setLoading] =useState(false);
  const getAllCourses = async () => {
    setLoading(true)
    try {
      const res = await axios.get("/api/courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
      {courses.map((course, index) => (
        <div
          key={index}
          className="border-4 rounded-xl p-4 hover:scale-105 transition hover:bg-zinc-800 cursor-pointer "
        >
          {/* <h3 className="font-game text-xl">{course.title}</h3> */}
          <Image
            src={course.bannerImage}
            alt="course.title"
            width={400}
            height={400}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          <div className="p-4">
             <h2 className="font-game text-2xl">{course.title}</h2>
               <p className="text-gray-400 line-clamp-2 mt-2 text-xl font-game">{course.desc}</p>
                <h2 className="p-2 mt-3 rounded-2xl items-center inline-flex px-4 bg-zinc-800 font-game flex gap-2  " >   <ChartNoAxesColumn className="h-4 w-3" />{course.level}</h2>
              
          </div>
        
         
        </div>
      ))}
    </div>
  );
}

export default CoursesList;
