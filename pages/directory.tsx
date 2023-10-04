import BlogList from "@/components/BlogList";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import styled from "styled-components"

const DirectoryPage = () => {
  return (
    <DirectoryStyles>
      <Body />
      <BlogList />
      <Footer />
    </DirectoryStyles>
  )
}

export default DirectoryPage;

const DirectoryStyles = styled.div`
  /* margin-top: 50px; */
`;