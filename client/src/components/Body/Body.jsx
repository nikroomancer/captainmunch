import React, { Component } from 'react';
import { Row } from '../../styled-components/grid';
import About from './About/About';
import {
  MainContainer,
  ParallaxContainer,
  ParallaxContainerOverlay,
  ParallaxText,
  ContentContainer,
  MainInnerContainer
} from '../../styled-components/Main';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Row>
          <MainContainer id="MainContainer" xs="12">
            <ParallaxContainer />
            <ParallaxContainerOverlay />
            <ParallaxText>
              <h1>Get Your Munch On</h1>
              <p>Beställ en munchbox idag!</p>
            </ParallaxText>
            <ContentContainer>
              <Row>
                <About />
              </Row>
            </ContentContainer>
          </MainContainer>
        </Row>
      </div>
    );
  }
}
