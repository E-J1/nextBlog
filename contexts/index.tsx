import { createContext } from "react";
import { IAppContext } from "@/types/interfaces/appContext.interface";

export const AppContext = createContext<null | IAppContext>(null);
