import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import topographyHomeImg from '../../../../Assets/Images/Topography/Mountain.png';
import topographyScoreImg from '../../../../Assets/Images/Topography/Score.png';



const TopographyHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.55)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left;
left:4vw;
/* border: 1px dashed red; */
height: 80vh; 
`;


const TopographyScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
transform-origin: left;
left:10vw;
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
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <TopographyScore src={topographyScoreImg} scroll={scrollPercent} alt="topographyScore" />
        <TopographyHome src={topographyHomeImg} scroll={scrollPercent} alt="topographyHome" />
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
