import { STORY_TIMING } from "@/constants/global";
import { IStoriesConfig } from "@/types/interfaces/storiesConfig.interface";
import { StaticImageData } from "next/image";

export const getInitialValue = (
  currentStories: StaticImageData[],
  userId: number
): IStoriesConfig => {
  return {
    userId,
    currentStories,
    currentStory: currentStories[0],
    storiesDispatch: null,
    loading: false,
    timing: STORY_TIMING,
    startTiming: 0,
  };
};
