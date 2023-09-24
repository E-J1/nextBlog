import StoryBubble from "@/components/StoryBubble";
import { USERS } from "data/users";

const Stories: React.FC = (): JSX.Element => {
  return (
    <section className="pl-5 flex space-x-3 border-b-gray-700 border-b-[1px] pb-3 space-x-4 mt-4">
      {USERS.map((user) => (
        <StoryBubble
          key={user.id}
          imgUrl={user.avatar}
          userName={user.name}
          userId={user.id}
        />
      ))}
    </section>
  );
};

export default Stories;
