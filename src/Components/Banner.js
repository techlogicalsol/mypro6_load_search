import React from "react";

function Banner({handleSubmit, handleChange, search}){

    const refresh = ()=>{
        window.location.reload()
    }

    return(
        <>
            <div className="banner">
            <img src="/img/bg1.jpg" alt="banner"/>
            <div className="text-block">
            <h1 className="display-1">
                <strong>Unsplash</strong>
            </h1>
                <p>The internet source of freely-usage images.
                  <br />  
                  Powered by creators everywhere.
                </p>
                
            </div>

            
        <div className="input">
            <form onSubmit={handleSubmit}>
                <div className="formStyle">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search free high-resolution photos"
                        value={search}
                        onChange={handleChange}
                        required
                    />
                    <button className="btn btn-danger mybtn" 
                    type="submit">
                        <i className="fas fa-search"></i>
                    </button>

                  
                </div>
            </form>
        </div>
        <div className="reload">
                <button className="btn btn-danger mybtn1" onClick={refresh}>
                    <i className="fas fa-sync"></i>
                </button>
        </div>
        <div className="companyInfo">
            <div>Developed by Amar Shabbir</div>
            <p>Powered by TechLogex Solutions</p> 
        </div>
                
                    
            </div>

        </>
    )
}

export default Banner