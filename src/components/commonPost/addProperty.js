import {  Routes, Route } from "react-router-dom";
import { useState } from "react";

//import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import BasicInfo from "../../BasicInfo";
import PropertyDetail from "../../PropertyDetail";
import GeneralInfo from "../../GeneralInfo";
import LocationInfo from "../../LocationInfo";
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
    
      <Routes>
        
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
    
  );
}

export default App;
