import {
  CustomerReviews,
  Footer,
  Hero,
  PopularEvents,
  SpecialEvents,
  Services,
  Subscribe,
  HostEvents,
} from "../sections";
import Nav from "../components/Nav";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularEvents />
      </section>
      <section className="padding">
        <HostEvents />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialEvents />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
