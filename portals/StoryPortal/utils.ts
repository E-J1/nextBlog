import { Timer } from "@/libs/Timer";
import { STORIES_REDUCER_TYPES } from "@/reducers/types.enums";
import { startStoryTransition } from "@/services/startStoryTransition";
import { startStoryTransitionProps } from "@/services/startStoryTransition/types.interface";
import { toggleModal } from "@/services/toggleModal";
import { IPayload } from "@/types/interfaces/payload.interface";
import React from "react";

export const handleClick = (dispatch: React.Dispatch<IPayload>) => () => {
  clearTimeout(Timer.id);
  dispatch && toggleModal(dispatch);
};

export const handlePause =
  (storyTransitionConfig: startStoryTransitionProps) => () => {
    const { storiesDispatch, timing, inPause, setInPause } =
      storyTransitionConfig;

    if (!inPause) clearTimeout(Timer.id);
    if (inPause)
      Timer.id = setTimeout(
        startStoryTransition(storyTransitionConfig),
        timing
      );

    storiesDispatch?.({ type: STORIES_REDUCER_TYPES.toggleLoading });
    setInPause?.((prev) => !prev);
  };
