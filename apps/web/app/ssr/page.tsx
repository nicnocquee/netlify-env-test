import { Button } from "@workspace/ui/components/button";
import { env } from "@workspace/env";
import { headers } from "next/headers";

export default async function Page() {
  const _ = env.WHATSAPP_API_ACCESS_TOKEN;
  // do something with _
  const h = await headers();
  console.log(h);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World this is ssr page</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
