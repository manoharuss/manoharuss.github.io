import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import topographyHomeImg from '../../../../Assets/Images/Topography/Mountain.jpg';
import topographyScoreImg from '../../../../Assets/Images/Topography/Score.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.75)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class TopographyImages extends Component {
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
        <VoistrapPhoneScore src={topographyScoreImg} scroll={scrollPercent} alt="topographyScore" />
        <VoistrapPhoneHome src={topographyHomeImg} scroll={scrollPercent} alt="topographyHome" />
      </React.Fragment>
    );
  }
}

TopographyImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TopographyImages;
