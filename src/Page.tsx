import Head from "./Head";
import Footer from "./Footer";
import { services } from "./lib/data";
import { ArrowRight } from "lucide-react";
// import Layout from "./layout";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"


export default function Page () {
  

  return <><div className="">
    <header className="sticky p-10 z-10 bg-cyan-600">hdu</header>
    <div className="flex bg-amber-0">
        <SidebarProvider>
        
        <AppSidebar/>
        
        <main className="flex-1">
          {/* Services Preview Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 ">
              {services.map((service) => (
                <a 
                key={service.id}
                href="./"
                className="hover:drop-shadow-lg border border-neutral-100 hover:border-teal-300 px-6 bg-neutral-50 mx-2 py-4 rounded-lg "
                >
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className=" font-bold py-2">{service.title}</h3>
                  <p className="text-neutral-500">{service.description}</p>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View all services
                <ArrowRight size={18} />
              </a>
            </div>
          </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-16 md:py-24 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose EYESITE</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary">
                      
                    </div>
                    <h3 className="text-xl font-bold">Expert Care</h3>
                    <p className="text-foreground/70">Licensed opticians with years of professional experience</p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-lg bg-accent/10 text-accent">
                      
                    </div>
                    <h3 className="text-xl font-bold">Quality Products</h3>
                    <p className="text-foreground/70">Premium frames and lenses from trusted brands</p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary">
                      
                    </div>
                    <h3 className="text-xl font-bold">Personal Service</h3>
                    <p className="text-foreground/70">Tailored solutions for your unique vision needs</p>
                  </div>
                </div>
              </div>
            </section>


            {/* CTA Section */}
            <section className="w-full py-16 md:py-20 px-4 bg-teal-50  border-t border-neutral-300">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to see better?</h2>
                <p className="text-lg text-foreground/70 text-balance">
                  Schedule your eye exam today and discover the EYESITE difference
                </p>
                <a
                  href="/contact"
                  className="inline-flex px-8 py-3 bg-teal-500 text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Your Appointment
                </a>
              </div>
            </section>

        </main>

      </SidebarProvider>
    </div>
    
    <Footer/>
  </div></>
}