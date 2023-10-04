import { BlogListStyles } from "./BlogList.styles";
import { postList } from "@/api/posts";
import BlogPost from "../BlogPost";

const BlogList = () => {
  const data = postList;

  return (
    <BlogListStyles>
      <h4>journal</h4>

      <ul>
        {
          data.map((post, index) => (
            <BlogPost title={post.title} date={post.date} slug={post.slug} body={post.body} key={index} />
          ))
        }
      </ul>
    </BlogListStyles>
  )
}

export default BlogList;