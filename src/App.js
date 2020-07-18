import React, { useState } from 'react'
import { dummyData, dummyDataTwo } from './data'

const App = () => {
  return <Persons />
}

const Persons = ({ defaultData = dummyData }) => {
  const [data, setData] = useState([...dummyData])
  const [dataTwo, setDataTwo] = useState([...dummyDataTwo])

  function switchData() {
    setData([...dummyDataTwo])
  }

  function switchDataTwo() {
    setData([...dummyData])
  }

  return (
    <div>
      {data.map((dataArray) => (
        <ul key={dataArray.id}>
          <li>{dataArray.name}</li>
          <li>{dataArray.weapon}</li>
        </ul>
      ))}
      <button onClick={switchData}>Click me</button>
      <button onClick={switchDataTwo}>Click me</button>
    </div>
  )
}

export default App
