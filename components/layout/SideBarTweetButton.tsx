import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import useTweetModal from "@/hooks/useTweetModal";

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();
  const tweetModal = useTweetModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
      return;
    }

    return tweetModal.onOpen();
  }, [currentUser, tweetModal, loginModal]);

  return (
    <div onClick={onClick} className="w-5/6 mx-auto">
      <div
        className="
          mt-6
          md:hidden
          rounded-full
          mx-auto
          h-12
          w-12
          p-2
          flex
          items-center
          justify-center
          bg-sky-500
          hover:bg-opacity-80
          transition
          cursor-pointer
        "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
          mt-6
          hidden
          md:block
          px-4
          py-2
          rounded-full
          bg-sky-500
          hover:bg-opacity-90
          cursor-pointer
        "
      >
        <p
          className="
            hidden
            md:block
            text-center
            font-semibold
            text-white
            text-[20px]
          "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
