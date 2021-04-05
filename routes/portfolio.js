var express = require('express');
var router = express.Router();

const Instagram = require('instagram-web-api')
const { username, password } = {
    username: 'chings.shop',
    password: 'Yuyu880510'
};

(async () => {
    const client = new Instagram({ username, password });
    await client.login();

    router.get('/:portfolio', (req, res) => {
        const portfolio = req.params.portfolio;
        res.send(portfolio);
    });
    
    router.get('/', async(req, res) => {
        const posts = await client.getPhotosByUsername({ username: username })
        let portfolios = [];
        let portfolio = {};
        console.log('test', posts.user.edge_owner_to_timeline_media.edges[0]);
        for(const post of posts.user.edge_owner_to_timeline_media.edges){
            //console.log('post test', post);
            const photoUrl  = post.node.display_url;
            const caption = post.node.edge_media_to_caption.edges[0].node.text;
            let detailPhotoUrl = [];
            if(post.node.edge_sidecar_to_children){
                for(const url of post.node.edge_sidecar_to_children.edges){
                    detailPhotoUrl.push(url.node.display_url);
                }
            }
            portfolio['photoUrl'] = photoUrl;
            portfolio['caption'] = caption;
            if(detailPhotoUrl.length > 0){
                portfolio['detailPhotoUrl'] = detailPhotoUrl;
            }
            portfolios.push(portfolio);
            portfolio = {};
            detailPhotoUrl = [];
        }
        console.log('portfolios', portfolios);
        res.send(portfolios);
    });    
})();


module.exports = router;
