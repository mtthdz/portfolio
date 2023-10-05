import Link from "next/link";
import { ListItemStyles } from "./ListItem.styles";
import { PostProps } from "@/types/Props";


const ListItem = (props: PostProps) => {
  return (
    <ListItemStyles>
      <Link
        className="flex-parent"
        href={{
          pathname: `/blog/${props.slug}`,
          query: props
        }}
        as={`/blog/${props.slug}`}
      >
        <p>{props.title}</p>
        <div></div>
        <p className="item-date">{props.date}</p>
      </Link>
    </ListItemStyles>
  )
}

export default ListItem;