import React from 'react';
import '../styles/Card.css';

function Card(props) {
  const handleCardClick = (item) => {
    if (props.checked.includes(item)) {
        props.setChecked([]);
        if (props.currScore > props.bestScore) {
            props.setBestScore(props.currScore);
        }
        props.setCurrScore(0);
    } else {
        props.setChecked((prevChecked) => [...prevChecked, item]);
        props.setCurrScore((prevScore) => prevScore + 1);
    }
    props.setData((prevData) => shuffle([...prevData]));  
  };

  return (
    <div className='card' onClick={() => handleCardClick(props.item)}>
      <p>{props.name}</p>
      <img src={props.image} width="200px" height="200px" alt={props.name} />
    </div>
  );
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export default Card;