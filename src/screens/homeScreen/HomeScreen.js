import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Container, Row, Col } from 'react-bootstrap';

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';


const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])

  const {videos, activeCategory} = useSelector(globalState => globalState.homeVideos)

  const fetchData = () => {
    if(activeCategory ==="ALL")
    dispatch(getPopularVideos())
    else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  return(
    <Container>
      <CategoriesBar/>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div className='spinner-border text-danger d-block mx-auto'></div>}
        >
          <Row>
            {videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
            ))}
          </Row>
        </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen;