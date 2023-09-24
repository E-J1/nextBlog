import { StaticImageData } from "next/image";

export interface IUsers {
  id: number;
  name: string;
  avatar: StaticImageData;
}
