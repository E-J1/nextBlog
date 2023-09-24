import { useContext, useEffect, useReducer, useState } from "react";
import { STORIES_REDUCER_TYPES } from "@/reducers/types.enums";
import { startStoryTransitionProps } from "@/services/startStoryTransition/types.interface";
import { getCurrentStory } from "@/containers/StoriesHover/utils";
import { storiesReducer } from "@/reducers/storiesReducer";
import { getInitialValue } from "@/reducers/storiesReducer/getInitialValue";
import { AppContext } from "@/contexts";
import { IAppContext } from "@/types/interfaces/appContext.interface";
import { STORIES } from "data/stories";
import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";
import { USERS } from "data/users";
import { IUsers } from "data/interfaces/users.interface";

export const useStoryPause = () => {
  const {
    dispatch,
    modal: { userId, userName },
  } = useContext(AppContext) as IAppContext;
  const [inPause, setInPause] = useState<boolean>(false);
  const initialStories = STORIES[userId].stories;
  const storiesInitialValue = getInitialValue(initialStories, userId);

  const [storiesState, storiesDispatch] = useReducer(
    storiesReducer,
    storiesInitialValue
  );
  const storiesStateInitialValue = {
    ...(storiesState as IStoriesContext),
    storiesDispatch,
  };

  const { timing, currentStories, currentStory } = storiesState;
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory);

  const storyTransitionConfig: startStoryTransitionProps = {
    userId,
    storiesDispatch,
    dispatch,
    currentStories,
    currentStoryIndex,
    timing,
    inPause,
    setInPause,
  };

  const { avatar: userAvatar } = USERS.find(
    (user) => user.name === userName
  ) as IUsers;

  useEffect(() => {
    if (inPause) {
      storiesDispatch({ type: STORIES_REDUCER_TYPES.toggleLoading });
      setInPause(false);
    }
  }, [currentStory]);

  return {
    storiesStateInitialValue,
    storyTransitionConfig,
    inPause,
    dispatch,
    userAvatar,
    userName,
    userId,
  };
};
