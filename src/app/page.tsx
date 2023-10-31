import { Commit } from "~/lib/types";
import { Button } from "~/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/ui/card";

async function getData() {
  const res: Response = await fetch("https://app.pdm.18x18az.org/info/commit/recent", { cache: "no-store" });
  const data = await res.json();
  let output: Commit[] = [];
  try {
    for(let i = 0; i < data.length; i++) {
      const commit = data[i];
      output.push({
        id: commit["id"],
        projectID: 0,
        authorID: commit["authorID"],
        message: commit["message"],
        fileCount: commit["filecount"],
        timestamp: parseInt(commit["timestamp"]) / 1000.0
      });
    }
  } catch(err: any) {
    console.error(err);
  }
  return output;
}

export default async function Page() {
  const data = await getData();
    return <>
    <p className="text-3xl mx-8 mt-5 mb-2">Home</p>
    {
      data.map( (value: Commit) => {
        const d = new Date(0);
        d.setUTCSeconds(value.timestamp);
        const msg = value.message !== "" ? <div><i>{value.message}</i><br></br></div> : <p></p>
        return (
          <div className="mb-5 mx-5">
            <Card>
              <CardHeader>
                <CardTitle>{value.authorID} updated {value.fileCount} files</CardTitle>
                <CardDescription>{d.toLocaleString()}</CardDescription>
                <CardContent>
                  {msg}
                  <Button>Review Changes</Button>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        )
      })
    }
    </>
  }