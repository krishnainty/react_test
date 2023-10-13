import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Form2() {
    const [id,setId] = useState('');
    const [title,setTitle] = useState('');
    const [brand,setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [des,setDes] = useState('');
    const [imgurl,setImgurl] = useState('');
    const[productsList,setProductsList]=useState('')
    // useEffect(()=>{
    //   axios.get('http://localhost:3004/products')
      
    // },0)
    // console.log(products);
    

    const productsData = {
        productId:id,
        title:title,
        brand:brand,
        price:price,
        des:des,
        imgurl:imgurl
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3004/products',productsData).then((res)=>{
            alert("success")
        })
    }
  return (
    <>
    <div >
      <form action="" method='post' onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="id">product id</label>
    <input type="text" class="form-control" id="id" onChange={(e)=>{setId(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="title">title</label>
    <input type="text" class="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="brand">brand:</label>
    <input type="text" class="form-control" id="brand" onChange={(e)=>{setBrand(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="price">price:</label>
    <input type="text" class="form-control" id="price" onChange={(e)=>{setPrice(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="des">description:</label>
    <input type="text" class="form-control" id="des" onChange={(e)=>{setDes(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="imgurl">Img url:</label>
    <input type="text" class="form-control" id="imgurl" onChange={(e)=>{setImgurl(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
 </div>
{/* return{
  <div className=''>
    {products.map((e,i)=>{
      return(
        <div className='col-md-3'>
          <img src={e.thumbnail} height="200px" className='thumbnail'/>
          </div> */} */
      {/* )
    })}
  </div> */}
 
    </>
  )
}
