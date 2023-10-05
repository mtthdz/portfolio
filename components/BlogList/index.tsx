import { BlogListStyles } from "./BlogList.styles";
import { apiData } from "@/api/posts";
import ListItem from "../ListItem";

const BlogList = () => {
  const data = apiData;

  return (
    <BlogListStyles>
      <h4>journal</h4>

      <ul>
        {
          data.map((post, index) => (
            <ListItem title={post.title} date={post.date} slug={post.slug} body={post.body} key={index} />
          ))
        }
      </ul>
    </BlogListStyles>
  )
}

export default BlogList;