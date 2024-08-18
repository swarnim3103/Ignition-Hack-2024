const About = () => {
    return (
      <div className="ml-5 mt-10 mr-5 max-md:flex-col max-md:mb-4">
        <h2 className="mr-4 text-green-600 p-2 text-3xl font-bold ">
          What is Zero Waste?
        </h2>
        <hr></hr>
        <div className="border-l-2 rounded-sm p-4 text-lg">
          <p className="">
          Zero waste is a philosophy and strategy aimed at minimizing or eliminating waste by redesigning products, processes, and lifestyles to ensure that all resources are used to their fullest extent. The ultimate goal of zero waste is to create a closed-loop system where materials are reused, recycled, or composted rather than sent to landfills or incinerated. By adopting zero waste practices, businesses and individuals can reduce their environmental impact, conserve natural resources, and promote sustainability.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Environmental Protection: By reducing waste, zero waste strategies help lower pollution, conserve natural resources, and reduce greenhouse gas emissions.</span> 
            </li>
            <li>
              <span className="font-bold">Economic Efficiency: Zero waste practices often lead to cost savings by minimizing resource use, reducing disposal costs, and generating revenue from recyclables.</span> 
            </li>
            <li>
              <span className="font-bold">Sustainable Living: Encourages a shift in consumption habits, promoting a more sustainable lifestyle that prioritizes long-term environmental health over short-term convenience.</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;