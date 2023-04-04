import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";

import SideBarLogo from "./SideBarLogo";
import SideBarItem from "./SideBarItem";
import SidebarTweetButton from "./SideBarTweetButton";
import useLoginModal from "@/hooks/useLoginModal";
import UserBar from "./UserBar";

const SideBar = () => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: HiUser,
      auth: true,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: MdEmail,
      auth: true,
    },
  ];

  return (
    <div
      className="
        min-w-[64px]
        h-screen
        fixed
        top-3
        left-0 lg:left-8 xl:left-16
      "
    >
      <div className="flex flex-col h-full relative items-center sm:items-start gap-2">
        <SideBarLogo />
        {items.map((item) => (
          <SideBarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            auth={item.auth}
            alert={item.alert}
          />
        ))}
        {currentUser ? (
          <SideBarItem
            onClick={() => signOut()}
            icon={BiLogOut}
            label="logout"
          />
        ) : null}
        <SidebarTweetButton />
        <UserBar userId={currentUser?.id} />
      </div>
    </div>
  );
};

export default SideBar;
