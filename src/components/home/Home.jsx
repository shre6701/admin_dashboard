import Chart from "../../item/chart/Chart"
import Featured from "../../item/featured/Featured"
import Navbar from "../../item/navbar/Navbar"
import Sidebar from "../../item/sidebar/Sidebar"
import Tables from "../../item/table/Tables"
import Widgets from "../../item/widget/Widgets"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
         <Sidebar />
         <div className="homeContainer">
         <Navbar />
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
         
         <div className="charts">
          <Featured/>
          <Chart title="Last 6 months (Revenue)" aspect={2 / 1}/>
         </div>
         <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <Tables/>
         </div>
         </div>
    </div>
  )
}

export default Home