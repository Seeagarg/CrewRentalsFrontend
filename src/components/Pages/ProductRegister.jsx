import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css";
import Footer from '../Footer';
import Header from './Header';
import { addProduct } from '../../service/api';

function ProductRegister() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [role, setRole] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [group, setGroup] = useState('');
    const [id,setId] = useState('');
    const [productPic, setProductPic] = useState('');

    const navigate = useNavigate();

    // const [product , setProduct] = useState({
    //     name : "",
    //     company : "",
    //     price : "",
    //     category : "",
    //     description : "",
    //     group : "",
    //     id : "",
    //     image: "" 
    // })


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('name:', name);
        // console.log('company:', company);
        // console.log('Price:', price);
        console.log('category:', category);
        // console.log('description:', description);
        // console.log('group:', group);
        // console.log('id:', id);
         
        
        const user=JSON.parse(localStorage.getItem("user"))
        const res=await addProduct({
            userId:user._id,
            company:company,
            price:price,
            category:category,
            name:name,
            description:description,
            productPic:"",
        })


        if(res){
            navigate('/');
        }

     


    };
    return (
        <>
            <Header />
            <h1 id = "lform" >Product Registration</h1>
        <div className="labour-form">
            <form className='roleform' onSubmit={handleSubmit}>
                    <div className = "display2">
                    <div className = "display1">
                    <label htmlFor="productPic">Product Photo:&nbsp;&nbsp; 
                        <span  style={{border:"1px solid gray",padding:"10px", background:"white", fontSize:"15px", borderRadius:"10px",fontWeight:500, cursor:"pointer"}} >
                           
                         
                            Upload Product Photo
                           
                             
                               </span>
                        </label>
                <input
                    style = {{"display":"none"}}
                    type="file"
                    id="productPic"
                    accept="image/*"
                    onChange={(event) => {
                        setProductPic(event.target.files[0])
                        // handle file upload logic here
                    }}
                />
                </div>

                <div className = "display1">
                <label htmlFor="name">Name of Product:</label>
                <input
                    type="text"
                    placeholder='Enter Product Name'
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                    </div>
                    </div>

                <div className = "display2">
                <div className = "display1">
                <label htmlFor="company">Company :</label>
                <input
                    type="text"
                    placeholder='Enter Company '
                    id="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                />
                </div>

                <div className = "display1">
                <label htmlFor="price">Price per Day:</label>
                <input
                    type="text"
                    placeholder='Enter Price'
                    id="price-labour"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                    </div>

                </div>

                <div className = "display2">
                {/* <div className = "display1">
                <label htmlFor="category">Category (Product category ):</label>
                <input
                    type="text"
                    placeholder='Enter Category'
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                </div> */}
                <div className = "display1">

                <label htmlFor="pin">Description :</label>
                <input
                    type="text"
                    placeholder='Enter Description'
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                                </div>
                                <div className = "display1">
                <label htmlFor="role">Type of Product :</label>
                <select id="role" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="construction">--Please select--</option>
                    <option value="Boning rod">Boning rod </option>
                    <option value="Hammmer">Hammer</option>
                    <option value="Helmet">Helmet </option>
                    <option value="Iron pan">Iron pan </option>
                    <option value="Ladder">Ladder</option>
                    <option value="Pick axe">Pick axe</option>
                    <option value="Rammer">Rammer</option>
                    <option value="Sledge hemet">Sledge helmet</option>
                    <option value="Tile cutter">Tile cutter </option>
                </select>

                </div>

                </div>


                <div className = "display2">
                {/* <div className = "display1">
                <label htmlFor="age">Group Name  :</label>
                <input
                    type="text"
                    placeholder='Enter Group Name'
                    id="group"
                    value={group}
                    onChange={(event) => setGroup(event.target.value)}
                />
                </div> */}


                

                </div>
{/* 
                <div className = "display2">

                <label htmlFor="bussinessname">ID of Product:</label>
                <input
                    type="text"
                    placeholder='Enter ID'
                    id="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />
                </div> */}

              



                <button className='rolebutton' onClick={handleSubmit} type="submit">Submit</button>
                
                            </form>
        </div>
        <Footer/>
        </>
    )
}

export default ProductRegister;