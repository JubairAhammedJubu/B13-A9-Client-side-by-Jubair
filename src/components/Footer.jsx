import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#011239] text-gray-300">
      <div className="max-w-7xl mx-auto pt-10 md:pt-30 pb-7.5 px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {/* Logo & Description */}
          <div className="col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4">SportNest</h2>

            <p className="text-sm leading-relaxed text-gray-400">
              Premium digital sports facilities for
              <br />
              professionals, teams and players. Enjoy
              <br />
              with our suite of powerful facilities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Product</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Facilities
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Capacity
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Company</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Resources</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">
              Social Links
            </h3>

            <div className="flex space-x-3">
              <Image
                src="/assets/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
              />

              <Image
                src="/assets/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />

              <Image
                src="/assets/twitter.png"
                alt="Twitter"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2026 SportNest. All rights reserved.</p>

          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
