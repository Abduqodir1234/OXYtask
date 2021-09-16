import React from "react";
import { Pagination } from 'antd';
const CustomPagination = (props) =>{
    return (
    <>
    <Pagination
      onChange={(r)=>props.setpage(r)}
      defaultCurrent={props.current}
      total={props.total}
    />
    </>
    )
}
export default CustomPagination;