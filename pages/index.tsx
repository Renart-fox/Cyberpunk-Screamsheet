import styles from "../styles/Home.module.css";
import About from "./components/about";
import Header from "./components/header";
import formatNews from "../lib/formatNews";
import parseIntoJSX from "../lib/parseIntoJSX";

export default function Home({ reformattedNews }) {
  var table = parseIntoJSX(reformattedNews);

  return (
    <div className={styles.container}>
      <Header></Header>

      <div className="container"></div>

      <main className={styles.main}>{table}</main>
      <About></About>
    </div>
  );
}

export async function getServerSideProps(context) {
  return formatNews("gossip");
}
