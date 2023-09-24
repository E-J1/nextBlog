import { AppContext } from "@/contexts";
import { IAppContext } from "@/types/interfaces/appContext.interface";

import { useContext } from "react";
import { toggleModal } from "@/services/toggleModal";
import Image, { StaticImageData } from "next/image";

interface StoryBubbleProps {
  imgUrl: StaticImageData;
  userName: string;
  userId: number;
  width?: string;
  height?: string;
  isPost?: boolean;
}

const StoryBubble = ({
  imgUrl,
  userName,
  userId,
  width = "w-16",
  height = "h-16",
  isPost = false,
}: StoryBubbleProps) => {
  const dispatch = (useContext(AppContext) as IAppContext)?.dispatch;
  const handleClick = () => {};
  dispatch &&
    toggleModal(dispatch, {
      userName,
      userId,
    });

  return (
    <div
      className={`flex items-center ${
        !isPost ? "flex-col cursor-pointer" : "w-full"
      }`}
      onClick={!isPost ? handleClick : () => null}
    >
      <div className={isPost ? "flex flex-row w-full " : ""}>
        <div
          className={`wrapper-color-box ${width} ${height} gradient rounded-full p-[3px] mb-1 ${
            isPost ? "mr-2 w-full shrink-0" : "md:w-20 md:h-20"
          }`}
        >
          <div className="inner-profile-image w-full h-full rounded-full overflow-hidden">
            <Image
              src={imgUrl}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h3
          className={`text-sm font-bold items-center ${
            !isPost
              ? "whitespace-nowrap text-ellipsis overflow-hidden w-16 text-xs"
              : ""
          } md:w-20 md:text-md ${
            isPost ? "md:text-lg w-full grow self-center" : ""
          }`}
        >
          {userName}
        </h3>
      </div>
      <style jsx>{`
        div.wrapper-color-box {
          width: 68px;
          height: 68px;
          background-image: linear-gradient(#f56b6b, #444444),
            linear-gradient(222deg, #d301c5, #ff272780, #ffb700b3);
          background-clip: content-box, border-box;
        }
        .inner-profile-image {
          /* width: 60px; */
          /* height: 60px; */
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default StoryBubble;
