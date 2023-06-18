import Home from "./components/home/Home.jsx"
import Login from "./components/login/Login.jsx"
import List from "./components/list/List.jsx"
import Single from "./components/single/Single.jsx"
import New from "./components/new/New.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource.js"
import "./style/dark.scss";
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext.js"



function App() {

const {darkMode} = useContext(DarkModeContext)


  return (
    <div className={darkMode ? "app dark": "app"  }>
     <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index  element={<Home />} />
        <Route path = "login"  element={<Login />} />
        <Route path = "users">
          <Route index element={<List/>} />
          <Route path = ":userId"  element={<Single />} />
          <Route path = "new"  element={<New inputs= {userInputs} title="Add a new user" />} />
        </Route>
        <Route path = "products">
          <Route index element={<List/>} />
          <Route path = ":productId"  element={<Single />} />
          <Route path = "new"  element={<New inputs={productInputs} title="Add new Product" />} />
        </Route>

       </Route>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
