const axios = require('axios');
const config = require('../config');
const domain = config.domain;
const apiVersion = config.apiVersion;
const Portfolio = require('../Model/Portfolio');
const beinestClientId = config.beinestClientId;
const beinestClientSecret = config.beinestClientSecret;
const beinestInstagramAccount = config.beinestInstagramAccount;
const beinestAccessToken = config.beinestAccessToken;
const chingshopClientId = config.chingshopClientId;
const chingshtopClientSecret = config.chingshtopClientSecret;
const chingshopInstagramAccount = config.chingshopInstagramAccount;
const chingshtopAccessToken = config.chingshtopAccessToken;

let postIdList = [];
let portfolio = [];

const getLongAccessToken = async() => {
    let accessToken;
    const clientSecret = '13f895c3d321b15c0de97bc2948406e8';
    const shortTernAccessToken = 'EAAEVjUnllUABAAZAbZBrJSMp8TshMN9kLZB7l5WWCDKFn4a2uUUSmRWZCnVi8GUHYbZBIBHRi0xG5kxpdbbcbzoYVBTs1Wz0BeJG7rPeFnHPJGGG5QNYmJKgNgminec2rEkR5ZACZBPWt96KAODWP64KOJZAu92fJeYklZBUZBz0gVI55W2Wu1jGTLXDBa4cg04YOsRv5nuPytHoIsZBGbl82Rv'
    await axios.get(`${domain}/${apiVersion}/oauth/access_token?grant_type=fb_exchange_token&client_id=${beinestClientId}&client_secret=${beinestClientSecret}&fb_exchange_token=${shortTernAccessToken}`)
    .then(response => {
      accessToken = response.data.access_token;
      console.log('get accessToken', accessToken); 
    })
    .catch((error) => {
      console.log('error', error);
    });
    return accessToken;
}

const getPostIdList = async() => {
  //console.log('getPostIdList start')
  let nextPage;
  await axios.get(`${domain}/${apiVersion}/${beinestInstagramAccount}/media?access_token=${beinestAccessToken}`).then(async (response) => {
    postIdList = response.data.data;
    nextPage = (response.data.paging.next)? response.data.paging.next: null;
  }).catch(error => {
    console.log(error);
  });
  while(nextPage){
    await axios.get(nextPage).then(async (response) => {
      postIdList = postIdList.concat(response.data.data);
      nextPage = (response.data.paging.next)? response.data.paging.next: null;
    }).catch(error => {
      console.log(error);
    });
  }
  //console.log('getPostIdList end');
  return postIdList;
}

const getPostDetail = async(postId) => {
  let post;
  await axios.get(`${domain}/${apiVersion}/${postId}/?fields=caption,like_count,media_type,media_url,timestamp,thumbnail_url&access_token=${beinestAccessToken}`).then(response => {
     //console.log(response.data);
     post = response.data;
  }).catch(error => {
     console.log(error);
  });
  return post;
}

const setPortfolio = async() => {
  //console.log('setPortfolio start');
  ///1. Get all post id
  await getPostIdList();

  ///2. Get all post detail by id
  portfolio = [];
  for(let index in postIdList){
    const post = await getPostDetail(postIdList[index].id);
    //console.log('post', post);
    portfolio[index] = new Portfolio(post.id, post.caption, post.like_count, post.media_type, post.media_url, post.timestamp);
  }
  //console.log('setPortfolio end');
  return portfolio;
}

const needRefreshCheck = async() => {
  if(portfolio.length <= 0 || postIdList.length <= 0){
    return true;
  }
  const newIdList = await getPostIdList();
  if(JSON.stringify(newIdList) !== JSON.stringify(postIdList)){
    return true;
  }
  return false;
}

const getPortfolio = async() => {
  const refresh = await needRefreshCheck();
  return refresh? await setPortfolio(): portfolio;
}

module.exports = {
  getPortfolio: getPortfolio,
  getLongAccessToken: getLongAccessToken,
  getPostIdList: getPostIdList   
};