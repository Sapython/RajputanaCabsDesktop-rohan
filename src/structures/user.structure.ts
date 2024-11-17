

export type UserStructure = {

    displayName: string;
    email: string;
    phoneNumber: number;
    photoURL: string;
    access: UserAccess;
    userId:string;
    emailVerified:boolean,
    dateOfBirth:number,
    gender:string,
    address:string
}


export type UserAccess={
    access:'admin'|'user'|'guest';
}

export type ExtraLoginEmailInfo= {
    displayName:string;
    phoneNumber:number;
    photoURL:string;
    dateOfBirth:number,
    gender:string,
    address:string
}