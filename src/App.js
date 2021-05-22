import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
