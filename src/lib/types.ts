export interface Commit {
    id: number;
    projectID: number;
    authorID: string;
    message: string;
    fileCount: number;
    timestamp: number;
  }