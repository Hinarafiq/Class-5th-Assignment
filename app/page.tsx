import Image from "next/image";

export default function Home() {
  return (
  <div>
      <nav className="flex bg-blue-900 w-full h-20">
        <img src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" width="75" height="80"></img>

        <div className="text-blue-400 font-extrabold p-8 ">Tuition Free Education Program On Latest Technology</div>

        <div className= "flex w-44 bg-blue-900 font-bold m-9">
          <div className="text-white font-bold">Home</div>
         </div>

          <div className= "flex w-44 bg-blue-900 font-bold m-9">  
          <div className="text-white font-bold">Apply</div>
          </div>

          <div className= "flex w-44 bg-blue-900 font-bold m-9">
          <div className="text-white font-bold">Jobs</div>
          </div>

          <div className= "flex w-44 bg-blue-900 font-bold m-9">
          <div className="text-white font-bold">Results</div>
          </div>

          <div className= "flex w-44 bg-blue-900 font-bold m-9">
          <div className="text-white font-bold">Courses</div>
        </div>
      </nav>

      <nav className="flex bg-white justify-around w-full h-20">
      <div className="bg-white h-80 w-80 m-16 ">
        <img src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg"></img>
      </div>
      <div className="bg-white h-80 w-80 m-16">
        <img src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg"></img>
      </div>
      <div className="bg-white h-80 w-80 m-16">
        <img src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"></img>
      </div>
      </nav>

      <nav className= "flex bg-white w-full h-20 m-60 p-36">
        <div className="bg-white h-80 w-80 m-14">
          <img src="https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg" ></img>
        </div>
        <div className="bg-white h-56 w-64 m-14">
          <img src="https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg" ></img>
        </div>
      </nav>
    </div>
  )
}