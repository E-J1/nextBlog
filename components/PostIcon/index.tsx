import { IconType } from "react-icons";

interface PostIconProps {
  iconFn: () => IconType;
  iconSize?: string;
  iconSizeMd?: string;
}

const PostIcon = ({
  iconFn,
  iconSize = "text-2xl",
  iconSizeMd = "md:text-3xl",
}: PostIconProps) => {
  const IconComponent = iconFn();

  return (
    <IconComponent className={`${iconSize} ${iconSizeMd} cursor-pointer`} />
  );
};

export default PostIcon;
