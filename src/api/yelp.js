import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ybIoBWxojC9xoettdW92A0LTN1-guUxyfdyWQ7GUlz_gNfh1Pl8L-3lgB85I19Z-4FbLa4m1k9bpJiLgq8im4DiIThNFs6aDBgWMbwTE4a1Hsxk6_YB244UFE80LX3Yx'
    }
});