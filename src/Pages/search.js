import React, { useState } from "react";
import {useSelector} from "react-redux"
import { Redirect } from "react-router";
import  {Table} from "reactstrap"
import TableRow from "../Components/TableRow";


const dataSource = [
    'Olma ',
    'Anor',
    'Nok',
    'Banan',
    'Ananas',
    'Olcha',
    'Kivi',
    'Mango',
    'Papaya',
    'Kakao',
    'Kakos',
  ];
  


const Search = ()=>{
    const [products,setproducts] = useState(dataSource)
    const token = useSelector(state=>state.main.token)
    const handleSearch = (text)=>{
        if(text=== ""){
            setproducts(dataSource)
        }
        else{
            let filtered = dataSource.filter(product=>{
                if(product.toLowerCase().includes(text.toLowerCase())){
                    return product
                }
            })
            setproducts(filtered.sort(function(a,b){return(a.indexOf(text.toLowerCase()) - b.indexOf(text.toLowerCase()))}))
        }
    }
    return (
        <div className="container">
            <input type="search" className="form-control w-100 mb-4" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}  /><br/>
            <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                    </tr>
                    </thead>
                        {products?.length !==0 ? <tbody>{products.map((product,ind)=><TableRow key={product} id={ind}  name={product}  />)}</tbody> : <div className="alert">This page contains nothing</div>}
                </Table>
        </div>
    )
}

export default Search
