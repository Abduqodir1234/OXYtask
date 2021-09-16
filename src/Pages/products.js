import axios from "axios";
import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { Redirect } from "react-router";
import {Table} from "reactstrap"
import TableRow from "../Components/TableRow";
import CustomPagination from "../Components/Pagination"
const Products = ()=>{
    let subdomain = process.env.REACT_APP_SUBDOMAIN
    let token = useSelector(state=>state.main.token)
    let [page,setpage] = useState(1)
    const [products,setproducts] = useState([])
    useEffect(()=>{
        const data = new FormData()
        data.append("size",10)
        data.append("page",page)
        // data.append("stock",{"exist":true,"location":[42]})
        axios({
            method:"POST",
            url : `https://${subdomain}.ox-sys.com/variations`,
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            },
            data:data
        })
        .then(res=>{
            setproducts(res.data)
        })
        .catch(err=>{
            return;
        })
    },[page])
    return (
        typeof token !== "undefined" ? 
            <div className="container">
                  {products.length === 0 ? 
                  <div className="alert alert-danger text-center">There is nothing</div>
                  :
                  <>
                  <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                    </tr>
                    </thead>
                        {products?.items?.length !==0 ? <tbody>{products.items.map(product=><TableRow key={product} id={product.id} name={product.name}  />)}</tbody> : <div className="alert">This page contains nothing</div>}
                </Table>
                <CustomPagination setpage={e=>setpage(e)} total={products.total_count} current={products.page}/>
                </>
}
            </div>
        :
        <Redirect to="/" />
    )
}
export default Products