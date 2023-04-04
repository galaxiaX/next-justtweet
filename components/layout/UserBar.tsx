import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";
import { useRouter } from "next/router";

interface UserBarProps {
  userId: string;
}

const UserBar: React.FC<UserBarProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  if (!fetchedUser) {
    return null;
  }

  const handleClick = () => {
    router.push(`/users/${userId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex
        gap-2
        md:px-4
        md:py-2
        absolute
        bottom-10
        rounded-full
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
      "
    >
      <Avatar userId={userId} />
      <div className="hidden md:block">
        <h4 className=" font-medium text-white">{fetchedUser?.name}</h4>
        <p className="text-neutral-500 text-sm">@{fetchedUser?.username}</p>
      </div>
    </div>
  );
};

export default UserBar;
