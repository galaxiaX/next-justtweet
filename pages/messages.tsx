import MessagesBox from "@/components/MessagesBox";
import Header from "@/components/layout/Header";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Messages = () => {
  return (
    <>
      <Header label="Messages" showBackArrow />
      <MessagesBox />
    </>
  );
};

export default Messages;
