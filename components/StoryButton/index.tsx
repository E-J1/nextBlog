import { getInitialClassName } from "./utils";
import { setNextPrevStory } from "@/services/setNextPrevStory";
import { useContext } from "react";
import { StoriesContext } from "@/contexts/StoriesContext";
import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";
import { INextPrevStory } from "@/types/interfaces/nextPrevStoryConfig.interface";
import { AppContext } from "@/contexts";
import { IAppContext } from "@/types/interfaces/appContext.interface";

interface StoryButtonProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
}

const StoryButton = ({ children, direction = "right" }: StoryButtonProps) => {
  const { userId, currentStories, currentStory, storiesDispatch } = useContext(
    StoriesContext
  ) as IStoriesContext;
  const { dispatch } = useContext(AppContext) as IAppContext;
  const nextPrevStoryConfig: INextPrevStory = {
    direction,
    userId,
    currentStories,
    currentStory,
    storiesDispatch,
    dispatch,
  };

  const handleChangeStory = (triggerEl: "container" | "wrapper") => () => {
    if (window.screen.width >= 640 && triggerEl === "container") return;
    setNextPrevStory(nextPrevStoryConfig);
  };

  return (
    <div
      className={getInitialClassName(direction)}
      onClick={handleChangeStory("container")}
    >
      <button
        className="bg-black rounded-full hidden sm:block"
        onClick={handleChangeStory("wrapper")}
      >
        {children}
      </button>
    </div>
  );
};

export default StoryButton;
