import Products from "../components/Products";

export default function Home(){
     
    return(
        <>
        <style>
          {`
          .banner{
  border-radius: 10px;
}
          `}
            
        </style>
        <div className=" mt-2 mx-3 mb-2 ">
            <img className="banner" src="src\assets\Gemini_Generated_Image_26ry4w26ry4w26ry.png" alt="loading " width={1500} height={500}/>
        </div>
        <div className="d-flex gap-5">
            <span>
                <img src="src\assets\image_3639fa6d.png" alt="loading" width={300} />
            </span>
            <span>
                <Products/>
            </span> 
        </div>
 
        </>
    )
}