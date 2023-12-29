import { Button } from "~/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "glassyPDM"
}

export default async function Page() {
    return <>
    <p className="text-3xl mx-8 mt-5 mb-2">Home</p>
    <Card>
    <CardHeader>
      <CardTitle>SDM-24</CardTitle>
      <CardDescription>2023-24</CardDescription>
    </CardHeader>
    <CardContent>
      <Button>
        <Link href={"/project/0"}>
        Go to Project Home
        </Link>
      </Button>
    </CardContent>
    </Card>
    </>
  }