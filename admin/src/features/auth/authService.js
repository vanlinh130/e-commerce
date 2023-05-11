import axios from 'axios';
import { base_url } from '../../utils/base_url';

const login = async (userData) => {
    const response = await axios.post(`${base_url}user/admin-login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const getOrders = async () => {
    const response = await axios.get(`${base_url}user/getmyorders`);
    return response.data;
};

const authService = {
    login,
    getOrders,
};

export default authService;
