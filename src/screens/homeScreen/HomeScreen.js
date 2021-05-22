import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';

const HomeScreen = () => {
  const videos = [...new Array(20)]
  return(
    <Container>
      <CategoriesBar />
      <Row>
        {
          [videos.map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))]
        }
      </Row>
    </Container>
  )
}

export default HomeScreen;