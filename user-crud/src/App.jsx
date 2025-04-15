import "./App.css";
import FormInupt from "./components/FormInupt";
import { Routes, Route } from "react-router";
import Body from "./components/Body";
import ReadComponent from './components/ReadComponent'
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Body />}>
          {/* <Route path="/" element={< Home />} /> */}
          <Route path="/" element={<FormInupt />} />
          <Route path="/read" element={<ReadComponent />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
