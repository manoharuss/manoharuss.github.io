import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flameGraphImg from '../../../../Assets/Images/Profiling/Flamegraph.png';
import runTimeImg from '../../../../Assets/Images/Profiling/Runtime.png';


const FlameGraph = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left;
left: 3vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const RunTime = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.35)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
transform-origin: left;
left: 8vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;


class ProfilingImages extends Component {
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
        <RunTime src={runTimeImg} scroll={scrollPercent} alt="runTime" />
        <FlameGraph src={flameGraphImg} scroll={scrollPercent} alt="flameGraph" />
      </React.Fragment>
    );
  }
}

ProfilingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ProfilingImages;
