import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-5">
        <div className="m-5">
          <h3 className="font-bold mb-4">Company Info</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Carrier
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#8D5CF6]">
                We are hiring
              </a>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Carrier
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                We are hiring
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h3 className="font-bold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Business Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                User Analytic
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Live Chat
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Unlimited Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                IOS & Android
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Watch a Demo
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                Customers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#8D5CF6]">
                API
              </Link>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h3 className="font-bold mb-4">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MdPhone className="mr-2 text-[#8D5CF6]" /> (480) 555-0103
            </li>
            <li className="flex items-center">
              <MdLocationOn className="mr-2 text-[#8D5CF6]" />
              <Link href={"https://maps.app.goo.gl/HVXJf2Bk7tZUXerz9"}>
                4517 Washington Ave. Manchester, Kent
              </Link>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2 text-[#8D5CF6]" /> debra.holt@example.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-8 pt-4 m-5">
        <p className="text-sm text-center md:text-left">
          Made With Love By Figmaland All Right Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-[#8D5CF6]">
            <FaFacebookF />
          </Link>
          <Link href="#" className="text-[#8D5CF6]">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[#8D5CF6]">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
