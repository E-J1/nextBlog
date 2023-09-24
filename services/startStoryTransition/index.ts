import React from "react";
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@/reducers/types.enums";
import { STORIES } from "@/data/stories";
import { USERS } from "@/data/users";
import { toggleModal } from "@/services/toggleModal";
import { startStoryTransitionProps } from "./types.interface";
import { IPayload } from "@/types/interfaces/payload.interface";
import { IStoriesConfig } from "@/types/interfaces/storiesConfig.interface";

export const startStoryTransition =
  (config: startStoryTransitionProps) => () => {
    const {
      currentStoryIndex,
      currentStories,
      storiesDispatch,
      dispatch,
      userId,
    } = config;

    const storiesRemaining = currentStoryIndex < currentStories.length - 1;

    if (storiesRemaining) {
      const newIndex = currentStoryIndex + 1;

      storiesDispatch?.({
        type: STORIES_REDUCER_TYPES.setSingleStory,
        content: currentStories[newIndex],
      });
    }

    if (!storiesRemaining) {
      const moreUsersStories = userId < STORIES.length - 1;

      if (moreUsersStories) {
        const newStoriesBatch = STORIES[userId + 1].stories;
        const userName = USERS.find((user) => user.id === userId + 1)?.name;

        storiesDispatch?.({
          type: STORIES_REDUCER_TYPES.setNewStoriesBatch,
          config: { currentStories: newStoriesBatch } as IStoriesConfig,
        });

        dispatch?.({
          type: REDUCER_TYPES.setModalUser,
          config: {
            userId: userId + 1,
            userName,
          },
        });
      }

      if (!moreUsersStories) toggleModal(dispatch as React.Dispatch<IPayload>);
    }
  };
