import Link from "next/link";
import NavigationHeader from "./components/NavigationHeader";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <NavigationHeader></NavigationHeader>
      <div className="text-black flex">
        Home Page
      </div>
    </div>
  );
}
