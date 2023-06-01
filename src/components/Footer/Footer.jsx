import React from "react";
import icon from "../../assets/icons/groupfbtwins.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] text-white py-10">
      <div className="container mx-auto py-12 px-4">
        <div className="pb-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">Job Planet</h3>
            <p className="font-light text-left py-3">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={icon} alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Company</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Work</a>
              </li>
              <li className="mb-2">
                <a href="#">Latest News</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Product</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">Prototype</a>
              </li>
              <li className="mb-2">
                <a href="#">Plans & Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Customers</a>
              </li>
              <li className="mb-2">
                <a href="#">Integration</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Support</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">Help Desk</a>
              </li>
              <li className="mb-2">
                <a href="#">Sales</a>
              </li>
              <li className="mb-2">
                <a href="#">Become a Partner</a>
              </li>
              <li className="mb-2">
                <a href="#">Developers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Contact</h3>
            <p className="text-left ps-5">524 Broadway , NYC</p>
            <p className="text-left ps-5">+1 777 - 978 - 5570</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container mx-auto px-4 md:flex justify-between ">
        <div>
          <p>@2023 JobPlanet. All Rights Reserved</p>
        </div>
        <div>
          <p>Powered by JobPlanet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
