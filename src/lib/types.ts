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