import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
          <a href="#" className="hover:text-black">
            Policy
          </a>
        </div>
      </nav>

      <main className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 py-20 bg-gray-50">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-primary">ShadeCN Landing</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A beautiful and minimal demo page built using Next.js, Tailwind, and
            shadcn/ui.
          </p>
          <Button>Get Started</Button>
        </div>

        <div className="flex-1">
          <Image
            src="/img/priya-2.jpg"
            alt="Main Hero Image"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </main>

      <section className="flex justify-center py-10 bg-white">
        <Card className="w-[350px] shadow-lg">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We aim to create beautiful, functional, and reusable UI components
              powered by shadcn/ui.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
