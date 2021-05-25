import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getVideosByCategory } from '../../redux/actions/videos.action';

import './_categoriesBar.scss';


const keywords = [
  "All",
  "React Js",
  "Angular Js",
  "React Native",
  "Redux",
  "Music",
  "Guitar",
  "Barcelona",
  "Zlatan Ibrahimovic",
  "Fyodor Dostoevsky",
  "Javascript",
  "Node Js",
  "Coding",
  "Football",
  "Cricket",
  "Poor Coder",
  "Algorithm Art",
  "Gatsby",
  "Crime and Punishment",
  "Graphic Design",
  "Aldous Huxley",
  "The Brave New World",
  "The Brothers Karamazov",
  "Notes From Underground",
  "Franz Kafka",
  "Albert Camus",
  "The Idiot",
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState("All")

  const dispatch = useDispatch()
  const handleClick = (value) => {
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }


  return(
    <div className ="categoriesBar">
      {
        keywords.map((value, i) => (
          <span 
            key={i} 
            onClick={() => handleClick(value)}
            className={activeElement === value ? "active" : ''}
          >{value}
          </span>))
      }
    </div>
  )
}

export default CategoriesBar;