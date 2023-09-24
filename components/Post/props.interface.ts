import { StaticImageData } from "next/image";

export interface PostProps {
  id: number;
  likes: number;
  created_at: string;
  author: number;
  description: string;
  image: StaticImageData;
}
