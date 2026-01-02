import React from "react";
import WellcomeBanner from "./_components/WellcomeBanner";
import EnrolledCources from "./_components/EnrolledCources";
import ExploreMore from "./_components/ExploreMore";
import InviteFriend from "./_components/InviteFriend";

function Page() {
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:px-48 w-full">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
       <WellcomeBanner/>
       <EnrolledCources/>
       <ExploreMore/>
       <InviteFriend/>
        </div>
        <div>
          Right
        </div>
      </div>
    </div>
  );
}

export default Page;
