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
    const clientSecret = beinestClientSecret;
    const shortTernAccessToken = 'EAAEVjUnllUABAMSNpopqwpFksA0KpKrADYARHZCR3tbj0BI3rlBftze7d6MDLQ2wCYqamUqoXzeggOtGKG0pn2rZAmtib2aVacydZCbZBzLTZBXkMfuxMywZCqGE5jpZAq0CtU0ZC0EOtKiYL7whGR9QS4pok8Uz432bR7DhIu2DcZAZCRBTwlCU1xvdnqL297O2iHpIW7DTKTmHmCkezs5ZB9Q'
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
  //https://graph.facebook.com/v10.0/17867716613413911/?fields=caption
  await axios.get(`${domain}/${apiVersion}/${postId}/?fields=caption,like_count,media_type,media_url,timestamp,thumbnail_url&access_token=${beinestAccessToken}`).then(response => {
     //console.log(response);
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