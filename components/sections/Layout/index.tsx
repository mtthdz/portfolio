import { ReactNode, useState } from "react"
import * as SS from './Layout.styles';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [ modalVisible, setModalVisible ] = useState(false);

  function modalToggle() {
    setModalVisible(!modalVisible);
  }

  return(
    <SS.Wrapper>
      <main>{children}</main>
    </SS.Wrapper>
  )
}