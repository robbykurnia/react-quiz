import { useState } from 'react'
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";

const Test4 = () => {
  const [data, setData] = useState(DATA)

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.currentTarget[0].value
    const matcher = new RegExp(inputValue, 'gi');
    const nextData = DATA.filter(item => {
      if (item.name.match(matcher)?.length) {
        return item
      }
      return null
    })
    setData(nextData)
  }

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onSubmit={handleSubmit} />
      <div>
        <Table data={data} />
      </div>
    </div>
  )
}

export default Test4;