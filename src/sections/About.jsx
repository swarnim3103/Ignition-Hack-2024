const About = () => {
    return (
      <div className="flex ml-5 mt-10 mr-5 max-md:flex-col max-md:mb-4">
        <h2 className="mr-4 text-blue-600 p-2 text-3xl font-bold whitespace-nowrap">
          About Us
        </h2>
        <div className="border-l-2 rounded-sm p-4 text-lg">
          <p className="">
            At CoinEd, our mission is to empower individuals with the knowledge
            and tools they need to make informed financial decisions. We believe
            that financial literacy is the key to achieving personal and
            professional goals, and we are committed to making high-quality
            financial education accessible to everyone.<br></br>
            <br></br>
            At CoinEd, we provide a wide range of resources designed to help you
            understand and navigate the complexities of personal finance. Our
            offerings include:<br></br>
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Comprehensive Courses:</span> Dive deep
              into topics like budgeting, investing, retirement planning, and more
              with our expertly crafted courses.
            </li>
            <li>
              <span className="font-bold">Interactive quiz:</span> Quiz after
              every lesson to jog memory and learn in effective ways.
            </li>
            <li>
              <span className="font-bold">Tools:</span> Utilize budgeting tools to
              take control and learn basics of planing of your finances.
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;