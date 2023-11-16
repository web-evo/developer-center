import React from 'react';
import style from '../../styles/blog.module.scss';
import CommonHead from '../../components/common-head';
import axios from 'axios';
import Markdown from '../../core/unit/markdown';
import {Box, Container} from '@mui/material';
// import 'bytemd/dist/index.min.css';
import '../../styles/my-bytemd.css';
import 'highlight.js/styles/github.css';
import {Viewer} from '@bytemd/react';
import {BytemdPlugin} from 'bytemd';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
function BlogDetail({blog}: {blog: {title: string, markContent: string}}) {
  const host: string = process.env.NEXT_PUBLIC_SITE_URL as string;
  const content = Markdown.keywordToLink(blog.markContent, host);
  const plugins: BytemdPlugin[] = [
    frontmatter(),
    gfm(),
  ];
  return (
    <Box >
      <Container maxWidth={'md'} sx={{px: 2}}>
        <article data-clarity-region="article">
          <div className={style['blog']}>
            <CommonHead
              title={blog.title + ' - Web Evolution'}
              description={Markdown.intercept(blog.markContent, 100)}
            />
            <div className={style['blog-detail']}>
              <h1 className={style['page-title']}>
                {blog.title}
              </h1>
              <div className={style['article-body']}>
                <Viewer value={content} plugins={plugins}/>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Box>
  );
}
BlogDetail.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
  const path = 'blogs';
  const url = `${host}${path}/${id}`;
  const res = await axios.get(url);
  return {blog: res.data};
};
export default BlogDetail;
