 /* <------------------------------------ **** API CONFIG START **** ------------------------------------ */
import axios from 'axios';
const baseURL  = 'https://api.finlogix.com/v1'

const FinLogix = axios.create({
    baseURL
})

 /* <------------------------------------ **** API CONFIG END **** ------------------------------------ */
export default FinLogix;