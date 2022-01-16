import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import legacyTile from '../../../../Assets/Images/Tilesize/LegacyTile.png';
import optimizedTile from '../../../../Assets/Images/Tilesize/OptimizedTile.png';

const OptimizedTile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-220vh;
left: 2vw;
transform-origin: left center;
/* border: 1px dashed red; */
height: 70vh;

`;

const LegacyTile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -210vh;
right: 3vw;
transform-origin: right center;
/* border: 1px dashed red; */
filter: blur(0.6px);
height: 70vh; 
`;

class TilesizeImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    // console.log('Voistrap scrollOffsetPercent ', scrollOffsetInPercent);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('Voistrap');
    }
    return (
      <React.Fragment>
        <LegacyTile src={legacyTile} scroll={scrollPercent} alt="legacyTile" />
        <OptimizedTile src={optimizedTile} scroll={scrollPercent} alt="optimizedTile" />
      </React.Fragment>
    );
  }
}

TilesizeImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TilesizeImages;
