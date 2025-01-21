import React, { useEffect, useState } from 'react';
import "../../css/Groupworkers.css";
import Header from "../Pages/Header"
import Footer from "../Footer";
import { getAllProducts, getAllProductProvider , filterProduct } from '../../service/api';
// import { getAllProducts, getAllProductProvider  } from '../../service/api';
import ProductCard from "./ProductCard";
import Spinner from '../Spinner';
import { ToastContainer, toast } from "react-toastify";
// import { CategoryOutlined } from '@mui/icons-material';



const Product = () => {
  const [products,setProducts]=useState([]);
  const [price, setPrice]=useState("1000");
  const [productProvider, setProductProvider]=useState([]);
  const [company, setCompany]=useState("All Companies");
  const [city, setCity]=useState("All Cities");
  const [category, setCategory]=useState("All Categories");
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  

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

 const handleClick=async(e)=>{
  
  e.preventDefault();
  console.log("---------------");
  console.log(company,category)
  // console.log(company)
  // console.log(products[i].category)
  console.log(price)
  let filteredData = [];
  for(let i=0;i<products.length;i++){
    if(company != "All Companies" && category != "All Categories" ){
       console.log("jjjj")
      if((products[i].price < price ||  products[i].price === price) && products[i].company === company && products[i].category === category){
        console.log(products[i]);
        filteredData.push(products[i]);
      }
    }
    else if(company === "All Companies" && category === "All Categories"){
      // console.log(products[i].price)
      console.log( typeof(price))
      console.log("hhhh", typeof(products[i].price));
      // console.log(company,categ)
      if(products[i].price <= price){
      

        filteredData.push(products[i]);
      }
    }
    else if(company === "All Companies"){
      console.log("oooooo ",company,category)
      if((products[i].price < price ||  products[i].price === price)  && products[i].category === category ){
        console.log(products[i]);
        filteredData.push(products[i]);
      }
    }
    else if(category === "All Categories"){
      console.log("opopopop ",category)
      if((products[i].price < price ||  products[i].price == price) && products[i].company === company ){
        console.log(products[i]);
        filteredData.push(products[i]);
      }
    }
  }
  console.log("---------------");
  setShowFilter(false);
  console.log(filteredData); 
  setProducts(filteredData);
  

  
 }

 const handleRemoveFilter = () => {
  setShowFilter(true)
  getProducts();
}

const showNotification = () => {
  toast.warn("No Product found !!", {
    autoClose: 2000,
  });
}

    //  console.log("Workers from backend are ",workers);


  return (
    <>
          <Header />
      <h1 style={{marginTop:"100px"}}>Rental Product Page</h1>
      <div className='new-group-worker-sec m-3'>
    {/* <div className="workers-page-workers-group"> */}

    <div className="filter-section">
  <h3 >Filter Products</h3>
  <form>
    <label for="location">Company:</label>
    <select  value={company} style={{"cursor":"pointer"}} disabled={!showFilter} onChange={(e)=>{setCompany(e.target.value)}} id="location">
      <option value="All Companies">All Companies</option>      
         {   products.map((product) => {
          return  <option value={product.company}>{product.company}</option>
        })   }

      
    </select>

    {/* <label for="city">City:</label>
    <select value={city} style={{"cursor":"pointer"}} onChange={(e)=>(setCity(e.target.value))}  name="city" id="city">
      <option value="all">All City</option>
      {   productProvider.map((productProvider) => {
          return  <option value={productProvider.address}>{productProvider.address}</option>
        })   }
    </select> */}

    <label for="price">Price:</label>
            <div class="filter_price">
       
        <p>₹{price}.00</p>
       
        <input type="range" name="price" disabled={!showFilter} style={{border:"2px solid green",width:"200px", cursor:"pointer"}} min="0" max="10000"   onChange={(e)=>setPrice(e.target.value)} value={price}></input>

                </div>
    <label for="location">Category:</label>
    <select name="location" id="location" disabled={!showFilter}  value={category} onChange={(e)=>{setCategory(e.target.value)}}>
      <option value="All Categories">All Categories</option>      
         {   products.map((product) => {
          return  <option value={product.category}>{product.category}</option>
        })   }

      
    </select>    
    {
              showFilter ? <button type="submit" onClick={handleClick}>Apply Filter</button> :
                <button type="submit" onClick={handleRemoveFilter}> Remove Filter  </button>
            }
    
      </form>
      </div>
      <div className="container">
      {
        products.length === 0 && showFilter === false ? showNotification():
      <div className="workers-container-workers-group">

     {loading?(   products.map((product) => {
          return <ProductCard key={product._id} product={product}  />;
        })   ):<Spinner className="spinner m-5"/>
     }
      </div>
    }
      </div>
    </div>
    <Footer/>
    <ToastContainer/>
    </>
  );
};

export default Product;
