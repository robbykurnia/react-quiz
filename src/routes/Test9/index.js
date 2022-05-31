import Solar from "./Solar";
import { useState } from 'react'
const Test9 = () => {
  const [value, setValue] = useState('')
  const [planets, setPlanets] = useState([])
  const handleChange = (e) => {
    const val = Number(e.currentTarget.value)
    setValue(Number(e.currentTarget.value))
    const nextPlanets = []
    for (let i = 0; i < val; i += 1) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      nextPlanets.push(randomColor)
    }
    setPlanets(nextPlanets)
    console.log('nextLust', nextPlanets)
  }
  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" placeholder="number of planet" value={value} onChange={handleChange} />
      <Solar planets={planets} />
    </>
  )
}

export default Test9;