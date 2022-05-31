
const Input = ({ onSubmit = null }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
