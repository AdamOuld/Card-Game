import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Main.css'

function Main(props) {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState([])

  useEffect(() => {
    fetch("/data.json")  // Adjust the path based on your public directory
      .then((response) => response.json())
      .then((d) => setData(d));
  }, []);


  return (
    <div className='main'>
      {data ? (
        data.map((item, index) => (
          <Card name = {item.name}
          item = {item}
          key = {index}
          image = {item.image}
          checked = {checked}
          setChecked={setChecked}
          currScore={props.currScore} 
          bestScore={props.bestScore} 
          setCurrScore={props.setCurrScore} 
          setBestScore={props.setBestScore}
          data = {data}
          setData = {setData}/>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;