import React, { Component } from 'react';
import { Row, Column } from '../../styled-components/grid';
import {
  Nav,
  NavContainer,
  NavBrand,
  NavLinks
} from '../../styled-components/Nav';

export default class Navbar extends Component {
  scrollToSection = section => {
    if (section !== 'top') {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const element = document.getElementById('MainContainer');
      element.scrollTop = 0;
    }
  };

  render() {
    const { change } = this.props.change;
    return (
      <div>
        <Row>
          <Column xs="12">
            <Nav change={this.props.change}>
              <NavContainer>
                <NavBrand onClick={() => this.scrollToSection('top')}>
                  Captain Munch
                </NavBrand>
                <NavLinks>
                  <ul>
                    <li>
                      <a onClick={() => this.scrollToSection('about')}>
                        Om Oss
                      </a>
                    </li>
                    <li>
                      <a>Köp</a>
                    </li>
                  </ul>
                </NavLinks>
              </NavContainer>
            </Nav>
          </Column>
        </Row>
      </div>
    );
  }
}
