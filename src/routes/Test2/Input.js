const Input = ({ onChange = () => null }) => {
  return <input type="text" placeholder="input here" onChange={onChange} />
}

export default Input;
