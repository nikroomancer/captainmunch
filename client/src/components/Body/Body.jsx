import React, { Component } from 'react';
import { Row } from '../../styled-components/grid';
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
                <MainInnerContainer xs="12">
                  Scroll Up and Down this page to see the parallax scrolling
                  effect. This div is just here to enable scrolling. Tip: Try to
                  remove the background-attachment property to remove the
                  scrolling effect.
                </MainInnerContainer>
              </Row>
            </ContentContainer>
          </MainContainer>
        </Row>
      </div>
    );
  }
}
