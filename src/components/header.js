import React from "react";
// import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";
import Logo1 from "../images/logos/wy-logo-3.png";
import Logo2 from "../images/logos/wy-logo-4.png";
import { Collapse } from 'flowbite';

const Header = () => {
  const navigation = [
    { name: "Portfolio", href: "/portfolio" },
  ];
  const $targetEl = document.getElementById('navbar-default');
  const $triggerEl = document.getElementById('triggerEl');
  const options = {
      onCollapse: () => {
      },
      onExpand: () => {
      },
      onToggle: () => {
      },
  };
  const instanceOptions = {
    id: 'navbar-default',
    override: true
  };
  const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);

  return (
    <header>
      <div className="container mx-auto">
        <nav class="border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:pt-8">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo1} class="h-8 sm:h-12" alt="WY Design Logo" />
                <img src={Logo2} class="h-8 sm:h-12" alt="WY Design Logo" />
            </a>
            <button id="triggerEl" data-collapse-toggle="navbar-default" type="button" class="bg-neutral-300 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navigation.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      className="mt-2 md:hover:scale-110 block py-2 px-3 rounded md:bg-transparent text-neutral-700 md:hover:text-primary-600 md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <Button label="CONTACT US" link="/contact"/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
