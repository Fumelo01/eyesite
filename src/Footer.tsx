

export default function Footer () {
  return <>
    <div className="flex flex-col h-screen font-helvetica pt-4 pb-2 px-20 bg-neutral-800 text-neutral-50 box-border">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-helvetica">Logo</span>
        <div className="grid grid-cols-3 p-4">
          <span className="mx-2">About</span>
          <span className="mx-2">Services</span>
          <span className="mx-2">Products</span>
          <span className="mx-2">Contact</span>
          <span className="mx-2">Privacy</span>
          <span className="mx-2">Contact</span>
          <span className="mx-2">Legal</span>
          <span className="mx-2">Legal</span>
          <span className="mx-2">Privacy</span>
        </div>
      </div>
      <div className="">© 2025 Eyesite Ventures, Inc. All rights reserved.</div>
      <div className="bg-red-600 rounded-lg flex-1  my-4">
      </div>
      <div className=" flex justify-between items-center">
        <span>Designed by somebody</span>
        <div className="text-neutral-950">
          <i className="fa-brands fa-facebook p-1 rounded-full bg-neutral-100 m-2"></i>
          <i className="fa-brands fa-instagram p-1 rounded-full bg-neutral-100 m-2"></i>
          <i className="fa-brands fa-youtube p-1 rounded-full bg-neutral-100 m-2"></i>
        </div>
      </div>




    </div>
  </>
}