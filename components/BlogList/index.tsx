import Link from "next/link";
import { BlogListStyles } from "./BlogList.styles";
import BlogItem from "../BlogItem";
import { postList } from "@/api/posts";

const BlogList = () => {
  const data = postList;

  return (
    <BlogListStyles>
      <h4>journal</h4>

      <ul>
        {
          data.map((post, index) => (
            <BlogItem title={post.title} date={post.date} key={index} />
          ))
        }
      </ul>
    </BlogListStyles>
  )
}

export default BlogList;