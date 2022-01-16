import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vizinspect from '../../../../Assets/Images/Visualization/VizInspect.png';
import vizmap from '../../../../Assets/Images/Visualization/VizMap.png';


const VizInspect = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 25}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-210vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
width: 80vw;
`;

const VizMap = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
bottom:-160vh;
left:2vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
`;


class VizMapImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <VizMap src={vizmap} scroll={scrollPercent} alt="vizmap" />
        <VizInspect src={vizinspect} scroll={scrollPercent} alt="vizinspect" />
      </React.Fragment>
    );
  }
}

VizMapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VizMapImages;
