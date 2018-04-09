function solve(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return`Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let baseStr = super.toString();
            if(this.comments.length >= 1) {
                return `${baseStr}\nRating: ${this.likes - this.dislikes}\nComments:\n * ${this.comments.join('\n * ')}`
            }
            else return `${baseStr}\nRating: ${this.likes - this.dislikes}`;
        }
    }
    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            let baseStr = super.toString();
            return `${baseStr}\nViews: ${this.views}`
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}