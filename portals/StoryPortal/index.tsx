import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import PostIcon from "@/components/PostIcon";
import StoryBubble from "@/components/StoryBubble";
import StoriesHover from "@/containers/StoriesHover";

import { StoriesContext } from "@/contexts/StoriesContext";
import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";

import { handlePause, handleClick } from "./utils";
import { IPayload } from "@/types/interfaces/payload.interface";
import { useStoryPause } from "@/hooks/useStoryPause";

const StoryPortal: React.FC = (): JSX.Element => {
  const {
    storiesStateInitialValue,
    storyTransitionConfig,
    inPause,
    dispatch,
    userName,
    userAvatar,
    userId,
  } = useStoryPause();

  return (
    <StoriesContext.Provider
      value={storiesStateInitialValue as IStoriesContext}
    >
      <section className="fixed top-0 w-full h-screen">
        <StoriesHover>
          <div className="p-3 flex justify-between items-center">
            <StoryBubble
              imgUrl={userAvatar}
              userName={userName as string}
              userId={userId}
              isPost={true}
              width="w-10"
              height="h-10"
            />

            <div className="flex items-center space-x-2">
              <button onClick={handlePause(storyTransitionConfig)}>
                <PostIcon
                  iconFn={() => (inPause ? FaPlay : FaPause)}
                  iconSize="text-sm"
                  iconSizeMd="text-xl"
                />
              </button>

              <button
                onClick={handleClick(dispatch as React.Dispatch<IPayload>)}
              >
                <PostIcon iconFn={() => MdOutlineClear} />
              </button>
            </div>
          </div>
        </StoriesHover>
      </section>
    </StoriesContext.Provider>
  );
};

export default StoryPortal;
