import { useContext } from "react";
import { getCurrentStory } from "@/containers/StoriesHover/utils";

import { AppContext } from "@/contexts";
import { StoriesContext } from "@/contexts/StoriesContext";
import { startStoryTransitionProps } from "@/services/startStoryTransition/types.interface";
import { handleLoad } from "./utils";

import StoryButton from "@/components/StoryButton";
import ConditionalNode from "@/components/ConditionalNode";
import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";
import { IAppContext } from "@/types/interfaces/appContext.interface";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { STORIES } from "@/data/stories";
import Image, { StaticImageData } from "next/image";

export interface StoryImgProps {
  imgUrl: StaticImageData;
  children: JSX.Element;
}

const StoryImg = ({ imgUrl, children }: StoryImgProps): JSX.Element => {
  const { storiesDispatch, currentStories } = useContext(
    StoriesContext
  ) as IStoriesContext;
  const {
    dispatch,
    modal: { userId },
  } = useContext(AppContext) as IAppContext;
  const { currentStoryIndex } = getCurrentStory(currentStories, imgUrl);

  const isFirstStory = currentStoryIndex <= 0;
  const isFirstAuthor = userId <= 0;
  const isVeryFirstStory = isFirstAuthor && isFirstStory;
  const isLastStory = currentStoryIndex >= currentStories.length - 1;
  const isLastAuthor = userId >= STORIES.length - 1;
  const isVeryLastStory = isLastStory && isLastAuthor;

  const configStoryTransition: startStoryTransitionProps = {
    userId,
    currentStoryIndex,
    currentStories,
    storiesDispatch,
    dispatch,
  };

  return (
    <div className="mx-auto h-[95vh] max-w-[500px] px-2 relative mt-4">
      {children}

      <ConditionalNode condition={!isVeryFirstStory}>
        <StoryButton direction="left">
          <BsFillArrowLeftCircleFill className="text-xl" />
        </StoryButton>
      </ConditionalNode>

      <Image
        src={imgUrl}
        alt=""
        className="h-full object-cover object-center rounded-xl"
        onLoad={handleLoad(configStoryTransition)}
      />

      <ConditionalNode condition={!isVeryLastStory}>
        <StoryButton>
          <BsFillArrowRightCircleFill className="text-xl" />
        </StoryButton>
      </ConditionalNode>
    </div>
  );
};

export default StoryImg;
