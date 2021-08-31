import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';


class Footer extends React.Component {
  constructor(props) { // Init props and state
    super(props);
    this.state = { quote: null };

  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch



    fetch('https://quotes.rest/qod.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        try { this.setState({ quote: data.contents.quotes[0] }) } catch{ }

      })

  }
  render(props) {
    const { quote } = this.state
    const divStyle = {
      color: 'blue',
    };
    return (
      <div>







        <footer className="footer">

          <div className="footer__inner">


          <div className="footer__content">
          {quote ?
            <Container fluid={true}>
              <Row>
                <Col xs="3"><span style={{ position: 'absolute', bottom: 0 }}>{new Date().getFullYear()}               </span></Col>
                <Col xs="6" ><div style={{ fontSize: 'auto' }} > {quote ? quote.quote : ''} <br /> {quote ? quote.author : ''}</div></Col>



                <Col xs="3"><span style={{ position: 'absolute', bottom: 0 }}>Mehdi Nourollah</span></Col>
              </Row>
            </Container>
            : <> <span>{new Date().getFullYear()}               </span>
              <span>Mehdi Nourollah</span>
            </>}
          </div>
          </div>
          {/* <div className="footer__inner">
            <div className="footer__content">
            </div>
          </div>
          <div className="footer__inner">
            <div className="footer__content">
            </div>
          </div> */}
        </footer>

      </div>

    );
  }
}
export default Footer;
