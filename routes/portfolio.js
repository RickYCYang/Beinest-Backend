const express = require('express');
const router = express.Router();
const {
  getPortfolio,
  getLongAccessToken,
  getPostIdList
} = require('../Service/InstagramService');

router.get('/', async(req, res) => {
  //console.log('getPortfolio', await getPortfolio());
  let portfolio = await getPortfolio()
  res.status(200).send(portfolio);
});    

router.get('/test', async(req, res) => {  
  res.status(200).send({'message': 'Hello World'});
});    

router.get('/getAccessToken', async(req, res) => {
  await getLongAccessToken();
  res.status(200).send({'message': 'Hello World'});
})

router.get('/getPostIdList', async(req, res) => {
  const postIdList = await getPostIdList();
  console.log(postIdList.length)
  res.status(200).send(postIdList);
})
 
 /*
 router.get('/:post', async(req, res) => {
    const post = req.params.post;
    console.log('post', post);
    console.log(await getPostDetail('18058439131303707'));
    ///access token = EAABZB6lJLrcMBAAzoKTEwC3oxjp3LEwxAiVcHmOMLJh67WuRWjmldW6eDPr3MUWTcyZA61wsZBBJdVXkBvcoLZANGWrbh4nORVJKrvXRWZB9LnBQAoclZBZA8Q2LEeMOoUXgYVXQ3cBtGpuPXb7Y5UuZAOz6dEHWVKLZBGILqZAhvkBQZDZD
    res.send({'123': 123});
 });   
 */

module.exports = router;
