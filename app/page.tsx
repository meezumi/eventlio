import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* this is from the shadcn component library, and can have tailwindcss class names */}
      <Button variant='destructive' className="px-10"> Delete</Button>
      {/* <Button >Hello </Button> */}
    </main>
  );
}
