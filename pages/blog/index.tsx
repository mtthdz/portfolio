import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { PostProps } from "@/types/Props";
import { apiData } from "@/api/posts";
import parse from 'html-react-parser';

const BlogPage = () => {
  const router = useRouter();
  const queryData = router.query;
  const slug = queryData.id;
  const postData: PostProps = apiData.find(post => post.slug === slug) as PostProps;

  // conditional rendering
  if(!postData) return null;

  return (
    <>
      <Head>
        <title>mtthdz | {postData.title}</title>
      </Head>
      <BlogPageStyles>
        <div className="header">
          <Link href='/' className="header-nav-option">&#8592; {postData.title}</Link>
          <h4>{postData.date}</h4>
        </div>

        <div className="body">{parse(postData.body ? postData.body : '')}</div>
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