export default function Content() {
  return (
    <div className="top-36 left-48 pt-20 pb-20 gap-20">
      <div className=" pb-10 gap-10">
        <div
          className="font-bold 
          font-Montserrat
          text-base leading-6 tracking-normal text-[#23A6F0] text-center"
        >
          <h5 className="">Welcome</h5>

          <h1 className="text-4xl text-white leading-tight tracking-normal font-bold pt-6  ">
            Selling on the <br /> internet like a pro
          </h1>

          <h4 className="text-white  text-lg leading-7 tracking-wider text-center pt-5 font-medium">
            We know how large objects will act, but things on a <br />
            small scale just do not act that way.
          </h4>
          <span className="space-x-2">
            <button className="bg-[#23A6F0] tracking-wider rounded-sm text-white text-sm hover:bg-[#1C86CC] py-3 px-7 text-center font-bold leading-5 mt-7">
              Get Quote Now
            </button>
            <button className=" tracking-wider rounded-sm text-[#23A6F0] text-sm  py-3 px-7 text-center font-bold leading-5 border border-[#23A6F0] hover:bg-[#1C86CC]  hover:text-white">
              Learn More
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
