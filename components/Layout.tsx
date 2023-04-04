import React from "react";

import FollowBar from "@/components/layout/FollowBar";
import SideBar from "@/components/layout/SideBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full">
      <div className="container h-full mx-auto">
        <div className="flex justify-end lg:justify-center">
          <SideBar />
          <div
            className="
              min-h-screen
              w-full md:max-w-xl
              ml-[64px] md:ml-0
              border-x-[1px]
              border-neutral-800
            "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
