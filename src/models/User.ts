export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
} 

export interface TokenPayload {
    id: string,
    name: string,
    role: USER_ROLES
}

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
}
export interface UserModel {
    id: string,
    name: string,
    email: string,
    role: USER_ROLES,
    createdAt: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES,
        private createdAt: string
    ) {}

    public get userId() : string {
        return this.id
    }
    
    public get userName() : string {
        return this.name
    }
    
    public get userEmail() : string {
        return this.email
    }
    
    public get userPassword() : string {
        return this.password
    }
    
    public get userRole() : USER_ROLES {
        return this.role
    }
    
    public get userCreatedAt() : string {
        return this.createdAt
    }
    
    
    public set userId(v : string) {
        this.id = v;
    }
    
    public set userName(v : string) {
        this.name = v;
    }

    public set userEmail(v : string) {
        this.email = v;
    }
    
    public set userPassword(v : string) {
        this.password = v;
    }
    
    public set userRole(v : USER_ROLES) {
        this.role = v;
    }
    
    public toUserDBModel() : UserDB {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            created_at: this.createdAt 
        }
    }
    
    public toUserModel() : UserModel {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            role: this.role,
            createdAt: this.createdAt 
        }
    }
    
}