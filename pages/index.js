import React from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends React.Component {
  static async getInitialProps(context) {
    // default properties of context provided from getIntialProps
    const { req, res, query } = context;
    // page variable to track which page we are on
    let page = 0;
    console.log(query); // query is based on "/?page=X", where "{ page: X }" is outputted in the terminal (local terminal not on chrome as it's server side, )

    let stories;
    try {
      // set page number based on query param, where if it
      // was not defined or false we simply default to 1
      page = Number(query.page) || 1;

      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return { page, stories };
  }

  // getNews = async () => {
  //   let stories;
  //   try {
  //     const response = await fetch(
  //       'https://node-hnapi.herokuapp.com/news?page=1'
  //     );
  //     stories = await response.json();
  //     console.log(stories);
  //   } catch (err) {
  //     console.log(err);
  //     stories = [];
  //   }
  //   return { stories };
  // };

  render() {
    const { stories, page } = this.props;
    // Error Code 504 Service Unavailable
    if (stories.length === 0) return <Error statusCode={503} />;

    return (
      <Layout title={'hacker-news'}>
        <div className="container">
          <div className="row">
            <StoryList stories={stories} />
          </div>
        </div>

        <footer>
          {/* link us to url with the page no. + 1 */}
          <Link href={`/?page=${page + 1}`}>
            <a>More </a>
          </Link>
          Page: {page + 1}
        </footer>
      </Layout>
    );
  }
}

export default Index;
