import Link from "next/link";
import { BlogListStyles } from "./BlogList.styles";
import BlogItem from "../BlogItem";

const BlogList = () => {
  return (
    <BlogListStyles>
      <h4>journal</h4>

      <ul>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </ul>
    </BlogListStyles>
  )
}

export default BlogList;