/* eslint-disable no-unused-vars */
import { FaRegCommentDots } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";
import useUser from "../../hooks/currentUser/useUser";
import UseNotice from "../../hooks/notice/UseNotice";
import { Link } from "react-router-dom";
const NoticeDetails = ({ data }) => {
  const [comment, setComment] = useState(false);
  const { currentUser } = useUser();
  const [notices, isLoading, refetch] = UseNotice();
  const totalComments = data?.comments?.length || 0;
  console.log(totalComments);

  const handelComment = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const date = new Date().toLocaleString();

    const newComment = {
      comment: comment,
      name: currentUser.name,
      photo: currentUser.image,
      email: currentUser.email,
      date,
    };

    axios
      .post(`http://localhost:5000/comment/${id}`, newComment)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
  };
  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-4 ">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={data.photo}
          alt=""
        />
        <div>
          <h2>{data.name}</h2>
          <h2 className="text-[12px] font-normal">{data.role}</h2>
        </div>
      </div>
      <div className="flex flex-col w-5xl p-4 space-y-4 ml-8">
        <div className="space-y-4">
          <h2>{data.date}</h2>
          <p className="font-normal text-[16px] ">{data.notice}</p>
        </div>
        <div>
          <div className="flex justify-between px-2">
            <p>10k react</p>
            <div className="flex gap-2">
              <Link to={`/notice/${data._id}`}>
                <p className="underline cursor-pointer">
                  {totalComments}comment
                </p>
              </Link>
              <p>2shear</p>
            </div>
          </div>
          <div className="flex justify-between border p-2 rounded-lg">
            <div className="flex gap-2 items-center">
              <AiTwotoneLike />
              <h2>like</h2>
            </div>
            <div
              onClick={() => setComment(!comment)}
              className="flex gap-2 items-center"
            >
              <FaRegCommentDots />
              <h2>comments</h2>
            </div>

            <div className="flex gap-2 items-center">
              <CiShare2 />
              <h2>shear</h2>
            </div>
          </div>
        </div>
        <div className={comment ? "block p-2" : "hidden"}>
          <form onSubmit={(e) => handelComment(e, data._id)}>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                required
                name="comment"
                placeholder="Enter your comment hear"
                className="input input-ghost w-full"
              />
              <button type="submit">
                <VscSend className="text-3xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
