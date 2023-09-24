import React, { useContext, useEffect } from "react";

import StoryImg from "@/components/StoryImg";
import { StoriesContext } from "@/contexts/StoriesContext";
import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";

interface StoriesHoverProps {
  children: JSX.Element;
}

const StoriesHover: React.FC<StoriesHoverProps> = ({
  children,
}): JSX.Element => {
  const { currentStories, currentStory, loading } = useContext(
    StoriesContext
  ) as IStoriesContext;

  useEffect(() => {
    const spanElement = document.getElementById(String(currentStory));

    if (loading) spanElement?.classList.add("animation-pause");
    if (!loading) spanElement?.classList.remove("animation-pause");
  }, [loading]);

  return (
    <section className="max-w-[900px] mx-auto">
      <StoryImg imgUrl={currentStory}>
        <div className="absolute px-2 w-[97%] bg-gradient-to-t from-transparent to-black">
          <div className="flex justify-between pt-3 space-x-1 px-1">
            {currentStories.map((story) => (
              <div key={String(story)} className="w-full relative">
                <span className="story-hover"></span>
                <span
                  className="absolute top-0 left-0 story-hover"
                  id={String(story)}
                ></span>
              </div>
            ))}
          </div>

          {children}
        </div>
      </StoryImg>
    </section>
  );
};

export default StoriesHover;
