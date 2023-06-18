import "./list.scss"
import Sidebar from "../../item/sidebar/Sidebar"
import Navbar from "../../item/navbar/Navbar"
import DataTable from "../../item/datatable/DataTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List