import React from "react"
import { Form, Input, Button,notification } from 'antd';
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import {Redirect} from "react-router"
import get_token from "../Redux/Actions/get_token";
const IndexPage = (props) =>{
    let dispatch = useDispatch()
    const token = useSelector(state=>state.main.token)
    const openNotification = (title,description) => {
        notification[title.toLowerCase()]({
          message: title,
          description:description,

        });
      };
    const onFinish = (values) => {
        let subdomain = process.env.REACT_APP_SUBDOMAIN;
        let data = new FormData()
        data.append("_username",values.username)
        data.append("_password",values.password)
        data.append("_subdomain",subdomain)
        axios({
            method:"POST",
            url:`https://${subdomain}.ox-sys.com/security/auth_check`,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data:data
        })
        .then(res=>{
            dispatch(get_token(res.data.token))
            openNotification("Success","You Logged in Successfully")
        })
        .catch(err=>{
            
            openNotification("Error","Something went wrong")
        })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     
    return(
        typeof token === "undefined" ?
            <div className="container">
                <div class="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
                    <div >
                        <div style={{height:"100px",width:"400px",display:"inline-block",justifyContent:"center",alignContent:"center"}}>
                        <Form 
                            wrapperCol={{ span: 16 }}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password />
                            </Form.Item>


                            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    </div>    
                </div>
            </div>
        :
        <Redirect to="/products" />
    )
}
export default IndexPage