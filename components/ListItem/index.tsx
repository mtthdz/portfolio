import Link from "next/link";
import { ListItemStyles } from "./ListItem.styles";
import { PostProps } from "@/types/Props";

interface ListItemProps {
  itemData: PostProps;
}

const ListItem = ({itemData}: ListItemProps) => {
  const data = itemData;

  return (
    <ListItemStyles>
      <Link
        className="flex-parent"
        href={`/blog/${data.slug}`}
      >
        <p>{data.title}</p>
        <div></div>
        <p className="item-date">{data.date}</p>
      </Link>
    </ListItemStyles>
  )
}

export default ListItem;