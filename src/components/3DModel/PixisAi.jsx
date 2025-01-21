// import React from 'react';
import Header from "../Pages/Header";
import Footer from "../Footer";
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from "./assets";
import {getRandomPrompt} from "./utils";
import "./pixis.css"
import { FormField , Loader   } from './components';
import "./pixisai.css";
function PixisAi() {
    const [form , setForm] = useState({
        name:'',
        prompt:'',
        photo:'',
    });
    const [generatingImg , setGeneratingImg] = useState(false);
    const [loading , setLoading] = useState(false);
    const generateImage = async() =>{
      if(form.prompt){
        try{
          setGeneratingImg(true);
          const response = await fetch('https://pixis-ai.onrender.com/api/v1/dalle', {
            // const response = await fetch('http://localhost:8080/api/v1/dalle', {
            method : 'POST',
            headers:{
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify({prompt: form.prompt}),
          })
          const data = await response.json();
          setForm({...form , photo: `data:image/jpeg;base64,${data.photo}`});
        }catch(error){
            alert(error?.response.data.error.message);
        }finally{
          setGeneratingImg(false);
        }
      }else{
        alert("Please enter a prompt");
      }
    }
   const handleSubmit = async(e)=>{
      e.preventDefault();

      if(form.prompt && form.photo){
        setLoading(true);
        try {
          const response = await fetch('https://pixis-ai.onrender.com/api/v1/post', {
              method: 'POST',
              headers:{
                'Content-Type' : 'application/json',
              },
              body: JSON.stringify(form)
              
          })
          await response.json();
        } catch (error) {
            alert(error);
          
        }finally{
          setLoading(false);
        }

      }
   }

   const handleChange = (e) =>{
      setForm( {...form , [e.target.name] : e.target.value})
   }

   const handleSurpriseMe = () =>{
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form , prompt: randomPrompt})

   }



  return (
    <>
        <Header />
    <section className="role-selection-page-home-aiimage" style={{ maxWidth: '80rem', marginTop: '150px' , marginLeft:"220px" , marginBottom:"50px" }}>
        <div>
            <h1  style={{ fontWeight: '800', color: 'white', fontSize: '32px' }}>Create Your Dream House!</h1>
            <p style={{marginLeft:"10px" , marginTop: '0.25rem', color: 'white', fontSize: '30px', fontWeight: 'bold' }} >Transform your ideas into reality with Crew-Rental</p>
        </div> 
        <form className="pixisAi-image-sec" style={{  maxWidth: '48rem' , marginLeft:"20px" }} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        
             <FormField
              lableName ="Explain your dream house"
              type = "text"
              name = "prompt"
              placeholder = "3BHk House with Parking area 2 floor..."
              value = {form.prompt} 
              handleChange={handleChange} 
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
             <div className="mainaicontainer"
            
            >


              {form.photo ?(
                <img
                className="pixisAi-image-sec-inner"
                style={{ width: "500px", height: "500px", objectFit: 'contain' }}
                  src={form.photo}
                  alt={form.prompt}
                  
                />
              ):(
                <img
                style={{ width: "100%", height: "100%", objectFit: 'contain', opacity: 0.4, borderWidth: '1px', borderColor: '#e2e8f0' }}
                  src={preview}
                  alt="preview"
                  
                />
              )}

              {generatingImg &&(
                <div  style={{ top: 0, right: 0, bottom: 0, left: 0, zIndex: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '0.5rem' }}>
                  <Loader/>
                </div>
              )}

            </div>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.25rem' }} >
            <button
            type="submit"
            onClick={generateImage}
            style={{ color: '#fff', backgroundColor: '#047857', fontWeight: '500', borderRadius: '0.375rem', fontSize: '0.875rem', width: '100%', padding: '0.625rem 1.25rem', textAlign: 'center' }}
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </form>
    </section>
    <Footer/>
    </>
  )
}
export default PixisAi;
