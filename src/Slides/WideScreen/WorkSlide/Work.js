import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Topographic Prominence',
        projectDesc: 'Mountains on Mapbox map are tiled based on elevation and distance from one another.',
        projectType: 'PySpark',
        roles: ['Map data engineer', 'Cartography'],
      },
      {
        number: '02',
        projectName: 'Road icons',
        projectDesc: 'Roads on Mapbox map are styled with interpolated icons along the road geometry.',
        projectType: 'PySpark',
        roles: ['Data engineer', 'Cartography'],
      },
      {
        number: '03',
        projectName: 'Fast Dynamic clustering',
        projectDesc: 'Dense point dataset are buffered and polygons are merged for fast & at scale spatial clustering.',
        projectType: 'PySpark',
        roles: ['Data engineer', 'Geospatial'],
      },
      {
        number: '04',
        projectName: 'Profiling',
        projectDesc: 'Flamegraphs are a data driven method to profile performance of Python/Pyspark jobs and improve code run time.',
        projectType: 'Python',
        roles: ['Data engineer', 'Performance'],
      },
      {
        number: '05',
        projectName: 'Line unioning & simplification',
        projectDesc: 'Mapbox Vector tiles are reduced by unioning geometries and reducing vertices for lower download bandwidth.',
        projectType: 'Pyspark',
        roles: ['Data engineer', 'Performance'],
      },
      {
        number: '06',
        projectName: 'Voistrap demo',
        projectDesc: 'Web app project to give workplace insights using indoor localization, voice and schedule.',
        projectType: 'WEB APP',
        roles: ['Full Stack Developer', 'UI Designer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
