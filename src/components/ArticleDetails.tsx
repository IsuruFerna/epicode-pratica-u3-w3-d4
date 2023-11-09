import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { ArticleDetailsInfo } from "./interfaces/articleInterface";
import Image from "react-bootstrap/Image";

type ArticleComponentParams = {
   id: string;
};

const ArticleDetails = () => {
   const params = useParams<ArticleComponentParams>();
   console.log("this is path: ", params.id);
   const [articleDetails, setArticleDetails] = useState<ArticleDetailsInfo>();

   useEffect(() => {
      fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id)
         .then((response) => {
            if (!response.ok) {
               throw new Error("Article details retreaving went bad!");
            }
            return response.json();
         })
         .then((data) => {
            console.log("article details retreaved!", data);
            setArticleDetails(data);
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   console.log("this is setted data: ", articleDetails);
   return (
      <>
         <Container>
            <Row>
               {articleDetails && (
                  <Col>
                     <h1>{articleDetails.title}</h1>
                     <Image src={articleDetails?.image_url} fluid />
                     <p>{articleDetails.summary}</p>
                     <Link to="/">Home</Link>
                  </Col>
               )}
            </Row>
         </Container>
      </>
   );
};

export default ArticleDetails;
