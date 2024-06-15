import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['home'],
    queryFn: async () => {
      const endpoint = 'https://app.pdm.18x18az.org' + '/info/commit/recent';
      const resp = await fetch(endpoint);
      return resp.json()
    }
  });

  if(isPending) {
    return (
      <div className='py-4 px-16 space-y-4'>
        <Skeleton className='w-96 h-48' />
        <Skeleton className='w-96 h-48' />
        <Skeleton className='w-96 h-48' />
        <Skeleton className='w-96 h-48' />
      </div>
    )
  }
  if(isError) {
    return (
    <div>An error occured: {error.message}</div>
    )
  }

  return (
    <div className="py-4 px-16 space-y-4 content-center">
      {
        data.map((commit: any) => {
          return(
          <CommitCard id={commit.id} author={commit.authorID} numFiles={commit.filecount} message={commit.message} timestamp={commit.timestamp} key={commit.id}/>
          )
        })
      }
    </div>
  )
}

interface CommitCardProps {
  id: number
  author: string
  message: string
  timestamp: string
  numFiles: number
}
function CommitCard(props: CommitCardProps) {
  const d = new Date(0);
  d.setUTCSeconds(parseInt(props.timestamp) / 1000.0)
  return (
    <Card className='w-fit'>
      <CardHeader>
        <CardTitle>Project Update {props.id}: {props.author} made {props.numFiles} changes</CardTitle>
        <CardDescription>{d.toLocaleString()} UTC</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        {props.message}
        <Link to='/commit/$id' params={{ id: String(props.id)}} className='py-4'>
        <Button className='font-semibold'>View Update Details</Button>
        </Link>
      </CardContent>
    </Card>
  )
}