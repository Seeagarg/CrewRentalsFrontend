

import axios from 'axios'

// const URL="http://localhost:8000"
const URL = 'https://crewrentalsbackend.onrender.com'

export {URL};
// const URL="https://rentalapi2.onrender.com"
// const URL ="https://crewrentalapi.onrender.com"

const config={
  headers:{
    "token":localStorage.getItem("token")
  }
}


export const authenticateSignup= async(data)=>{

  try{
    // console.log("data is ", data)
     const res= await axios.post(`${URL}/signup`, data);
      console.log("response from backend is ",res);
      return res;
  }
  catch(error){
    console.log("Error while calling signup api ", error.message)
  }

}
export const verifyUser= async(data)=>{
     try{
       const res= await axios.get(`${URL}/verifyUser/${data.email}`);
       return res;
     }
     catch(error){
      console.log("Error while verifying user api ", error.message)
     }
}
export const authenticateLogin= async(data)=>{
  // console.log("login data is ",data);
         try{
          const res=await axios.post(`${URL}/login`, data);
            // console.log("Response from login is ",res);
            return res;

         }
         catch(error){
          console.log("Error while calling Login api ", error.message);
         }
}

export const verifyEmail= async(data)=>{
       
          try{
            const res=await axios.post(`${URL}/email`, data);

            return res;
          }
          catch(error){
            console.log("Error while email verification ",error.message)
          }
}
export const updatePassword=async(data)=>{
  // console.log("data is ", data);
     try{

      const res=await axios.put(`${URL}/updatePassword`, data);
      return res;
     }
     catch(error){
        console.log("error in updating password ",error.message);
     }
} 

export const getUser=  async(id)=>{
  try{
    const res=await axios.get(`${URL}/getUser/${id}`);
    // console.log("res from back is ", res);
    return res.data;

  }
  catch(error){
    console.log("error while getting user ", error.message)
  }
}




//workers API 
export const workerRegister= async( data)=>{
    try{
      console.log("data to store is ", data);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const res=await axios.post(`${URL}/worker`,data, config);

      return res;
    }
    catch(error){
      console.log("error is worker registeration ", error.message);
    }
}

//group registration
export const groupRegister= async(data)=>{
  try{
    // console.log("data to store is ", data);
    const res=await axios.post(`${URL}/addGroupWorker`, data);
    // console.log('response for group from backend ',res);
    return res;
  }
  catch(error){
    console.log("error is group registeration ", error.message);
  }
}


//all workers api
export const getAllWorkers=async()=>{
  // console.log("config is ",config)
    try{
    

      const res=await axios.get(`${URL}/getAllWorkers`,config );
      // console.log("Result from  backend is ", res);
      return res;
    }
    catch(error){
      console.log("Error while getting all worksers ", error.messsage);
    }
}
export const getWorkerData=async (id)=>{
    // console.log("id is ", id);
    try{
      let res=await axios.get(`${URL}/getWorker/${id}`,config)
      console.log("getWorker is ",res)
            return res.data;
    }
    catch(error){
    }
}
export const filterWorker=async(data)=>{
  try{
     let result= await axios.get(`${URL}/filterWorker/${data.role}/${data.address}/${data.price}/${data.experience}`);
      // console.log("data from back is ",result)
        // result=await result.json();
     return result;
        
  }
  catch(error){
    console.log("Error while filtering product ", error.message);
  }
}

export const deleteWorker= async(id)=>{
  try{
    const res=await axios.delete(`${URL}/deleteWorker/${id}`);
      // console.log("res from delete worker is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting worker ", error.message);
  }
}



export const updateWorker= async(id, data)=>{
  try{
     const res= await axios.put(`${URL}/updateWorker/${id}`, data)
     return res
  }
  catch(error){
    console.log("error in updating worker ", error.message)
  }
}




//filterproduct api
export const filterProduct=async(data)=>{
  //  console.log("filter data ",data)
  try{
      let result= await axios.get(`${URL}/filterProduct/${data.category}/${data.company}/${data.price}`);
      console.log("data from back is ",result)
      return result;
  }
  catch(error){
    console.log("Error while filtering product ", error.message);
  }
}




