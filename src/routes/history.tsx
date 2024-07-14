import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'

type HistorySearch = {
  offset: number
}

export const Route = createFileRoute('/history')({
  validateSearch: (search: Record<string, unknown>): HistorySearch => {
    return {
      offset: Number(search.offset ?? 0)
    }
  },
  component: () => <HistoryPage />
})

function HistoryPage() {
  const { offset } = Route.useSearch()
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['offset' + String(offset)],
    queryFn: async () => {
      const endpoint = 'https://app.pdm.18x18az.org' + '/info/commit/offset/' + String(offset);
      const resp = await fetch(endpoint);
      return resp.json()
    }
  })

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
      <div className='flex flex-row flex-none space-x-4'>
      <Link to='/history' search={{ offset: offset - 5}} className='font-semibold' disabled={offset == 0 ? true : false}><Button disabled={offset == 0 ? true : false}>View Newer Updates</Button></Link>
      <Link to='/history' search={{ offset: offset + 5}} className='font-semibold'><Button>View Older Updates</Button></Link>
      </div>
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
        <CardDescription>{d.toLocaleString()}</CardDescription>
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