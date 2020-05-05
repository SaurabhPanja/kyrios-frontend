import React  from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

class CardRender extends React.Component {

  
  render() { 
    const allCardsArr = ()=>{
      let allCard = []
      for(let i = 0; i < 20; i++){
        allCard.push(
          <Col xs={6} md={3} className="my-1">
          <Card key={i}>
            <Card.Img src="https://picsum.photos/200"></Card.Img>
            <Card.Body className="p-0 m-2">
              <Card.Title className="font-weight-bold m-0">
                <FontAwesomeIcon className="mr-2" icon={faRupeeSign}></FontAwesomeIcon>
                10,000
              </Card.Title>
              <Card.Text className="m-0">Iphone X 64GB</Card.Text>
              <Card.Text className="mt-3 text-muted" style={{fontSize: "0.8rem"}}>NADIAD, KHEDA.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      }
      return allCard
    }

    return (  
      <Row className="m-0">
      {allCardsArr()}
      </Row>
    );
  }
}
 
export default CardRender;

