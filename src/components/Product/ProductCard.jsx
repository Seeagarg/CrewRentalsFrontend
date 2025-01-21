import { useNavigate } from "react-router-dom"

const parastyle = {

    marginTop : "15px", 
    fontWeight: 'bold',
    fontFamily: 'Arial',
}
const nameWorker = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '35px',
    textAlign: 'center',
    color: 'black',
}

const variableFields = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
}

const variableFieldsYes = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
    
}


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/productDashboard' , {state: {product}  });

  }
    return (
      <div className="card-workers-group my-4" style={{cursor:"pointer"}}>
        <div className="image-container-workers-group">
          <img src={product.image} alt="loading" />
       
        </div>
        <div className="details-workers-group m-2">
          <h2 style={nameWorker}>{product.name}</h2>
          <p style={parastyle}>Company: <span style ={variableFields}>{product.company}</span></p>
          <p style={parastyle}>Category: <span style ={variableFields}>{product.category}</span></p>
           
          <p style={parastyle}>Price (per day): ₹<span style ={variableFields}>{product.price}</span></p>
          <p style={parastyle}>Available: <span style ={variableFieldsYes}>
            yes
          </span></p>
          <p style={parastyle}>Status: <span style ={variableFieldsYes}>
            {
              product.verified? <span style={{"color":"green"}}>verified</span> : <span style={{"color":"red"}} >not verified</span> 
            }
          </span></p>
          <button className='rolebutton' onClick={handleSubmit} type="submit">Details</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;