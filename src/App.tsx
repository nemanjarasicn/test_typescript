
import  {TableData}    from   './Pages/table'
import  {CreateForm}    from   './Pages/createForm'
import  {Details}    from   './Pages/details'
import { Route, Routes,  BrowserRouter as Router} from "react-router-dom";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
    <Router>
        <Routes >
          <Route  path='/' element={<TableData/>} />
          <Route  path='/create' element={<CreateForm/>} />
          <Route  path='/details/:id' element={<Details/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;