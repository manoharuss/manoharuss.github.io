import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import clusterGroupingImg from '../../../../Assets/Images/Clustering/ClusterGrouping.png';
import clusterMapImg from '../../../../Assets/Images/Clustering/ClusterMap.png';


const ClusterMap = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.55)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left;
left: 2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const ClusterGrouping = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
transform-origin: left;
left: 13vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class ClusteringImages extends Component {
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
        <ClusterGrouping src={clusterGroupingImg} scroll={scrollPercent} alt="clusterGrouping" />
        <ClusterMap src={clusterMapImg} scroll={scrollPercent} alt="clusterMap" />
      </React.Fragment>
    );
  }
}

ClusteringImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ClusteringImages;
