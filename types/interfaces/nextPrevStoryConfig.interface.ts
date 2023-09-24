import React from "react";
import { IPayload } from "./payload.interface";
import { StaticImageData } from "next/image";

export interface INextPrevStory {
  direction: "left" | "right";
  userId: number;
  currentStories: StaticImageData[];
  currentStory: StaticImageData;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
}
