import React, { Component } from 'react';
import { Row } from '../../../styled-components/grid';
import {
  MainInnerContainer,
  ContentContainer
} from '../../../styled-components/Main';

export default class About extends Component {
  render() {
    return (
      <MainInnerContainer xs="12" id="about">
        <h2 className="title">Om Captain Munch</h2>
      </MainInnerContainer>
    );
  }
}
