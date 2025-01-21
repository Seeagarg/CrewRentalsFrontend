import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './components/Pages/Home';
import Header from './components/Pages/Header';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import RoleSelectionPage from './components/Pages/RoleSelectionPage';
import LabourForm from './components/Pages/LabourForm';
import ContractorForm from './components/Pages/ContractorForm';
import EngineerForm from './components/Pages/EngineerForm';
import GroupOfWorkerForm from './components/Pages/GroupOfWorkerForm';
import RentalProviderForm from './components/Pages/RentalProviderForm';
import ProductRegister from './components/Pages/ProductRegister';
import RoleSelectionPageHome from './components/Pages/RoleSelectionPageHome';
import WorkersPage from './components/Pages/WorkersPage';
import GroupOfWorkers from './components/Pages/GroupOfWorkers';
import Contractors from './components/Pages/Contractors';
import AdminLabour from './components/Pages/AdminLabour';
import MapForm from './components/Pages/MapForm';
import ThreedmapHouse from './components/Pages/ThreedmapHouse';
import PixisAi from './components/3DModel/PixisAi';
import Contact from './components/Pages/Contact';
import EngineerPage from './components/Pages/EngineerPage';

import AiChat from './chat/AiChat';
import ProfileDashbord from './components/Pages/Profile/ProfileDashbord';
import UserDashbord from './components/Pages/Profile/UserDashbord';
import AccountProvider from './context/AccountProvider';
import Product from './components/Product/Product';
import ProductDashboard from './components/Product/ProductDashboard';
import PrivateComponent from './components/PrivateComponent';
import AdminDashboard from './components/Admin/AdminDashboard';
import WorkersList from './components/Admin/Workers/WorkersList';

//Routes for message component
import ChatDialog from './message/ChatDialog';


import Register from './components/Pages/register/Register';
import Footer from './components/Footer';



import AdminWorker from './components/Admin/AdminWorker';

import WorkerProfile from './components/Admin/Workers/WorkerProfile';
import GroupOfWorkerList from './components/Admin/GroupOfWorkers/GroupOfWorkerList';
import GroupProfile from './components/Admin/GroupOfWorkers/GroupProfile';
import ContractorList from './components/Admin/Contractor/ContractorList';
import Contractor from './components/Admin/Contractor/Contractor';
import ContractorProfile from './components/Admin/Contractor/ContractorProfile';
import RentalProducts from './components/Admin/RentalProducts/RentalProducts';
import AboutProducts from './components/Admin/RentalProducts/AboutProducts';
import Engineers from './components/Admin/Engineers/Engineers';
import EngineerProfile from './components/Admin/Engineers/EngineerProfile';
import Providers from './components/Admin/ProductProvider/Providers';
import ProviderProfile from './components/Admin/ProductProvider/ProviderProfile';

// import WorkerProfile from './components/Admin/WorkerProfile';


function App() {
  return (
    <>
  <BrowserRouter>
  <AccountProvider>
    <Routes>     
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route  element={<PrivateComponent/>} >
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/roleSelectionPage" element={<RoleSelectionPage/>}/>
      <Route path="/labourForm" element={<LabourForm/>}/>
      <Route path="/contractorForm" element={<ContractorForm/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="/rentalProviderForm" element={<RentalProviderForm/>}/>
      <Route path="/productRegister" element={<ProductRegister/>}/>
      <Route path="/roleSelectionPageHome" element={<RoleSelectionPageHome/>}/>
      <Route path="/workersPage" element={<WorkersPage/>}/>
      <Route path="/groupOfWorkers" element={<GroupOfWorkers/>}/>
      <Route path="/contractors" element={<Contractors/>}/>
      <Route path="/adminLabour" element={<AdminLabour/>}/>
      <Route path="/profileDashbord" element={<ProfileDashbord/>}/>
      <Route path="/userDashbord" element={<UserDashbord/>}/>
      <Route path="/mapForm" element={<MapForm/>}/>
      <Route path="/ThreedmapHouse" element={<ThreedmapHouse/>}/>
      <Route path="/aiChat" element={<AiChat/>}/>
      <Route path="/pixisAi" element={<PixisAi/>}/>
      <Route path="/EngineerPage" element={<EngineerPage/>}/>
      <Route path="/productDashboard" element={<ProductDashboard/>}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      <Route path="/workerProfile" element={<WorkerProfile/>}/>
      <Route path="/engineerForm" element={<EngineerForm/>}/>
      <Route path="/groupOfWorkerForm" element={<GroupOfWorkerForm/>}/>
      
      {/* <Route  path='/adminWorkers' element={<AdminWorker/>}> </Route> */}

      <Route path="/contact" element={<Contact/>}/>
      <Route path="/adminWorkers" element={<WorkersList/>}></Route>
      <Route path="/adminGroupOfWorkersList" element={<GroupOfWorkerList/>}></Route>
      <Route path="/groupProfile" element={<GroupProfile/>}></Route>
      <Route path="/ContractorList" element={<Contractor/>}></Route>
      <Route path="/contractorProfile" element={<ContractorProfile/>}></Route>
      <Route path="/rentalProducts" element={<RentalProducts/>}></Route>
      <Route path="/aboutProduct" element={<AboutProducts/>}></Route>
      <Route path="/Engineers" element={<Engineers/>}></Route>
      <Route path="/engineerProfile" element={<EngineerProfile/>}></Route>
      <Route path="/providers" element={<Providers/>}></Route>
      <Route path="/providerProfile" element={<ProviderProfile/>}></Route>
      <Route  path='chatDialog' element={<ChatDialog/>}> </Route>

      {/* <Route path="/Product" element={<Product/>}/> */}
      </Route>
     
    
    </Routes>
    </AccountProvider>
  </BrowserRouter>
  
    
  
  
  </>
    
  );
}

export default App;


