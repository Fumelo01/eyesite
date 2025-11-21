export default function Nav () {
  return <>
    <div className="p-2 flex justify-between shadow-md">
      <div>
        <span>Eyesite</span>
      </div>
      <div >
        
      </div>
    </div>
    <div className="flex flex-col h-40 bg-neutral-700 text-neutral-50 justify-center items-center">
      <div className="flex gap-8">
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Press</span>
        <span>Accessibility</span>
        <span>Partners</span>
      </div>
      <div className="p-4 w-80 flex justify-between">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-youtube"></i>



      </div>
      <div className=""></div>
      
    </div>
  </>
}