import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { MdReply } from "react-icons/md";
import { Contact } from "lucide-react";

const NoticeCommentDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [reply, setReply] = useState(false);
  console.log(reply);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/singleNotice/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex gap-4">
        <img
          className="w-[50px] h-[50px] rounded-full"
          // If the data has a photo, uncomment this line
          src={data.photo}
          alt="User"
        />
        <div>
          <h2>{data.name}</h2>
          <h2 className="text-[12px] font-normal">{data.role}</h2>
        </div>
      </div>
      <div className="flex flex-col w-5xl p-4 space-y-4 ml-8">
        <div className="space-y-4">
          <h2>{data.date}</h2>
          <p className="font-normal text-[16px]">{data.notice}</p>
        </div>
        <div>
          <div className="flex justify-between px-2">
            <p>10k react</p>

            <div className="flex gap-2">
              <Link to={`/notice/${data._id}`}></Link>
              <p>2 share</p>
            </div>
          </div>
          <div className="flex justify-between border p-2 rounded-lg">
            <div className="flex gap-2 items-center">
              <AiTwotoneLike />
              <h2>Like</h2>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegComment />
              <p className="cursor-pointer">comment</p>
            </div>

            <div className="flex gap-2 items-center">
              <CiShare2 />
              <h2>Share</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {data?.comments?.map((item) => (
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={item.photo}
                alt=""
              />
              <div>
                <h2>{item.name}</h2>
                <p className="text-[12px] font-normal">{item.email}</p>
              </div>
            </div>
            <div className="ml-[50px] space-y-5">
              <h2>"{item.comment}"</h2>
              <div className="flex justify-between px-2 w-[200px]">
                <h2>react</h2>
                <div
                  onClick={() => setReply(!reply)}
                  className="flex gap-2 items-center"
                >
                  <MdReply />
                  <h2>reply</h2>
                </div>
              </div>
              <div className={reply ? "block p-2" : "hidden"}>
                <form>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      required
                      name="comment"
                      placeholder="Enter your comment hear"
                      className="input input-ghost w-full"
                    />
                    <button type="submit">
                      {/* <VscSend className="text-3xl" /> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeCommentDetails;
