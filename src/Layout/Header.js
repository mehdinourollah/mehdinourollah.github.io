import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

function Header(props) {
  function myFunction() {

    if (document.body.className === 'dark-theme') {
      document.body.className = ''
    } else document.body.className = 'dark-theme'
  }
  return (


    <header className="header">
      <span className="header__inner">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <span className="logo__mark">#</span>
            <span className="logo__text" />
            <span className="logo__cursor" />
          </div>
        </a>
        <span className="header__right">
          {/* <nav class="menu">
                        <ul class="menu__inner">
                            <li><a href="/posts">posts</a></li>
                        </ul>
                    </nav> */}
          <Container>
            <Row>
              <Col>
                <span className="menu-trigger hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                  </svg>
                </span>
                <span className="theme-toggle" onClick={myFunction}><svg className="theme-toggler" width={24} height={24} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
  3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
  13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" />
                </svg>
                </span>
              </Col>
              <Col>
                <a href="https://registry.jsonresume.org/mehdinourollah?theme=StackOverFlow"><span ><b>CV</b></span></a>
              </Col>
            </Row>
          </Container>
        </span>

      </span>
    </header>


  );
}

export default Header;
