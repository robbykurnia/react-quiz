const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <th>{item.name}</th>
            <th>{item.age}</th>
            <th>{item.address}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
