import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import parse from 'html-react-parser';
import styled from "styled-components";
import { PostProps } from "@/types/Props";

const BlogPage = () => {
  const router = useRouter();
  const data: PostProps = router.query;

  return (
    <>
      <BlogPageStyles>
        <div className="header">
          <Link href='/' className="header-nav-option">&#8592; {data.title}</Link>
          <h4>{data.date}</h4>
        </div>

        <div className="body">{parse(data.body)}</div>
      </BlogPageStyles>
      <Footer />
    </>
  )
}

const BlogPageStyles = styled.section`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 40px;

    .header-nav-option {
      font-size: 1.4rem;
      /* color: #ffffff; */
    }
  }
  
  .body {
    p {
      margin-bottom: 20px;
    }
  }
`;

export default BlogPage;