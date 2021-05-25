import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos } from '../../redux/actions/videos.action';


const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])

  const {videos} = useSelector(globalState => globalState.homeVideos)

  return(
    <Container>
      <CategoriesBar />
      <Row>
        {
          [videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key={video.id} />
            </Col>
          ))]
        }
      </Row>
    </Container>
  )
}

export default HomeScreen;