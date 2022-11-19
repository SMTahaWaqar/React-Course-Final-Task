import { Accordion, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function TextExample(props) {
  console.log(props.info)

  if (props.info) {
  return (
    <Container fluid className='d-flex align-items-center justify-content-center' style={{height: '80vh'}}>
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title><h2 style={{textAlign: 'center', textTransform: 'uppercase'}}>{props.info.course}</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Accordion defaultActiveKey={['0']} alwaysOpen className='p-5'>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3>Duration : {props.info.duration}</h3></Accordion.Header>
              <Accordion.Body>
                <h5>Start Date : {props.info.startDate}</h5>
                <h5>End Date : {props.info.endDate}</h5>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h5 style={{textTransform: 'uppercase'}}>Current Status : {props.info.status}</h5>
        </Card.Subtitle>
        <Card.Text>
          <p style={{textTransform: 'capitalize'}}>citeria for certification : <strong className='mark'>{props.info.certification}</strong></p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}
return (
  <h2 style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>Loading</h2>
);
}

export default TextExample;