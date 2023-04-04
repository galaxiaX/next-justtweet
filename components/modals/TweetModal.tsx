import useTweetModal from "@/hooks/useTweetModal";
import Modal from "../Modal";
import Form from "../Form";

const TweetModal = () => {
  const tweetModal = useTweetModal();

  const bodyContent = <Form placeholder="What's happening?" />;

  return (
    <Modal
      disabled={false}
      isOpen={tweetModal.isOpen}
      title="Tweet"
      actionLabel=""
      onClose={tweetModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default TweetModal;
