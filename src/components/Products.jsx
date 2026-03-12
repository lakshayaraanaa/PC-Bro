export default function Products(){

   const product=[ {
      id:1,
      title:"Laddu",
      text:"Delicious ghee laddu sweet",
      image:"src/assets/download.jpg",
      originalprice:"15000",
      discountprice:"10000"


    },
    {
      id:2,
      title:"Jalebi",
      text:"Hot and crispy jalebi",
      image:"src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
        originalprice:"15000",
      discountprice:"10000"
    },
    {
      id:3,
      title:"Mysore Pak",
      text:"Traditional mysore pak sweet",
      image:"src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
         originalprice:"15000",
      discountprice:"10000"
      
    },
{
      id:4,
      title:"Mysore Pak",
      text:"Traditional mysore pak sweet",
      image:"src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
        originalprice:"15000",
      discountprice:"10000"
    }]
    return(
       <>
       <style>
        {`
        .custom-card{
  width: 280px;
  overflow: hidden;
}
        `}
       </style>
       <div className="d-flex gap-3">
          {product.map((data)=>(
         <div className="card custom-card align-items-center text-center ">
       

    <div className="card-body">
  <img src={data.image} width={200} height={200} alt={data.title} />

  <h5 className="card-title">{data.title}</h5>
  <p className="card-text">{data.text}</p>
<div className="d-flex gap-5">
  <h4 className="card-price text-decoration-line-through">
    ₹{data.originalprice}
  </h4>

  <h4 className="card-discount text-success">
    ₹{data.discountprice}
  </h4>
  </div>
</div>
       
       </div>
       ))}
       </div>
     
      
       </> 
    );
};