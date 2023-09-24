import { IStoriesContext } from "@/types/interfaces/storiesContext.interface";
import { createContext } from "react";

export const StoriesContext = createContext<null | IStoriesContext>(null);