//contractor API
export const contractorRegister= async(data)=>{
      try{
        const config = { headers: { "Content-Type": "multipart/form-data" } };
          const res=await axios.post(`${URL}/contractor`, data,config);
         
          return res;
      }
      catch(error){
        console.log("error while contractor registter ", error.message);
      }
}

export const getAllContractors=async()=>{
  try{
     const res=await axios.get(`${URL}/getAllContractors`,config); 
    //  console.log("result from backend ", res);
     return res;
  }
  catch(error){
    console.log("Error after fetching data from backend ", error.message);
  }
}
export const getContractor= async(id)=>{
  try{
    const res= await axios.get(`${URL}/getContractor/${id}`,config);
      return res.data
  }
  catch(error){
    console.log("error while getting contractor ", error.message)
  }
}
export const deleteContractor= async(id)=>{
  try{
    const res=await axios.delete(`${URL}/deleteContractor/${id}`);
      // console.log("res from delete contractor is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting contractor ", error.message);
  }
}

export const updateContractor= async(id,data)=>{
  try{
    // console.log("id is ", id);
    // console.log("data is ", data);
    const res= await axios.put(`${URL}/updateContractor/${id}`,data);
    // console.log("res from back ypgagcwd ",res);'
    return res

  }
  catch(error){
    console.log("error while updating contractor ", error.message)
  }
}





//const rentalProvider
export const rentalProvider=async(data)=>{
  try{
    // console.log("data is ", data);
    let  result=await axios.post(`${URL}/registerRentalProvider`,data);
    return result;
  }
  catch(error){
    console.log("error while registering renatl provider ", error.message);
  }
}
export const getProductProvider=async(id)=>{
  try{
     console.log("id is ", id)
    let result=await axios.get(`${URL}/productProvider/${id}`,config)
    console.log("erre -- ", result)
    //  result=await result.json();
      if(result){
        return result.data;
      }
      else{
        return {"error":'Not any products'};
      }
  }
  catch(error){
    console.log("error while getting a provider", error.message);
  }
}
export const getAllProductProvider= async()=>{
      try{
        const result=await axios.get(`${URL}/getAllProductProvider`,config);
        // console.log("res from backend is ",result)
          return result;

      }
      catch(error){
        console.log("error in getting product provider result ", error.message);
      }
}

export const updateRentalProvider=async(id,data)=>{
  try{   
    // console.log("data",data) 
 let result= await axios.put(`${URL}/updateProvider/${id}`,data)
 
//  result=await result.json()
console.log("--------------------",result.data);
 return result.data;
  }
  catch(error){
   console.log("error while updating product ", error.message);
  }
}

export const deleteRentalProvider= async(id)=>{
  // console.log("----user deleting------")
  try{
    const res=await axios.delete(`${URL}/deleteProvider/${id}`);
      console.log("res from delete Provider is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting Rental Provider ", error.message);
  }
}



//api for products
export const addProduct=async(data)=>{
   try{
        const result=await axios.post(`${URL}/addProduct`,data);
        return  result;
   }
   catch(error){
    console.log("error file adding products");
   }
}


export const getAllProducts=async()=>{
  try{
    const result=await axios.get(`${URL}/getProducts`,config);
     
    if(result){
      return result;
    }
    else{
      return {"error":'Not any products'};
    }
  }
  catch(error){
    console.log("error while getting all products ", error.message);
  }
}


export const getProduct=async(key)=>{
  console.log("function is called.---",key)
  try{
    let result=await axios.get(`${URL}/getProduct/${key}`,config)
    //  result=await result.json();
     console.log("reslt",result)
      if(result){
        return result.data
      }
      else{
        return {"error":'Not any products'};
      }
  }
  catch(error){
     console.log("error while fetching a product ")
  }
}



export const updateProduct=async(id,data)=>{
  console.log(id);
  try{    
 let result= await axios.put(`${URL}/updateProduct/${id}`,data)

//  result=await result.json()
// console.log(result)
return result.data;
  }
  catch(error){
   console.log("error while updating product ", error.message);
  }
}


export const deleteProducts= async(id)=>{
  console.log("----user deleting------")
  try{
    const res=await axios.delete(`${URL}/deleteProduct/${id}`);
      console.log("res from delete Product is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting Product ", error.message);
  }
}




