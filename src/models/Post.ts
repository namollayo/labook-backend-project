export interface PostDB {
    id : string,
    creator_id : string,
    content : string,
    likes : number,
    dislikes : number,
    created_at : string,
    updated_at: string
}

export interface PostModel {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    creator: {
        id: string,
        name: string
    }
}

export class Post {
    constructor(
        private id : string,
        private creatorId : string,
        private creatorName : string,
        private content : string,
        private likes : number,
        private dislikes : number,
        private createdAt : string,
        private updatedAt: string
    ) {}

    public get postId() : string {
        return this.id
    }
    
    public get postCreatorId() : string {
        return this.creatorId
    }
    public get postCreatorName() : string {
        return this.creatorName
    }
    
    public get postContent() : string {
        return this.content
    }
    
    public get postLikes() : number {
        return this.likes
    }
    
    public get postDislikes() : number {
        return this.dislikes
    }
    
    public get postCreatedAt() : string {
        return this.createdAt
    }
    public get postUpdatedAt() : string {
        return this.updatedAt
    }
    
    
    public set userId(v : string) {
        this.id = v;
    }
    
    public set postCreatorId(v : string) {
        this.creatorId = v;
    }

    public set postCreatorName(v : string) {
        this.creatorName = v;
    }

    public set postContent(v : string) {
        this.content = v;
    }
    
    public set postLikes(v : number) {
        this.likes = v;
    }
    
    public set postDisikes(v : number) {
        this.dislikes = v;
    }

    public set postUpdatedAi(v : string) {
        this.updatedAt = v;
    }
    
    public toDBModel() : PostDB {
        return {
            id : this.id,
            creator_id : this.creatorId,
            content : this.content,
            likes : this.likes,
            dislikes : this.dislikes,
            created_at : this.createdAt,
            updated_at: this.updatedAt
        }
    }
    
    
    public toPostModel() : PostModel {
        return {
            id : this.id,
            creator: {
                id: this.creatorId,
                name: this.creatorName
            },
            content : this.content,
            likes : this.likes,
            dislikes : this.dislikes,
            createdAt : this.createdAt,
            updatedAt: this.updatedAt
        }
    }
    
}