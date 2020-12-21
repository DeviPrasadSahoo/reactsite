import react from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from '@material-ui/icons/StarHalf';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Skill = ({course}) => {
    return (
      <Col xs="3">
        <Card className="card-main text-center">
          <CardBody>
            <CardTitle tag="h5">{course.title}</CardTitle>
            <CardText>{course.description}</CardText>
            <div className="skillKnowledge">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
            </div>
            {/* <Button>Show more</Button> */}
          </CardBody>
        </Card>
      </Col>
    );
  };

  export default Skill;