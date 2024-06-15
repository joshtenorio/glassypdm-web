import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commit/$id')({
  component: () => <CommitPage />
})

async function getLink(s3key: string) {
  const endpoint = 'https://app.pdm.18x18az.org' + '/download/s3/' + s3key
  const resp = await fetch(endpoint);
  const data = await resp.json();
  return data.s3Url;
}
function CommitPage() {
  const { id } = Route.useParams();
  const { isPending, isError, error, data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const endpoint = 'https://app.pdm.18x18az.org' + '/info/commit/' + id;
      const resp = await fetch(endpoint);
      const data: any = await resp.json();

      for(let i = 0; i < data.files.length; i++) {
        if(data.files[i].s3key) {
          data.files[i].url = await getLink(data.files[i].s3key)
        }
      }

      return data
    }
  })

  if(isPending) {
    return (
      <div className='p-2'>
        <Skeleton className='w-48 h-10' />
      </div>
    )
  }

  if(isError) {
    return (
      <div className='p-2'>
        <div>Encountered error {error.message}</div>
      </div>
    )
  }

  if(data) console.log(data)

  const d = new Date(0);
  d.setUTCSeconds(parseInt(data.timestamp) / 1000.0)
  return (
    <div className='p-4'>
      <div>Project Update {id}</div>
      <div>Author: {data.author}</div>
      <div>Updated at: {d.toLocaleString()} UTC</div>
      <div>{data.count} files updated</div>
      <div>{data.message}</div>
      <Separator className='w-96 my-4'/>
      <div>Files updated:</div>
      <br />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Path</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.files.map((file: any) => {
            const filename = file.path.split("\\")[file.path.split("\\").length-1]
            let button = <></>;
            if (file.s3key) {
                button = <Button><a href={file.url} download={filename}>Download</a></Button>;
            }
            else {
              button = <div>File deleted</div>
            }
            return (
              <TableRow id={file.id}>
                <TableCell>{file.path}</TableCell>
                <TableCell>{Math.round((file.size / 1049000) * 100) /100} MB</TableCell>
                <TableCell>{button}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}