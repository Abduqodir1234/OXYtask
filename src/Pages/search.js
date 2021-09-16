import React, { useState } from "react";
import {useSelector} from "react-redux"
import { Redirect } from "react-router";
import  {Table} from "antd"


const dataSource = [
    {
      name: 'Olma ',
    },
    {
      name: 'Anor',
    },
    {
      name: 'Nok',
    },
    {
        name: 'Banan',
    },
    {
        name: 'Ananas',
    },
    {
        name: 'Olcha',
    },
    {
        name: 'Kivi',
    },
    {
        name: 'Mango',
    },
    {
        name: 'Papaya',
    },
    {
        name: 'Kakao',
    },

    {
        name: 'Kakos',
    },

  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
 
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
                if(product.name.toLowerCase().includes(text.toLowerCase())){
                    console.log(product.name)
                    return product
                }
            })
            console.log(filtered);
            setproducts(filtered)
        }
    }
    return (
        typeof token === "undefined" ? 
        <Redirect to="/" />
        :
        <div className="container">
            <input type="search" className="form-control w-100 mb-4" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}  /><br/>
            <Table dataSource={products} columns={columns} />
        </div>
    )
}

export default Search
