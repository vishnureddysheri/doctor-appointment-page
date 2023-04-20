import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPat from './components/serchPat';
import IndexHome from './components/IndexHome';
import UserLogin from './components/UserLogin';
import ContactUs from './components/ContactUs'
import ViewAll from './components/ViewAll';
import Registration from './components/Registration';
import DoctorLogin from './components/DoctorLogin';
import DoctorAfterLogin from './components/DoctorAfterLogin';
import UserAfterLogin from './components/Userafterlogin';
import DoctorReg from './components/DoctorRegistaration';
import Logout from './components/Logout';
import Registration1 from './components/patientregistration';
import Search from './components/search';
import Delete from './components/Delete';
import Viewalldoctor from './components/viewalldoctor';
import Patients from './components/ViewAllAppointments';
import PatDelete from './components/DeletePath';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Home" element={<Registration/>}/>
          <Route path="/adminviewalluser" element={<ViewAll/>}/>
         <Route path="/doctorlogin" element={<DoctorLogin/>}/>
         <Route path="/doctorafterlogin" element={<DoctorAfterLogin/>}/>
         <Route path="/userafterlogin" element={<UserAfterLogin/>}/>
         <Route path="/DoctorReg" element={<DoctorReg/>}/>
         <Route path="/Logout" element={<Logout/>}/>
         <Route path="/register" element={<Registration1/>}/>
         <Route path="/search1" element={<Search/>}/>
         <Route path="/Delete1" element={<Delete/>}/>
         <Route path="/Viewall" element={<Viewalldoctor/>}/>
         <Route path="/Patient" element={<Patients/>}/>
         <Route path="/Patientdelete" element={<PatDelete/>}/>
         <Route path="/Patsearch" element={<SearchPat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
