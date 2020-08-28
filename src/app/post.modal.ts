export class Post {
    public postType: string;
    public postValue: string;

    public likeCount: number;
    public subscribeCount: number;
    public commentList: any[];

    public constructor() {
        //Default Assumptions
        this.postType = 'TEXT';
        this.postValue = '';
        this.likeCount = 0;
        this.subscribeCount = 0;
        this.commentList = [];
    }
}