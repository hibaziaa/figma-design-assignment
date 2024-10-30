export default function Navbar() {
  return (
    <div className="h-24 flex justify-center">
      <h3 className="mt-5 ml-32 text-2xl leading-10 font-bold font-Montserrat ">
        BrandName
      </h3>
      <div className="mt-7 ml-20 text-center h-6 font-Montserrat text-sm font-bold leadin-6 tracking-wider space-x-4 text-white">
        <a href="#" className= "hover:text-[#23A6F0]">Home</a>
        <a href="#" className="hover:text-[#23A6F0]" >About</a>
        <a href="#"  className="hover:text-[#23A6F0]">Pricing</a>
        <a href="#"  className="hover:text-[#23A6F0]">Contact</a>
      </div>
      <span className=" font-bold text-sm pl-64 space-x-9 m-5">
        <button className="text-white p-2 leading-5 text-sm tracking-wider font-montserrat  hover:text-[#23A6F0]">
          Login
        </button>
        <button className="py-2 px-6 leading-5 tracking-wider uppercase text-white hover:bg-[#1C86CC] rounded-sm font-montserrat bg-[#23A6F0]">
          Join us
        </button>
      </span>
    </div>
  );
}
