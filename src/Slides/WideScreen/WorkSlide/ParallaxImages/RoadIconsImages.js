import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconsMapImg from '../../../../Assets/Images/Roadicons/IconsMap.png';
import iconsInspectImg from '../../../../Assets/Images/Roadicons/IconsInspect.png';

const IconsMap = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
transform-origin: right center;
right:7vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const IconsInspect = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
transform-origin: right center;
right:10vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class RoadIconsImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <IconsInspect src={iconsInspectImg} scroll={scrollPercent} alt="iconsInspect" />
        <IconsMap src={iconsMapImg} scroll={scrollPercent} alt="iconsMap" />
      </React.Fragment>
    );
  }
}

RoadIconsImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default RoadIconsImages;
