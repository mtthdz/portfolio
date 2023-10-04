import Link from "next/link";
import { BlogItemStyles } from "./BlogItem.styles";

type PostProps = {
  title: string,
  date: string
}

const BlogPost = ({ title, date }: PostProps) => {
  return (
    <BlogItemStyles>
      <Link href="/" className="flex-parent">
        <p>{title}</p>
        <div></div>
        <p className="item-date">{date}</p>
      </Link>
    </BlogItemStyles>
  )
}

export default BlogPost;