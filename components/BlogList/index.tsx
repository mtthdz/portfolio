import { BlogListStyles } from "./BlogList.styles";
import { apiData } from "@/api/posts";
import ListItem from "../ListItem";
import { PostProps } from "@/types/Props";

const BlogList = () => {
  const data: PostProps[] = apiData;

  return (
    <BlogListStyles>
      <h4>journal</h4>

      <ul>
        {
          data.map((post, index) => (
            <ListItem itemData={post} key={index} />
          ))
        }
      </ul>
    </BlogListStyles>
  )
}

export default BlogList;