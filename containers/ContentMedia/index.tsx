import Post from "components/Post";
import { POSTS } from "data/posts";

const ContentMedia = () => {
  return (
    <section>
      {POSTS.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default ContentMedia;
