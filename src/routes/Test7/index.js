import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";
import TableContext from './TableContext';

const Test7 = () => {
  useRenderLog('Test7', 1);

  return (
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <TableContext>
        <Input />
        <div>
          <Table />
        </div>
      </TableContext>
    </div>
  )
}

export default Test7;