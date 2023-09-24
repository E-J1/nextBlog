import { IPayload } from "@/types/interfaces/payload.interface";
import { StaticImageData } from "next/image";

export interface startStoryTransitionProps {
  currentStoryIndex: number;
  currentStories: StaticImageData[];
  userId: number;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
  timing?: number;
  inPause?: boolean;
  setInPause?: React.Dispatch<React.SetStateAction<boolean>>;
}
