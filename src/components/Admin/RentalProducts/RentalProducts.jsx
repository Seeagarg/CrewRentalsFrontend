import React,{useState,useEffect} from 'react';
import { json, useLocation } from 'react-router-dom';
// import { getProductProvider } from '../../service/api';
import { getAllProductProvider, getAllProducts, getProduct, getProductProvider } from '../../../service/api';
import HeaderAdmin from '../HeaderAdmin';
import Header from '../../Pages/Header';
import Footer from '../../Footer';
import RentalProductList from './RentalProductList';
import Spinner from '../../Spinner';

function RentalProducts() {
  
    const [products,setProducts]=useState([]);
    const [productProvider, setProductProvider]=useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        getProducts();
        getProductProvider();
        
  },[])

     const getProducts= async()=>{
          let result= await getAllProducts();
            
              console.log("result is ",result);
            setProducts(result.data);
            setLoading(true);
     }

     const getProductProvider= async()=>{
      let result= await getAllProductProvider();
          console.log("result is ",result.data);
        setProductProvider(result.data);
 }

  return (
    <div>
    <HeaderAdmin/>
             <div className="container p-2 mb-3 text-center" style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">List of Products ....</p>

             <div className="row p-1 pb-1 m-2  fw-bold" style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}}>
              <div className="col">
              <p className="fs-5">Product</p> 
              </div>
              <div className="col">
              <p className="fs-5">Category</p> 
              </div>
              <div className="col">
              <p className="fs-5">Company</p> 
              </div>
              <div className="col">
              <p className="fs-5">Price</p> 
              </div>
      
              <div className="col">
                <p className="fs-5">Verified/not Verified</p>
              </div>
             </div>
             {
              loading?
              products.map((product)=>{
                return(
                  <>
                  <RentalProductList key={products._id} product={product}/>
                  </>
                )
              }):<Spinner/>
             }
             </div>
             <Footer/>
      
    </div>
  )
}

export default RentalProducts
