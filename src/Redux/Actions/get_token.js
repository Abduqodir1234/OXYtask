const get_token = (data) =>{
    return {
        type:"GET_TOKEN",
        payload:data
    }
}
export default get_token;