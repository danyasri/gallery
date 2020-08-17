import React from 'react';
import logo from './logo.svg';
import './App.css';

const files = ['img1.JPG', 'img2.jpg', 'img3.png', 'img7.png', 'img11.png', 'img12.png', 'img5.png', 'img6.png', 'img3.jpg', 'img4.png', 'img8.png', 'img9.png', 'img10.png', 'img13.png', 'img14.jpg', 'img15.png'];
const Image = ({src}) => <img src={`images/${src}`}></img>;
const Gallery = ({images}) => images.map((src) => <Image src={src} />);
function App() {
  return (
    <div className="App">
      <Gallery images={files} />
    </div>
  );
}

export default App;
