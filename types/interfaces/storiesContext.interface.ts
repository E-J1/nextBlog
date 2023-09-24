import { StaticImageData } from "next/image";
import { IPayload } from "./payload.interface";

export interface IStoriesContext {
  userId: number;
  currentStories: StaticImageData[];
  currentStory: StaticImageData;
  loading: boolean;
  storiesDispatch: React.Dispatch<IPayload> | null;
  timing: number;
  startTiming: number;
  userName?: string;
}
