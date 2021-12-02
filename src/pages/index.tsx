import { GetStaticProps } from "next";

import { getPrismicClient } from "../services/prismic";

import commonStyles from "../styles/common.module.scss";
import styles from "./home.module.scss";

export default function Home() {
  return <div>TEste</div>;
}

// export const getStaticProps = async () => {
//   const prismic = getPrismicClient();
//   const postsResponse = await prismic.query(

//   );

//   return {
//     props: {
//       postsPagination: postsResponse.results,
//     },
//   };
// };
