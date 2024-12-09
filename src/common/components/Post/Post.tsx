import { FC, useState } from "react";
import stl from "./Post.module.css";
import { DeletePostModal } from "common/components/DeletePostModal/DeletePostModal.tsx";

export const Post: FC = () => {
  const [posts, _setPosts] = useState([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ]);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const mappedPosts = posts.map((post) => {
    return (
      <div key={post.id} className={stl.postContainer}>
        <h3>{post.title}</h3>
        <button onClick={openModalHandler}>x</button>
      </div>
    );
  });

  return (
    <>
      <div className={stl.container}>
        <h2>Posts</h2>
        {mappedPosts}
      </div>
      <DeletePostModal open={showModal} onClose={closeModalHandler} />
    </>
  );
};
