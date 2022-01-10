import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://cdn.pixabay.com/photo/2022/01/01/15/40/train-6907884_960_720.jpg"
        alt="A train in a snowstorm"
      />
      <StaticImage
        src="../images/animal-gb06f4f907_1280.jpg"
        alt="A dog in the snow"
      />
    </Layout>
  );
};

export default IndexPage;
