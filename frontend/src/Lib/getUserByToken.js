const { default: Axios } = require("axios")
const URL = process.env.REACT_APP_SERVER_URL;
const SECURITY_KEY = "MERNSECRET";

const getUserByToken = async token => {
    console.log(token);
    // token="wee0";
    if(token){
        
        let _userinfo = null;
        await Axios.post('http://localhost:2000/users/get_by_token', {token, SECURITY_KEY})
        .then(res => _userinfo = res.data)
        .catch(err => _userinfo =  err.response )
        console.log(token);
        console.log(_userinfo)

        return _userinfo
    }else return undefined;
}

export default getUserByToken