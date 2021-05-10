class Portfolio {
    constructor(id, caption, likeCount, mediaType, mediaUrl, timestamp){
        this.id = id;
        this.caption = caption;
        this.likeCount = likeCount;
        this.mediaUrl = mediaUrl;
        this.mediaType = mediaType
        this.timestamp = timestamp;
    }       
}

Portfolio.prototype.setCaption = (caption) => {
    this.caption = caption;
}

Portfolio.prototype.setLikeCount = (likeCount) => {
    this.likeCount = likeCount;
}

Portfolio.prototype.setMediaUrl = (mediaUrl) => {
    this.mediaUrl = mediaUrl;
}

Portfolio.prototype.setTimestamp = (timestamp) => {
    this.timestamp = timestamp;
}

module.exports = Portfolio;