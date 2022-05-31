import { cssModal } from "./style"

const Modal = ({ onReset, data }) => {
  return (
    <div className={cssModal}>
      Name: {data?.name}
      <br />
      Age: {data?.age}
      <br />
      Address: {data?.address}
      <br />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Modal;
