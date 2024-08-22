import MapWrapper from "@/components/MapWrapper";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const country = headersList.get("x-vercel-ip-country");

  return <MapWrapper country={country} />;
}
