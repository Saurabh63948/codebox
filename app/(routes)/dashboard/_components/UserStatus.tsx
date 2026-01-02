"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function UserStatus() {
  const { user } = useUser();

  return (
    <div className="p-7 border-2 border-gray-800 rounded-2xl max-w-full overflow-hidden">
      {/* USER INFO */}
      <div className="flex gap-3 items-center mb-6">
        <Image src="/hike.png" alt="user" width={100} height={100} />

        {/* IMPORTANT FIX HERE */}
        <h2 className="font-game text-2xl break-all min-w-0">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex gap-3 items-center">
          <Image src="/star.png" alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-500">
              Total Rewards
            </h2>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image src="/star-medal.png" alt="badge" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">3</h2>
            <h2 className="font-game text-xl text-gray-500">Badge</h2>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image src="/fire.png" alt="fire" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">7</h2>
            <h2 className="font-game text-xl text-gray-500">
              Total Rewards
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
