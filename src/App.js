import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [personInfo, setPersonInfo] = useState({ firstName: '', lastName: '' })
  const [movieList, setMovieList] = useState([])

  let movieTextBox = React.createRef()
  // const incremenet = () => {
  //   setCount((prevCount) => prevCount + 1)
  // }

  const changePersonInfo = (key, e) => {
    setPersonInfo({ ...personInfo, [key]: e.target.value })
  }

  const addMovie = (e) => {
    setMovieList([...movieList, movieTextBox.current.value])
  }

  return (
    <div className="App">
      {/* <button onClick={incremenet}>Click Me</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
      <h1>Count Clicked times :{count}</h1>

      <div>
        <input
          type="text"
          name="firstName"
          value={personInfo.firstName}
          onChange={(e) => changePersonInfo(e.target.name, e)}
        />
        <input
          type="text"
          name="lastName"
          value={personInfo.lastName}
          onChange={(e) => changePersonInfo(e.target.name, e)}
        />

        <h1>First Name is : {personInfo.firstName}</h1>
        <h1>Last Name is : {personInfo.lastName}</h1>

        <h1>Add your favourite Movie List</h1>

        <input type="text" name="Movie" ref={movieTextBox}></input>
        <button onClick={(e) => addMovie(e)}>Add the Movie</button>

        {movieList.length === 0 ? (
          'No movie is added to list'
        ) : (
          <ul>
            {movieList.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App

// Project => weather app
