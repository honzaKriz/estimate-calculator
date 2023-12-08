import Nav from "@/components/Nav";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <Card className="bg-white">
        <p>This is inside the card component.</p>
      </Card>
    </main>
  );
}
