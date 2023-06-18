import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Widgets = ({ type }) => {
  let data = {
    title: "UNKNOWN",
    isMoney: false,
    link: "Unknown widget",
    icon: null
  };

  let amount = 2000;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <Person2OutlinedIcon className="icon" style={{
        color: "crimson",
        backgroundColor: "rgba(255, 0,0, 0.2"}} />
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2"}}/>
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        icon: <MonetizationOnOutlinedIcon className="icon" 
        style={{
        color: "green",
        backgroundColor: "rgba(0, 128,0, 0.2"}} />
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "View balance",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" 
            style={{
        color: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2"}}
        />
      };
      break;
    default:
      break;
  }

  // Update amount and diff based on widget type
  if (type === "earning") {
    amount = 5000; // Example value for EARNING widget
    diff = 10; // Example value for EARNING widget
  } else if (type === "balance") {
    amount = 300; // Example value for BALANCE widget
    diff = -5; // Example value for BALANCE widget
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "Rs."} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff >= 0 ? "positive" : "negative"}`}>
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
