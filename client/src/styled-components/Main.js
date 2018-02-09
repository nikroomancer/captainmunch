import styled from 'styled-components';
import { Column } from './grid';
import heroimage from '../img/heroimage.jpg';

export const MainContainer = Column.extend`
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ParallaxContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  height: 100vh;
  transform: translateZ(-4px) scale(5);
  z-index: -2;
  background-image: url(${heroimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export const ParallaxContainerOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: translateZ(-4px) scale(5);
  z-index: -2;
  width: 100%;
  background: linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ParallaxText = styled.div`
  position: absolute;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  margin-top: 15%;
  h1 {
    text-align: center;
    font-size: 5rem;
  }
  p {
    text-align: center;
    font-size: 2rem;
  }
`;

export const ContentContainer = styled.div`
  display: block;
  position: relative;
  background-color: white;
  z-index: 1;
  height: 1000px;
`;

export const MainInnerContainer = Column.extend`
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: ${props => props.theme.MainInnerContainer.padding};
  padding-left: ${props => props.theme.MainInnerContainer.paddingLeft};
  padding-right: ${props => props.theme.MainInnerContainer.paddingRight};
`;
