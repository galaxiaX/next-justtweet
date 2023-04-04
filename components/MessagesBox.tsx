import Button from "./Button";
import { toast } from "react-hot-toast";

const MessagesBox = () => {
  return (
    <div className="flex flex-col justify-center pl-6 h-2/3 w-3/4">
      <div className="mb-4 flex flex-col gap-1">
        <h2 className="text-white text-3xl font-semibold">
          Welcome to your inbox!
        </h2>
        <p className="text-neutral-500 text-sm">
          Drop a line, share Tweets and more with private conversation between
          you and others on Twitter.
        </p>
      </div>
      <Button
        label={"Write a message"}
        onClick={() => {
          toast.error("This feature is not currently available.");
        }}
      ></Button>
    </div>
  );
};

export default MessagesBox;
