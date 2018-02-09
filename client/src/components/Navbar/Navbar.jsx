import React from 'react';
import { Row, Column } from '../../styled-components/grid';
import { Nav, NavContainer, NavBrand } from '../../styled-components/Nav';

export default function Navbar(props) {
  return (
    <div>
      <Row>
        <Column xs="12">
          <Nav change={props.change}>
            <NavContainer>
              <NavBrand>Captain Munch</NavBrand>
            </NavContainer>
          </Nav>
        </Column>
      </Row>
    </div>
  );
}
