import { Result } from "./interfaces/articleInterface";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleArticle = ({ article }: { article: Result }) => {
   return (
      <Col key={article.id} xs={6} md={4}>
         <Card>
            <Card.Img
               //  className="w-100 h-25"
               variant="top"
               src={article.image_url}
            />
            <Card.Body>
               <Card.Title>{article.title}</Card.Title>
               {/* <Card.Text>{article.summary}</Card.Text> */}
               <Link to={"article/" + article.id}>Read more</Link>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default SingleArticle;
