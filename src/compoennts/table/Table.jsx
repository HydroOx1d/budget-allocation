import React from 'react';
import { Table, Column, AutoSizer} from 'react-virtualized';
import "react-virtualized/styles.css";

const cellInput = (props, handleChangeInput) => {
  const monthData = Array.from(props.rowData.months).find(month => month.name.toLowerCase() === props.dataKey);

  return (
    <input
      style={{
        width: '100%',
        border: 'none'
      }}
      value={monthData.value}
      type='number'
      onChange={(e) => {
        const value = e.target.value
        const storeId = props.rowData.store.id;
        const monthId = monthData.id

        if (value < 0) {
          handleChangeInput(0, storeId, monthId);
          return;
        }

        handleChangeInput(value, storeId, monthId);
      }}
    />
  );
}

const TableComponent = ({ data }) => {
  const [tableData, setTableData] = React.useState([])
  
  React.useEffect(() => {
    setTableData(data)
  }, []);

  const handeChangeInput = (value, storeId, monthId) => {
    setTableData(tableData.map(store => {
      if(store.store.id === storeId) {
        return {
          ...store,
          months: store.months.map(month => {
            if(month.id === monthId) {
              return {
                ...month,
                value
              }
            }
            return month
          })
        }
      }
      return store
    }))
  }

  return (
    <div
      style={{
        overflowX: 'auto'
      }}
    >
        <Table
          width={1100}
          height={500}
          rowHeight={40}
          headerHeight={50}
          rowCount={tableData.length}
          rowGetter={({ index }) => tableData[index]}
        >
          <Column
            label="Store"
            dataKey="storeTitle"
            width={100}
            cellRenderer={(props) => {
              return <span>{props.rowData.store.name}</span>;
            }}
          />
          <Column
            label="Jan"
            dataKey="jan"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Feb"
            dataKey="feb"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Mar"
            dataKey="mar"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Apr"
            dataKey="apr"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="May"
            dataKey="may"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Jun"
            dataKey="jun"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Jul"
            dataKey="jul"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Aug"
            dataKey="aug"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Sep"
            dataKey="sep"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Oct"
            dataKey="oct"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Nov"
            dataKey="nov"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Dec"
            dataKey="dec"
            width={100}
            cellRenderer={(props) => cellInput(props, handeChangeInput)}
          />
          <Column
            label="Total"
            dataKey="total"
            width={200}
            cellRenderer={(props) => {
              let totalValue = Array.from(props.rowData.months)
                .map((month) => +month.value)
                .reduce((acc, value) => value + acc);

              return <span title={totalValue}>{totalValue}</span>;
            }}
          />
        </Table>
    </div>
  );
};

export default TableComponent