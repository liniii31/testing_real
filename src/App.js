import React,{useState}  from 'react';
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/dashboard/dashboard';
import AddProperty from './components/commonPost/addProperty';
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetail";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [formData, setFormData] = useState({
    propertyType: "",
    negotable: "",
    price: '',
    ownership: "",
    propertyAge: "",
    propertyApproved: "",
    propertyDescription: "",
    bankLoan: "",
    length: '',
    breath: '',
    totalArea: '',
    areaUnit: "",
    noOfBHK: '',
    noOfFloor: '',
    attached: "",
    western: "",
    furnished: "",
    carParking: "",
    lift: "",
    electricity: "",
    facing: "",
    name: "",
    mobile: '',
    postedBy: "",
    saleType: "",
    featuredPackage: "",
    ppdPackage: "",
    email: "",
    city: "",
    area: "",
    pincode: '',
    address: "",
    landmark: "",
    latitude: "",
    longitude: ""
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <Login/> }/>
        <Route  path="/signup" element={ <Signup/> }/>
        <Route  path="/dashboard" element={<Dashboard />}/>
        <Route  path="/postProperty" element={<AddProperty/>}/>
        <Route path="/basic-info" element={
          
          <BasicInfo
            formData={formData} setFormData={setFormData}
          />
        
      } />
      <Route path="/property-detail" element={
    
          <PropertyDetail
            formData={formData} setFormData={setFormData}
          />
      
      } />
      <Route path="/general-info" element={
       
          <GeneralInfo
            formData={formData} setFormData={setFormData}
          />
      

      } />
      <Route path="/location-info" element={
     
          <LocationInfo
            formData={formData} setFormData={setFormData}
          />
      
      } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
