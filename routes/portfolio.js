var express = require('express');
var router = express.Router();

const Instagram = require('instagram-web-api');
const { username, password } = {
    username: 'rickyang2910',
    password: 'a790909'
};

const client = new Instagram({ username, password });
client.login();
let portfolios = [];


/* Route Start */ 
router.get('/:portfolio', (req, res) => {
    const portfolio = req.params.portfolio;
    res.send(portfolio);
});

router.get('/', async(req, res) => {
    if(portfolios.length === 0){
        await refreshPortfolio();
    }
    res.send(portfolios);
});    

const refreshPortfolio = async() => {
    let posts = await client.getPhotosByUsername({ username: 'beisnest', first: 50});
    let hasNextPage = true;
    let portfolio = {};
    console.log('test', posts);
    console.log('test 1 ', posts.user.edge_owner_to_timeline_media.page_info);
    console.log('test 2 ', posts.user.edge_owner_to_timeline_media.edges);
    while(hasNextPage){
        for(const post of posts.user.edge_owner_to_timeline_media.edges){
            console.log('post test', post);
            const photoUrl  = post.node.display_url;
            const caption = post.node.edge_media_to_caption.edges[0].node.text;
            const postType = post.node.__typename;
            let detailPhotoUrl = [];
            if(post.node.edge_sidecar_to_children){
                for(const url of post.node.edge_sidecar_to_children.edges){
                    detailPhotoUrl.push(url.node.display_url);
                }
            }
            portfolio['photoUrl'] = photoUrl;
            portfolio['caption'] = caption;
            portfolio['postType'] = postType;
            if(detailPhotoUrl.length > 0){
                portfolio['detailPhotoUrl'] = detailPhotoUrl;
            }
            portfolios.push(portfolio);
            portfolio = {};
            detailPhotoUrl = [];
        }
        hasNextPage = posts.user.edge_owner_to_timeline_media.page_info.has_next_page;
        if(hasNextPage){
            posts = await client.getPhotosByUsername({ username: 'beisnest', first: 50, after: posts.user.edge_owner_to_timeline_media.page_info.end_cursor});
        }
    }
    console.log('portfolios', portfolios);
    console.log('portfolios', portfolios.length);
} 

module.exports = router;
