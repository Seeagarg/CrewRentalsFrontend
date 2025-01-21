import React,{useState,useEffect} from 'react';
import { getAllProductProvider, getAllProducts, getProduct, getProductProvider } from '../../../service/api';
import HeaderAdmin from '../HeaderAdmin';
import Footer from '../../Footer';
import ProviderList from './ProviderList';
import Spinner from '../../Spinner';

function Providers() {
    const [productProvider, setProductProvider]=useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        // getProducts();
        getProductProviders();
        
  },[])
    const getProductProviders= async()=>{
        let result= await getAllProductProvider();
            // console.log("result is ",result.data);
          setProductProvider(result.data);
          setLoading(true);
   }
  return (
    <div>
      <HeaderAdmin/>
             <div className="container p-2 mb-3 text-center" style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">List of Workers ....</p>

             <div className="row p-1 pb-1 m-2  fw-bold" style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}}>
              <div className="col">
              <p className="fs-5">Name</p> 
              </div>
              <div className="col">
              <p className="fs-5">Adhar No.</p> 
              </div>
              <div className="col">
              <p className="fs-5">Address</p> 
              </div>
              <div className="col">
              <p className="fs-5">country</p> 
              </div>
              
              
              <div className="col">
                <p className="fs-5">Verified/not Verified</p>
              </div>
             </div>

             

             {
              loading?
              productProvider.map((provider)=>{
                return(
                  <>
                  <ProviderList key={provider._id} provider={provider}/>
                  </>
                )
              }):<Spinner/>
             }

             

             </div>
             <Footer/>
    </div>
  )
}

export default Providers
