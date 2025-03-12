import Nav from "./header";
import PropertyFilter from "./propertytab";

const Hero = () => {
  return (
    <div className="bg-heroFrame bg-cover bg-center text-white bg-no-repeat w-full min-h-[628px] px-6 md:px-12 lg:px-24 py-8 text-center flex flex-col items-center">
      <Nav />
      <div className="mt-16 md:mt-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          The REAL ESTATE <br className="hidden md:block" /> Market Place
        </h2>
        <p className="font-light text-sm md:text-md lg:text-lg mt-2 leading-relaxed">
          King'sCourt connects you with the person that knows <br className="hidden md:block" />
          best about a property, the listing agent.
        </p>
      </div>
      <div className="mt-10 md:mt-16 w-full max-w-3xl">
        <PropertyFilter />
      </div>
    </div>
  );
};

export default Hero;
