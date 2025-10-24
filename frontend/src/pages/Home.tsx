// NOTE: when making new api calls use https://backend:PORT to make the calls since we are using docker during dev

import Hero from "../components/homePage/hero";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 pb-16">
        <Hero />
      </div>
    </div>
  );
}
