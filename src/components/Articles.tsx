import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Result } from "./interfaces/articleInterface";
// import { ArticleInteface } from "./interfaces/articleInterface";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";

const Articles = () => {
   // use this to create pagination if time remains
   //  const [articleData, setArticleData] = useState<ArticleInteface[]>([]);
   const [articles, setArticles] = useState<Result[]>([]);

   useEffect(() => {
      fetch(
         "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10"
      )
         .then((response) => {
            if (!response.ok) {
               throw new Error("Retraving data error via fetch!");
            }
            return response.json();
         })
         .then((result) => {
            // console.log("data retreaved correctly!", result);
            // setArticleData(result);
            setArticles(result.results);
         })
         .catch((err) => console.log("ERROR", err));
   }, []);

   console.log("this is data: ", articles);

   return (
      <Container>
         <Row>
            {articles.map((article) => {
               return <SingleArticle article={article} key={article.id} />;
            })}
         </Row>
      </Container>
   );
};

export default Articles;
