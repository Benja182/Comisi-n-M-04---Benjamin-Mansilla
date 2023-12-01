// Home.js
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container className="mt-4">
      <Jumbotron>
        <h1>Welcome to Travel Platform</h1>
        <p>
          Share your travel experiences and discover unique stories from passionate travelers.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Home;
