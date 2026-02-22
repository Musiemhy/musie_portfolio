import Navbar from "@/components/Navbar";

export default function Home() {
  return (
<div className="mx-[12%] flex flex-col gap-8">
      <div className="absolute h-full">
        <div className="fixed left-[30%] top-0 w-px h-full bg-gray-800" />
        <div className="fixed left-1/2 top-0 w-px h-full bg-gray-800" />
        <div className="fixed left-[70%] top-0 w-px h-full bg-gray-800" />
      </div>
      <Navbar />
      <div className="flex flex-col gap-10px">
        <h1>Musie Merseeahazen</h1>
        <p>Fullstack Developer | AI Engineer | Game Developer</p>
      </div>
    </div>
  );
}
