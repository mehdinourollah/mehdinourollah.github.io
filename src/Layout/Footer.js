import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

class Footer extends React.Component {
  constructor(props) {
    // Init props and state
    super(props);
    this.state = { quote: null };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch

    fetch("https://quotes.rest/qod.json")
      .then((response) => response.json())
      .then((data) => {
        try {
          this.setState({ quote: data.contents.quotes[0] });
        } catch {}
      });
  }
  render(props) {
    const { quote } = this.state;
    const divStyle = {
      color: "blue",
    };
    return (
      <div>
        <footer className="footer">
          <div >
            <div >
              
                <Container >
                  <Row style={{alignItems:'center',justifyContent:'space-around'}}>
                    <Col xs="2">
                      <span >
                        {new Date().getFullYear()}{" "}
                      </span>
                    </Col>
                    <Col xs="8">
                      <div style={{ fontSize: "auto" }}>
                        {" "}
                        {quote ? quote.quote : ""} <br />{" "}
                        {quote ? quote.author : ""}
                      </div>
                    </Col>

                    <Col xs="2">
                      <span >
                        Mehdi Nourollah
                      </span>
                    </Col>
                  </Row>
                </Container>
            
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
