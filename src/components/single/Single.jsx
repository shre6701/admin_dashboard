import "./single.scss";
import Sidebar from "../../item/sidebar/Sidebar";
import Navbar from "../../item/navbar/Navbar";
import Chart from "../../item/chart/Chart";
import Tables from "../../item/table/Tables"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singlecontainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Ann Mryk</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">annmryk33@gmail.com</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 23442 12332</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">NewYork</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title= "User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
