import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import content1 from './content1.jpg';
import content2 from './content2.jpg';
import content3 from './content3.jpg';
import content4 from './content4.jpg';

const content = () => {
    return(
        <div className='mt-4 container d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={content1} height={400} />
              <Card.Body>
                <Card.Title>Floris Yellow</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Buy it</Button>
              </Card.Body>
            </Card>
            
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={content2} height={400} />
              <Card.Body>
                <Card.Title>Rose Kingdom</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="primary">Buy it</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={content3} height={400} />
              <Card.Body>
                <Card.Title>Cutie White</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Buy it</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={content4} height={400} />
              <Card.Body>
                <Card.Title>Spring Flowers</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Buy it</Button>
              </Card.Body>
            </Card>
            </div>
    );
}

export default content