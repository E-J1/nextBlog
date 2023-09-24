import { StaticImageData } from "next/image";

export const initTransition = (spanId: string) => {
  const spanTransition = document.getElementById(spanId);
  spanTransition?.classList.add("story-hover-transition");
};

export const getCurrentStory = (
  stories: StaticImageData[],
  current: StaticImageData
) => {
  const currentStoryIndex = stories.findIndex((story) => story === current);
  return {
    currentStoryIndex,
    currentStory: stories[currentStoryIndex],
  };
};
