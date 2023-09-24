import { initTransition } from "@/containers/StoriesHover/utils";
import { Timer } from "@/libs/Timer";
import { startStoryTransition } from "@/services/startStoryTransition/index";
import { startStoryTransitionProps } from "@/services/startStoryTransition/types.interface";
import { STORY_TIMING } from "@/constants/global";
import { STORIES_REDUCER_TYPES } from "@/reducers/types.enums";

export const handleLoad =
  (configStoryTransition: startStoryTransitionProps) => () => {
    const { currentStories, currentStoryIndex, storiesDispatch } =
      configStoryTransition;

    // initTransition(currentStories[currentStoryIndex]);
    Timer.id = setTimeout(
      startStoryTransition(configStoryTransition),
      STORY_TIMING
    );
    storiesDispatch?.({ type: STORIES_REDUCER_TYPES.startTiming });
  };
