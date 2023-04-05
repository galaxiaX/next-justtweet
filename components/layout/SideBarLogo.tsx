import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SideBarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
          relative
          rounded-full
          h-14 sm:h-16
          w-auto
          flex
          gap-2
          items-center
          justify-center
          p-4
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          text-sky-500
        "
    >
      <BsTwitter size={28} color="#0EA5E9" />
      <p className="hidden md:block text-3xl font-bold text-sky-500">
        JustTweet
      </p>
    </div>
  );
};

export default SideBarLogo;
