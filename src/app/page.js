import HomeComponet from "@/components/Home";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <main className="container max-w-screen-2xl mx-auto">
      <Navbar />
      <HomeComponet />
      <Footer />
    </main>
  );
}
