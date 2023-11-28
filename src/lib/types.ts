export interface ServerCommit {
    id: number;
    projectID: number;
    authorID: string;
    message: string;
    filecount: number;
    timestamp: string;
}

export interface Commit {
    id: number;
    projectID: number;
    authorID: string;
    message: string;
    fileCount: number;
    timestamp: number;
}

export interface File {
    id: number;
    path: string;
    commitid: number;
    size: number;
    hash: string;
    s3key: string;
    projectid: number;
    changetype: number;
}

export interface CommitFull {
    author: string;
    id: number;
    message: string;
    timestamp: string;
    count: number;
    files: File[]
}