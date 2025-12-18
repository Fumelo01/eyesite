

export default function Footer () {
  return <>
    {/* <div className="flex flex-col h-screen font-helvetica pt-4 pb-2 px-20 bg-neutral-800 text-neutral-50 box-border">
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




    </div> */}
    <footer className="w-full bg-neutral-300 text-secondary-foreground ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                E
              </div>
              <span className="font-bold text-lg">EYESITE</span>
            </div>
            <p className="text-sm opacity-80">Professional eye care for everyone</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/services" className="hover:opacity-100 transition-opacity">
                  Eye Exams
                </a>
              </li>
              <li>
                <a href="/services" className="hover:opacity-100 transition-opacity">
                  Eyeglasses
                </a>
              </li>
              <li>
                <a href="/services" className="hover:opacity-100 transition-opacity">
                  Contact Lenses
                </a>
              </li>
              <li>
                <a href="/services" className="hover:opacity-100 transition-opacity">
                  Treatments
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/shop" className="hover:opacity-100 transition-opacity">
                  Designer Frames
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:opacity-100 transition-opacity">
                  Classic Styles
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:opacity-100 transition-opacity">
                  Sport & Active
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="tel:555-0199" className="hover:opacity-100 transition-opacity">
                  555-0199
                </a>
              </li>
              <li>
                <a href="mailto:hello@eyesite.local" className="hover:opacity-100 transition-opacity">
                  hello@eyesite.local
                </a>
              </li>
              <li>Monday - Friday: 9AM - 6PM</li>
              <li>Saturday: 10AM - 4PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-400 pt-8">
          <p className="text-center text-sm opacity-80">&copy; 2025 EYESITE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
}