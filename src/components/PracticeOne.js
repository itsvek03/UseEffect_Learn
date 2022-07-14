import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PracticeOne() {
  const [value, setvalue] = useState([])
  const [Id, setId] = useState(1)
  const [postData, setPostData] = useState({})
  const [buttonClick, setButtonClick] = useState(1)

  // Render Only Once
  useEffect(() => {
    async function getdata() {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      console.log(data)
      setvalue(data)
    }
    getdata()
  }, [])

  // Render based on condition (Id)
  // useEffect(() => {
  //   async function getDataById() {
  //     const { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${Id}`,
  //     )
  //     setPostData(data)
  //   }
  //   getDataById()
  // }, [Id])

  // Render based on condition (Buuton Click)
  useEffect(() => {
    async function getDataById() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${buttonClick}`,
      )
      setPostData(data)
    }
    getDataById()
  }, [buttonClick])

  const handleChange = () => {
    setButtonClick(Id)
  }

  return (
    <div>
      {value.length === 0
        ? 'No data is found'
        : value.map((item) => {
            return (
              <ul key={item.id}>
                <li>{item.name}</li>
              </ul>
            )
          })}

      <input
        type="text"
        name="Id"
        value={Id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleChange}>Fetch Details</button>

      <h1>{postData.id}</h1>
      <h1>{postData.title}</h1>
      <h1>{postData.body}</h1>
    </div>
  )
}
