import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
// import { Navbar } from './components/Navbar';
// import { Home } from './pages/Home';
import {Navbar} from './pages/Navbar';
// import { SubHome } from './components/SubHome';
// import {Routes,Route} from 'react-router-dom'
// import { AboutUs } from './pages/AboutUs'; 
// import { ContactUs } from './pages/ContactUs';
// import { ContactUsDetail } from './pages/ContactUsDetail';
// import { Electronics } from './pages/Electronics';
// import { Fashion } from './pages/Fashion';
// import { Groc } from './pages/Groc';
// import { SimpleForm } from './components/SimpleForm';
// import { EmployeeRegistration } from './components/EmployeeRegistration';
// import { ApiDemo } from './api/ApiDemo';
 import { ApiDemo3 } from "./api/ApiDemo3";
        


// import { FileUpload } from "./components/FileUpload";
// import { SelectDemo } from "./components/SelectDemo";

// import { ApiDemo } from "./api/ApiDemo";
// import { ApiDemo2 } from "./api/ApiDemo2";

function App() {

  // var title = "whatever"

  return (
    <>
    <div>
      <Navbar/>
    {/* <SelectDemo/> 
      <ApiDemo/>
       <EmployeeRegistration/>
        
      <ApiDemo2/>
       <FileUpload/> */}
      <ApiDemo3/>
      <Login/> 
     

      {/* <Routes>
        <Route path ="/home" element = {<Home/>}></Route>
        <Route path ="/aboutus" element = {<AboutUs/>}></Route>
        <Route path ="/contactus" element = {<ContactUs/>}></Route>
        <Route path ="/contactus/:id" element = {<ContactUsDetail/>}></Route>
        <Route path ="/eletronics" element = {<Electronics/>}></Route>
        <Route path ="/fashion" element = {<Fashion/>}></Route>
        <Route path ="/g" element = {<Groc/>}></Route>
        <Route path ="/simpleform" element = {<SimpleForm/>}></Route>
      </Routes> */}

    </div>
      </>
  );
}

export default App;
