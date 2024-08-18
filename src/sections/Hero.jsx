import {Typewriter} from "./index"
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 from-4% via-green-400 via-20% to-green-800 to-100% h-3/4 flex justify-center items-center">
  <div className="w-80 text-white">
    <Typewriter text="WasteZero" typingSpeed={100} erasingSpeed={50} delay={2000}
        />
    <hr className="border-green-950 ml-20"/>
    <div className="flex flex-1 justify-center">
      <p className="text-4xl pt-10 pb-20 md:pb-10 drop-shadow-md text-center text-green-100 pl-20 ">
        Transforming <span className="text-green-950 underline">Waste</span> Into Business <span className="text-green-950 underline">Value</span>
      </p>
    </div>
  </div>
</div>
  );
};

export default Hero;