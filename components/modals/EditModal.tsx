import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../Input";
import ImageUpload from "../ImageUpload";

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [currentUser]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch("/api/edit", {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });
      mutateFetchedUser();

      toast.success("Profile updated successfully");

      editModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again");
    } finally {
      setIsLoading(false);
    }
  }, [
    bio,
    coverImage,
    editModal,
    mutateFetchedUser,
    name,
    profileImage,
    username,
  ]);

  const TextareaClassName = `
    w-full
    p-4
    text-lg
    bg-black 
    border-2
    border-neutral-800 
    rounded-md
    outline-none
    text-white
    focus:border-sky-500
    focus:border-2
    transition
    disabled:bg-neutral-900
    disabled:opacity-70
    disabled:cursor-not-allowed
    resize-none
  `;

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <ImageUpload
          value={profileImage}
          disabled={isLoading}
          onChange={(image) => setProfileImage(image)}
          label="Upload profile image"
        />
        <ImageUpload
          value={coverImage}
          disabled={isLoading}
          onChange={(image) => setCoverImage(image)}
          label="Upload cover image"
        />
      </div>
      <Input
        placeholder="Name"
        onChange={(ev) => setName(ev.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(ev) => setUsername(ev.target.value)}
        value={username}
        disabled={isLoading}
      />
      <textarea
        placeholder="Bio"
        onChange={(ev) => setBio(ev.target.value)}
        value={bio}
        disabled={isLoading}
        className={TextareaClassName}
      ></textarea>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      title="Edit Profile"
      actionLabel="Save"
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default EditModal;
