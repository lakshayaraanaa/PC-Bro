import Products from "../components/Products";
import ProductsMoev from "../components/ProductsMoev";
import RamCards from "../components/RamCards";
import ProductTabs from "../components/ProductTabs";
export default function Home(){
     
    return(
        <>
        <style>
          {`
          .banner {
  border-radius: 10px;
}
  .sid-banner img{
  border-radius: 10px;
  }
          `}
            
        </style>
        <div className=" mt-2 mx-3 mb-2 ">
            <img className="banner" src="src\assets\Gemini_Generated_Image_26ry4w26ry4w26ry.png" alt="loading " width={1500} height={500}/>
        </div>
        <div className="d-flex gap-5">
            <span className="sid-banner mx-4 mt-2 ">
                <img src="src\assets\image_3639fa6d.png" alt="loading" width={300} />
            </span>
            <span>
                <Products/>
            </span> 
           
        </div>
         <div>
                <img src="src\assets\Gemini_Generated_Image_9bxqff9bxqff9bxq.png" alt="loadiing" width={1500} height={500}/>
            </div>
            <div>
                <ProductsMoev/>
            </div>
            <div>
                <img src="src\assets\Gemini_Generated_Image_yzhuswyzhuswyzhu.png" alt="loadiing" width={1500} height={500} />
            </div>
            <div>
                <RamCards/>
            </div>
            <div>
                <img src="src\assets\Gemini_Generated_Image_anyl5manyl5manyl.png" alt="loading"  width={1500} height={500} />
            </div>
            <div>
                <ProductTabs/>
            </div>
        </>
    )
}