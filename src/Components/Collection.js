import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function Collection(){

    const [img, setImg] = useState([])

    const {id} = useParams()

    
    let navgate = useNavigate()

    const handleClick = ()=>{
       navgate("/")
    }

    const API = '3H5JYaZJFaC9ou3zPJBfu--J9A_pt8cVgdyq9QHDW5o';
    const baseURL1 = `https://api.unsplash.com/photos?q=${id}&client_id=${API}`

    const fetchData = async()=>{
        const response = await axios.get(baseURL1)
        console.log("detailInfo", response)
        setImg(response.data)

    }

    const detailInfo = img.filter((product, index)=>{
        return product.id == id;
    })



    console.log(detailInfo)

    useEffect(()=>{
        fetchData()
    },[])

  

    return(
        <>
<div className="container mt-5">
    <div className="row">
        <div className="col-md-10 mx-auto">
        {detailInfo && detailInfo.map((item, index)=>(
            <div className="row">
               
                    <div className="col-md-4" key={index}>
                    <img src={item.user.profile_image.large ? 
                    `${item.user.profile_image.large}` : "Not available"} 


                    
                    className="infoImg"/>            
                    </div>

                    <div className="col-md-8 mydescription">
                        <h1>
                           <strong> {item.user.first_name} </strong>
                        </h1>
                        <p>
                            {item.user.bio}
                        </p>
                        <p>Likes: {item.likes}</p>
                        
    <button onClick={handleClick} className="btn btn-secondary">
        Go Back
    </button>
                    </div>
             
            </div>
               ))}
        </div>
    </div>
</div>

        </>
    )
}

export default Collection