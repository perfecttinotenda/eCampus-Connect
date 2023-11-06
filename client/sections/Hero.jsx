import { statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative
        xl:w-2/5 flex flex-col
        justify-center items-start
        w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">Our Semister Event</p>
        <h1 className="mt-10
          font-palanquin text-8xl
          max-sm:text-[72px]
          max-sm:leading-[82]
          font-bold"
        >
          <span 
            className="xl:bg-white
            xl:whitespace-nowrap
            relative z-10 pr-10"
          >
            The New Event
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>eConnect</span> Campus
        </h1>
        <p className="font-montserrat text-slate-gray 
          text-lg leading-8 
          mt-6 mb-14 sm:max-w-sm"
        >
          No barriers of networking with your peers
        </p>
        <Button label="Join Us" iconURL={arrowRight} />
        <div
          className="flex
          justify-starts items-start
          flex-wrap w-full mt-20
          gap-16"
        >
          {statistics.map((stat,
            index) => (
              <div key={stat.label}>
                <p className="tex-4xl
                font-palanguin
                font-bold"
                >
                  {stat.value}
                </p>
                <p
                  className="leading-7
                  font-monserrat
                  text-slate-gray"
                >
                  {stat.label}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
