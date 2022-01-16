import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import teslaHeatImg from '../../../../Assets/Images/Tesla/Heat.png';
import teslaBatteryImg from '../../../../Assets/Images/Tesla/Battery.png';


const Heat = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.85)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:-1vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Battery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.55)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:-7vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class TeslaImages extends Component {
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
        <Battery src={teslaBatteryImg} scroll={scrollPercent} alt="teslaBattery" />
        <Heat src={teslaHeatImg} scroll={scrollPercent} alt="teslaHeat" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
