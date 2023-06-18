import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
  const rows = [
    {
      id: 1233144,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81yL4BWuwnL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Cal Kreak",
      date: "11 June",
      amount: 32445,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2334434,
      product: "Play Station 5",
      img: "https://m.media-amazon.com/images/I/51mWHXY8hyL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Zeak Landon",
      date: "30 May",
      amount: 87445,
      method: "Online Delivery",
      status: "Approved",
    },
    {
      id: 3134344,
      product: "Wireless stereo headset",
      customer: "Liam Stone",
      img: "https://m.media-amazon.com/images/I/71vhzgcnD+L._SX679_.jpg",
      date: "15 May",
      amount: 5445,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 3233144,
      product: "Coffee Table",
      customer: "Olive",
      img: "https://m.media-amazon.com/images/I/41hBtb3zK5L._AC_UL600_FMwebp_QL65_.jpg",
      date: "15 May",
      amount: 32445,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 3533144,
      product: "Ipad pro",
      customer: "Grace Stone",
      img: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_UY327_FMwebp_QL65_.jpg",
      date: "12 May",
      amount: 58445,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className="tableCell">Trackind ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}  </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} className="image" alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
