
import { useTable } from 'react-table'
import { useFetchGifs } from '../hook/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

console.log(isLoading);
  return (
    <div>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando......</h2>)
        }
         <div className='card-grid'>
            {
                images.map( img => (
                <GifItem key={img.id}
                {...img}
                />
                ) )
            }
          </div>
    </div>
  )
}

//<Table columns={columns} data={images} />
// const columns = React.useMemo(
//   () => [
//     {
//       Header: 'Info',
//       columns: [
//         {
//           Header: 'id',
//           accessor: 'id',
//         },
//         {
//           Header: 'title',
//           accessor: 'title',
//         },
//         {
//           Header: 'url',
//           accessor: 'url',
//         },
//       ],
//     },
//   ],
//   []
// )
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }