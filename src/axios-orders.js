import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-80d1a.firebaseio.com/'
});

export default instance;