import React, { useEffect, useState } from 'react'
import Card from "../components/Card";


const Variables = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch ('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json');

        const data = await response.json();
        setProducts(data.Results);
        console.log(data);
    };

    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <div className="products">
            <h1>Variables</h1>
            <div className={'products-list'}>
                {products?.map(product => {
                    return (
                      <Card product={product} key={product.VariableId}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Variables;