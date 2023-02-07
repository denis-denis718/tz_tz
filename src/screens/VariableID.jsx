import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VariableID = ({product}) => {

    const params = useParams();
    const [products, setVariableData] = useState([]);

    useEffect(() => {
        console.log(params);
        console.log(params.variableID);
        if(params?.variableID)
        {
            fetch( `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json`)
                .then(response => response.json())
                .then(data => setVariableData(data));
        }
    }, [])

    // ${params.variableID}

    console.log(products);


    return (
        <div className="product">
            <h1>One Product</h1>
            <p>Product ID is: {product?.ID}</p>
            <p>{product?.Description}</p>
            <p>{product?.GroupName}</p>
            <p>{product?.ID}</p>
            <p>{product?.Name}</p>

        </div>
    );
};

export default VariableID;





// const fetchVariableList = async () => {
//     const response = await fetch ('https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json');
//
//     const data = await response.json();
//     setVariableData(data.VariableID);
//     console.log(data);
//
// };



// useEffect(() => {
//     fetchVariableList();
// }, [])

// useEffect(() => {
//     console.log(params);
// },[])