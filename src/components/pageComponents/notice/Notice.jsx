import UseNotice from "../../hooks/notice/UseNotice";
import NoticeDetails from "./NoticeDetails";

const Notice = () => {
  const [notice] = UseNotice();
  return (
    <div className="border p-2 shadow-2xl rounded-lg max-h-100vh">
      {notice.map((item) => (
        <NoticeDetails data={item}></NoticeDetails>
      ))}
    </div>
  );
};

export default Notice;
