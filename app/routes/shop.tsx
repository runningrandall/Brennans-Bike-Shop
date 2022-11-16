import { useOptionalUser } from "~/utils";

import logo from "~/images/bbs_logo.jpeg";
import shop1 from "~/images/IMG_0046.jpeg";
import shop2 from "~/images/IMG_0047.jpeg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <img
          style={{maxWidth: '300px', margin: '0 auto'}}
          src={logo}
          alt="Brennan's Bike Shop"
        />
        <div className="relative px-4 pt-4 pb-8">
          <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">Our Bike Shop</h1>
          <p className="py-4">Toolbench:</p>
          <img src={shop1} alt="Bike Shop Picture 1" style={{maxWidth: '600px', margin: '0 auto'}} />
          <p className="py-4">Bike Repair In Action:</p>
          <img src={shop2} alt="Bike Shop Picture 2" style={{maxWidth: '600px', margin: '0 auto'}} />
        </div>
      </div>
    </main>
  );
}
