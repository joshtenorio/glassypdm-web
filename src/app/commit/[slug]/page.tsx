import React from 'react'
import { CommitFull, File } from '~/lib/types';
import { Button } from '~/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/ui/table';

interface DownloadResponse {
    s3Url: string;
    key: string;
}

async function getLink(s3key: string) {
    const request = "https://app.pdm.18x18az.org/download/s3/" + s3key;
    const response = await fetch(request, { next: { revalidate: 3580 } });
    const data = await response.json() as DownloadResponse;

    return data.s3Url;
}

async function getData(commitid: string) {
    const request = "https://app.pdm.18x18az.org/info/commit/" + commitid;
    const res = await fetch(request, { cache: 'no-store' });
    const commit = await res.json() as CommitFull;

    for (let i = 0; i < commit.files.length; i++) {
        if (commit.files[i]!.s3key) {
            commit.files[i]!.url = await getLink(commit.files[i]!.s3key);
        }
    }

    return commit;
}

async function Page({ params }: { params: { slug: string } }) {
    const commit = await getData(params.slug);
    const time = parseInt(commit.timestamp) / 1000.0;
    const d = new Date(0);
    d.setUTCSeconds(time);
    const msg = commit.message !== "" ? <div><i>{commit.message}</i><br></br></div> : <p></p>;

    return (
        <div>
            <h1>Project Update {commit.id}</h1>
            <h2>Author: {commit.author}</h2>
            <h2>Timestamp: {d.toLocaleString()} UTC</h2>
            <p>{msg}</p>
            <br></br>
            <h2>Files Updated:</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Path</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Revision</TableHead>
                        <TableHead>Download Revision</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {commit.files.map((file: File) => {
                        const filename = file.path.split("\\")[file.path.split("\\").length-1]
                        let button = <></>;
                        if (file.s3key) {
                            button = <Button><a href={file.url} download={filename}>Download</a></Button>;
                        }
                        return (
                            <TableRow key={file.id}>
                            <TableCell>{file.path}</TableCell>
                            <TableCell>{Math.round((file.size / 1049000) * 100) /100} MB</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell>{button}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Page