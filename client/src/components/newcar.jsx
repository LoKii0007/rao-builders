import React, { useEffect, useState } from 'react';
import "../css/newcar.css"
import { addCarInfo, addCarImages, addCarSummary, addMainImage } from '../services/api';
import { useParams } from 'react-router-dom';

const NewCar = () => {
  const { id } = useParams()
  const [images, setImages] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [text, setText] = useState({})
  const [flag1, setFlag1] = useState(true)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const [flag5, setFlag5] = useState(false)
  const [carId, setCarId] = useState("")
  const [product, setProduct] = useState("")

  const aggregate = ["prod_name","quality", "size", "brand"]
  const bricks = ["prod_name","brand", "thickness", "minimum_order", "material"]
  const cement = ["prod_name","quantity", "type", "brand"]
  const dust = ["prod_name","quality", "source", "price"]
  const steel = ["prod_name","size", "company", "price"]
  const tiles = ["prod_name","shape", "color", "dimension", "price"]
  const jamuna = ["prod_name", "price"]

  const onChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    const emptyText = {};
    Object.keys(text).forEach((key) => {
      emptyText[key] = "";
    });
    setText(emptyText);
    setText({});
  }


  //adding product
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text) {
      const res = await addCarInfo(text)
      if(res.status === 200){
        setCarId(res.data.data._id)
        setProduct(res.data.data.product)
        setFlag1(false)
        setFlag3(true)
      }else{
        setCarId(res.data._id)
        setProduct(res.data.product)
      setFlag1(false)
      setFlag2(true)
      }
    }
    resetForm()
  }

  useEffect(() => {
  }, [carId, product]);


  //adding mainImage
  const handleMainImage = (e) => {
    e.preventDefault()
    setMainImage(e.target.files[0])
  }

  const handleSubmitMainImage = async (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("main_image", mainImage)
    formdata.append("car_id", carId)

    if (mainImage) {
      await addMainImage(formdata)
      console.log("added image")
    }
    setMainImage("")
    setFlag2(false)
    setFlag3(true)
  }

  // adding ptoduct item
  const handleSubmitItem = async (e) => {
    e.preventDefault()
    const updatedText = { ...text, car_id: carId }
    if (updatedText) {
      const res = await addCarSummary(updatedText)
      console.log("added product item")
    }
    resetForm()
    setFlag3(false)
    setFlag4(true)
  }

  //adding item images
  const handleImage = (e) => {
    e.preventDefault()
    setImages(e.target.files[0])
  }

  const handleSubmitImage = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("images", images)
    formdata.append("car_id", carId)
    if (images && carId !== "") {
      await addCarImages(formdata)
      console.log("added image")
    }
    resetForm()
    setImages("")
    document.getElementById("image").value = "";
    setFlag5(true)
    setFlag4(false)
  }

  const handleAddMore = () =>{
    setFlag3(true)
    setFlag5(false)
  }

  const handleDone = () =>{
    setCarId("")
    setProduct("")
    setFlag5(false)
    setFlag1(true)
  }


  return (
    <>
      <div className="mx-5 mb-5 d-flex flex-column justify-content-center ">
        {flag1 && <form type="submit" className='newcar-form' >

          <div className="form-group my-2">
            <label htmlFor="validationCustom04" className="form-label">Product type</label>
            <select className="form-select" id="validationCustom04" name='product' onChange={onChange} value={text.product || ""} required>
              <option selected disabled value="">Choose a product</option>
              <option>aggregate</option>
              <option>Stone dust</option>
              <option>Jamuna sand</option>
              <option>Bricks & Blocks</option>
              <option>RMC</option>
              <option>Cement</option>
              <option>About Us</option>
              <option>Team</option>
              <option>Steel/TMT Bars</option>
              <option>Interlocking Tiles</option>
            </select>
          </div>

          <br />

          <div className=' ms-5' >
            <button className='px-5 py-1' onClick={handleSubmit} type="submit" value="Submit" >Next</button>
          </div>

        </form>}

        {flag2 && <form encType='multipart/form-data'>
          <div className="form-group my-2">
            <label htmlFor="image">Car Main Image : </label>
            <input onChange={handleMainImage} type="file" id="mainImage" name="mainImage" required />
          </div>

          <div className='text-center' >
            <button className='px-5 py-1' onClick={handleSubmitMainImage} type="submit" value="Submit" >Add images</button>
          </div>
        </form>}


        {flag3 && <form >
          {product === "aggregate" ? aggregate.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}
          {product === "Bricks & Blocks" ? bricks.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}

          {product === "Cement" ? cement.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}

          {product === "Stone dust" ? dust.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}

          {product === "Steel/TMT Bars" ? steel.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}

          {product === "Interlocking Tiles" ? tiles.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          )) : ""}

          <div className='text-center' >
            <button className='px-5 py-1' onClick={handleSubmitItem} type="submit" value="Submit" >Next</button>
          </div>
        </form>}


        {flag4 && <form encType='multipart/form-data'>
          <div className="form-group my-2">
            <label htmlFor="image">Select Image : </label>
            <input onChange={handleImage} type="file" id="image" name="image" required />
            <button className='px-5 py-1' onClick={handleSubmitImage} type="submit" value="Submit" >upload image</button>

          </div>
        </form>}

        {flag5 &&
          <div className='text-center' >
            <button className='px-5 py-1 my-3' onClick={handleAddMore} type="submit" value="Submit" >Add more product item</button>
            <button className='px-5 py-1 my-3' onClick={handleDone} type="submit" value="Submit" >Done</button>
          </div>
        }


      </div>
    </>
  );
};

export default NewCar;
