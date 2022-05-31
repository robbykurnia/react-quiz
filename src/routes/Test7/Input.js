import DATA from "./_data"
import { useTable } from "./TableContext"
const Input = () => {
  const { setData } = useTable()

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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
