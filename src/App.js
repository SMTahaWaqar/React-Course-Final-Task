import axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';
import BasicExample from './components/Navbar';
import TestExample from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Status from './components/Status';


function App() {

  const [info, setInfo] = useState();

  const [data, setData] = useState(false);

  const getData = () => {
    axios.get("http://localhost:8080/data")
    .then(res => {
      const displayInfo = res.data;
      setInfo(displayInfo);
    })
    .catch(err => console.error(err))
  }

  const sendData = (data) => {
    setData(data)
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <BrowserRouter>
      <BasicExample data={data}/>
      <Routes>
        <Route exact path="/" element={<TestExample info={info}/>} />
        <Route exact path="/login" element={<Login sendData={sendData}/>} /> 
        <Route exact path="/status" element={<Status />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
