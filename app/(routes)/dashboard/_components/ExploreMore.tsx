import { id } from 'date-fns/locale';
import Image from 'next/image';
import React from 'react'
export const ExploreMoreOptions = [
  {
    id: 1,
    title: "Quiz Pack",
    desc: "Practice what you learned with bite-sized code challenges.",
    icon: "/cloudy.png",
  },
  {
    id: 2,
    title: "Video Courses",
    desc: "Learn with structured video lessons taught step-by-step.",
    icon: "/calendar.png",
  },
  {
    id: 3,
    title: "Community Project",
    desc: "Build real-world apps by collaborating with the community.",
    icon: "/computer.png",
  },
  {
    id: 4,
    title: "Talk with AI",
    desc: "Chat with AI to get help, explanations, and debugging tips.",
    icon: "/tree.png",
  },
];

function ExploreMore() {
  return (
    <div>
    <h2 className="text-3xl mb-2 font-game" >Explore More</h2>
    <div className='grid grid-cols-2 gap-5'>
      {ExploreMoreOptions?.map((item,idx)=>(
     <div key={idx} className='flex gap-2 p-2 border rounded-xl' >
       <Image src={item.icon} alt='icon' width={80} height={80}/>
       <div>
        <h2 className='font-medium text-2xl font-game' >{item?.title}</h2>
        <p className='font-game text-gray-400'>{item?.desc}</p>
       </div>
     </div>
      
    ))}
    </div>
    </div>
  )
}

export default ExploreMore
