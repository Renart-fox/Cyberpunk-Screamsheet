import clientPromise from "./mongodb";

var data = require("../.token.json");

interface ElementDict {
  element: string;
  style: {};
  text: any;
}

export async function formatNews(pageName) {
  const client = await clientPromise;

  const db = client.db(data["database"]);

  let news = await db.collection(pageName).find({}).toArray();
  news = JSON.parse(JSON.stringify(news));

  const reformattedNews = parseResult(news);

  return {
    props: { reformattedNews },
  };
}

function parseResult(news) {
  var reformattedNews: ElementDict[] = [];
  for (var index in news) {
    for (var key in news[index]) {
      if (key == "textLeftColumn") {
        reformattedNews.push({
          element: "h2",
          style: {
            color: "red",
          },
          text: news[index][key],
        });
      } else if (key == "textRightColumn") {
        reformattedNews.push({
          element: "span",
          style: {
            color: "blue",
          },
          text: news[index][key],
        });
      }
    }
  }
  return reformattedNews;
}

export default formatNews;
