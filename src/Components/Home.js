import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, ModalDialog } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Banner from "./Banner";


function Home(){

    const API = '3H5JYaZJFaC9ou3zPJBfu--J9A_pt8cVgdyq9QHDW5o';

    const [images, setImages] = useState([]);
    const [search, setSearch] = useState('');

    const baseURL = `https://api.unsplash.com/search/photos?query=${search}&client_id=${API}`

    const baseURL1 = `https://api.unsplash.com/photos?&client_id=${API}&per_page=12`

    

    // const [img, setImg] = useState([])

    // // const {id} = useParams()
    // // const API = '3H5JYaZJFaC9ou3zPJBfu--J9A_pt8cVgdyq9QHDW5o';
    // const collectionURL = `https://api.unsplash.com/collections?&client_id=${API}`

    // const fetchCollection = async()=>{
    //     const response = await axios.get(collectionURL)
    //     console.log("collection",response)
    // }

    // useEffect(()=>{
    //     fetchCollection()
    // },[])




    const fetchData = async() =>{
        const response = await axios.get(baseURL1)
        console.log(response)
        //setImages([...images, ...response.data])
        setImages(response.data) 
      }
    
      useEffect(()=>{
        // axios.get(baseURL1)
        // .then((response)=>{
        //   console.log(response)
        //   setImages(response.data)
        // })
    
        fetchData()
            
        },[])

        const handleSubmit = (e)=>{
            e.preventDefault()
      
            
            axios.get(baseURL)
            .then((res)=>{
              console.log("search", res.data.results)
              setImages(res.data.results)
              //setImages([...images, ...res.data.results])
            })
      
            setSearch("");
      
          }
        
          const handleChange = (e)=>{
            setSearch(e.target.value)
          }



    return(
        <>
            <Banner 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                search={search}
            />

<div className="container mt-5">
<div className="row">
    <div className="col-md-10 mx-auto">
        <div className="row">
            {images && images.map((item, index)=>(
                <div className="col-md-4 mb-5" key={index} >
      
 <NavLink to={`/collection/${item.id}`}>
        <img src= {item.urls.regular} className="myImg"/>            
 </NavLink>
       
    <div className="userProfile">
        <div className="userProfileImg">
            <img src={item.user.profile_image.large} 
            className="profile_img" alt="profile_image"/>
  
        
          <div> {item.user.name} </div>          
                    
            <div className="download">                                      
              <a download target="_blank" href={item.links.download} className="btn btn-secondary">
                <i className="fas fa-download"></i>
              </a>                
            </div>
          </div>



                    </div>
                    </div>
                        ))}
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home