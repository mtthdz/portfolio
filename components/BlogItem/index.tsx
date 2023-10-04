import Link from "next/link";
import { BlogItemStyles } from "./BlogItem.styles";

const BlogItem = () => {
  return (
    <BlogItemStyles>
      <Link href="/" className="flex-parent">
        <p>lorem ipsum</p>
        <div></div>
        <p className="item-date">10/3</p>
      </Link>
    </BlogItemStyles>
  )
}

export default BlogItem;