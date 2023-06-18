export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
  },
];

export const userRows = [
  {
    id: 1,
    lastName: "Snow",
    status: "active",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Jon",
    email: "issnow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    lastName: "Lannister",
    status: "active",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Cersei",
    email: "issgmail.com",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    status: "passive",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Jaime",
    email: "ertw@gmail.com",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    status: "active",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Arya",
    email: "arya23@gmail.com",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    status: "active",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Daenerys",
    email: "arnay@gmail.com",
    age: 22,
  },
  {
    id: 6,
    lastName: "Melisandre",
    status: "passive",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: null,
    email: "werv3@gmail.com",
    age: 150,
  },
  {
    id: 7,
    lastName: "Clifford",
    status: "passive",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Ferrara",
    email: "eqe@gmail.com",
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    status: "active",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Rossini",
    email: "ross2@gmail.com",
    age: 36,
  },
  {
    id: 9,
    lastName: "Roxie",
    status: "passive",
    img: "https://images.pexels.com/photos/11713104/pexels-photo-11713104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    firstName: "Harvey",
    email: "harvspec11@gmail.com",
    age: 65,
  },
];
