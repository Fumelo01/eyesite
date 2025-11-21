export default function Footer () {
  return <>
    <div className="flex flex-col h-screen p-8 p-b-2 bg-neutral-800 text-neutral-50 box-border">
      <div className="flex justify-between items-center p-2 ">
        <span className="text-3xl">Logo</span>
        <div className="grid grid-cols-3 p-4">
          <span className="m-2">a</span>
          <span className="m-2">a</span>
          <span className="m-2">a</span>
          <span className="m-2">a</span>
          <span className="m-2">a</span>
          <span className="m-2">a</span>
        </div>
      </div>
      <div className="">© 2025 Eyesite Ventures, Inc. All rights reserved.</div>
      <div className="bg-teal-200 rounded-lg flex-1 m-8"></div>
      <div className=" flex justify-between bg-red-200">
        <span>Designed by somebody</span>
        <div className="text-neutral-950">
          <i className="fa-brands fa-facebook p-2 rounded-full bg-neutral-100 m-2"></i>
          <i className="fa-brands fa-instagram p-2 rounded-full bg-neutral-100 m-2"></i>
          <i className="fa-brands fa-youtube p-2 rounded-full bg-neutral-100 m-2"></i>
        </div>
      </div>




    </div>
  </>
}