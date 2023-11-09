import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArticleDetailsInfo } from "./interfaces/articleInterface";

type ArticleComponentParams = {
   id: string;
};

const ArticleDetails = () => {
   const params = useParams<ArticleComponentParams>();
   console.log("this is path: ", params.id);
   const [articleDetails, setArticleDetails] = useState<ArticleDetailsInfo[]>(
      []
   );

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
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <>
         <Container>
            <Row>
               <Col>
                  <h1></h1>
                  <Image> </Image>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default ArticleDetails;