// message apis

export const setConversation=async (data)=>{
  try{
          console.log("ids are ", data);
          const res=await  axios.post(`${URL}/newConversation`, data);
          console.log("response is ", res);
          return res;
  }
  catch(error){
    console.log("error while setting new conversation ",error.message);

  }
}
export const getConversations= async(id)=>{
  try{
    // console.log("user id for all data ", id)
    const res=await axios.get(`${URL}/getConversations/${id}`);
    return res.data;
  }
  catch(error){
    console.log("error while getting all conversations ", error.message)
  }
}

export const getConversation= async(data)=>{
  try{
    // console.log("user data 111 is ", data)
    const res=await axios.post(`${URL}/getConversation`, data);
    //  console.log("data from back", res);
    return res.data;
  }
  catch(error){
    console.log("error while getting conversations  of two members", error.message)
  }
}

export const newMessage=async(message)=>{
  try{
     const res=await axios.post(`${URL}/message/add`,message);
     return res;
  }
   catch(error){
      console.log("error while storing new message ", error.message);
   }
}
export const getMessages = async(id)=>{
  try{
    const res= await axios.get(`${URL}/getMessages/${id}`);
    return res.data
  }
  catch(error){
    console.log("error while getting  previous messages ", error.message);
  }
}



//Engineer api 
export const getAllEngineers=async()=>{
  try{
    const res=await axios.get(`${URL}/getAllEngineers`,config);
     console.log("Engineerrrrr is ", res.data);
     return res.data
  }
  catch(error){
    console.log("error while getting all engineers list ", error.message);
  }
}

export const getEngineer= async(id)=>{
  try{
    const res= await axios.get(`${URL}/getEngineer/${id}`,config);
    return res.data;
  }
  catch(error){
    console.log("error while getting engineer ", error.message);;
  }
}

export const deleteEngineer= async(id)=>{
  try{
    const res=await axios.delete(`${URL}/deleteEngineer/${id}`);
      console.log("res from delete Engineer is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting Engineer ", error.message);
  }
}

export const updateEngineer= async(id,data)=>{
  try{
    // console.log("id is ", id);
    // console.log("data is ", data);
    const res= await axios.put(`${URL}/updateEngineer/${id}`,data);
    // console.log("res from back ypgagcwd ",res);

  }
  catch(error){
    console.log("error while updating Engineer ", error.message)
  }
}




// group worker apis
export const getAllGroupWorkers= async()=>{
  try{
    const res = await axios.get(`${URL}/getAllGroupWorkers`,config);
    return res.data;
  }
  catch(error){
    console.log("error while getting all worker group ", error.message);
  }
}


export const getGroupWorker= async(id)=>{
  try{
     const res= await axios.get(`${URL}/getGroupWorker/${id}`,config);
      return res.data;
  }
  catch(error){
    console.log("error while getting grp worker  ", error.messsage);

  }
}

export const deleteGroupOfWorker= async(id)=>{
  try{
    const res=await axios.delete(`${URL}/deleteGroupWorker/${id}`);
      console.log("res from delete worker is ", res);
      return res;
  }
  catch(error){
    console.log("error while deleting group of worker ", error.message);
  }
}

export const updateGroupOfWorkers= async(id,data)=>{
  try{
    // console.log("id is ", id);
    const res= await axios.put(`${URL}/updateGroupWorker/${id}`,data);

  }
  catch(error){
    console.log("error while updating Group Of Workers ", error.message)
  }
}


//project section
export const addProject=async(data)=>{
  try{

    const res=await axios.post(`${URL}/addProject`,data);
    console.log("response from backend is ",res)
      return res;
  }
  catch(error){
    console.log("error while adding a project ", error.message);
  }
}

export const getProjects=async(id)=>{
  try{
    const result=await axios.get(`${URL}/getProjects/${id}`,config);
    // console.log("====",result.data);
    return result.data;
  }
  catch(error){
    console.log("error while getting projects ", error.message);
  }
}

export const deleteProject=async(id)=>{
  try{
      const data=await axios.delete(`${URL}/deleteProject/${id}`);
      console.log("res from delete project is ", data);
      return data;
  }
  catch(error){
    console.log("error while deleting the project ",error.delete);
  }
}

