import React  from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

class CardRender extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };;
  }

  componentDidMount(){
    let productsUrl = "https://jugaadstartup.herokuapp.com/products/"

    fetch(productsUrl)
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        isLoaded: true,
        products: result["results"],
      });
    }, error=>{
      this.setState({
        isLoaded: true,
        error
      })
    })
  }

  
  render() { 

    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>
    }else{
      return (  
        <Row className="m-0">
        {products.map(product=>(
          <Col key={product.id} xs={6} md={3} className="my-1">
          <Card>
            <Card.Img src="https://picsum.photos/200"></Card.Img>
            <Card.Body className="p-0 m-2">
              <Card.Title className="font-weight-bold m-0">
                <FontAwesomeIcon className="mr-2" icon={faRupeeSign}></FontAwesomeIcon>
                {product.price}
              </Card.Title>
              <Card.Text className="m-0">{product.title}</Card.Text>
              <Card.Text className="mt-3 text-muted" style={{fontSize: "0.8rem"}}>NADIAD, KHEDA.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
        </Row>
      );
    }
  }
}
 
export default CardRender;

