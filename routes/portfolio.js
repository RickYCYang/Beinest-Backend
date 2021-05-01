const express = require('express');
const router = express.Router();
const axios = require('axios');
const {refreshAccessToken} = require('../InstagramService');
let accessToken = '';

router.get('/test', async(req, res) => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});   


router.get('/', async(req, res) => {
  ///Get long-term access token
  if(accessToken === undefined || accessToken === null || accessToken === ''){
    accessToken = await refreshAccessToken();
  }
  console.log('access token:', accessToken);
  /*
  axios.get(`${domain}/17841444428188641/media?access_token=${accessToken}`).then(response => {
     console.log('1. Get POST ID list', response.data);
     axios.get(`${domain}/18058439131303707/?fields=caption,like_count,media_url,timestamp,thumbnail_url&access_token=${accessToken}`).then(response => {
      console.log('2. Get POST Detail', response.data);
    })
    .catch(error => {
      console.log(error);
    });   
   })
   .catch(error => {
     console.log(error);
   });
   */
 });    
 
 router.get('/:post', async(req, res) => {
    const post = req.params.post;
    console.log('post', post);
    axios.get(`https://graph.facebook.com/v10.0/18058439131303707/?fields=caption,like_count,media_url,timestamp,thumbnail_url&access_token=${accessToken}`).then(response => {
     console.log(response.data);
   })
   .catch(error => {
     console.log(error);
   });
 });   

module.exports = router;
