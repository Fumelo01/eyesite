// import Layout from "./layout";
//import { useSidebar } from "@/components/ui/sidebar"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { CustomTrigger } from "./components/ui/CustomTrigger"


export default function Head() {
 // const { toggleSidebar } = useSidebar()
  return  <>
  <header className="p-3 sticky bg-white z-10 top-0  items-center flex justify-between  shadow-md">
      <div>
        
        <span>Eyesite</span>
      </div>
      <div >
        {/* <CustomTrigger/> */}
        <i className="hover:bg-teal-600 rounded-md p-2 fa-solid fa-bars" ></i>
      </div>
    </header>
  </>
}