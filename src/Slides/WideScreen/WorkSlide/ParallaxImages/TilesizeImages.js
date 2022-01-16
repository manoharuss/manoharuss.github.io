import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import legacyTile from '../../../../Assets/Images/Tilesize/LegacyTile.png';
import optimizedTile from '../../../../Assets/Images/Tilesize/OptimizedTile.png';




const OptimizedTile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:1vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const LegacyTile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:3vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class TilesizeImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;
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
