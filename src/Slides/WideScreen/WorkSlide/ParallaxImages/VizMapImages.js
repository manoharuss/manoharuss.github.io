import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vizinspect from '../../../../Assets/Images/Visualization/VizInspect.png';
import vizmap from '../../../../Assets/Images/Visualization/VizMap.png';



const VizMap = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
transform-origin: right center;
right:4vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const VizInspect = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
transform-origin: right center;
right:8vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class VizMapImages extends Component {
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
