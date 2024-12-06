import React from 'react';
// import Logo from "../images/logos/logo-dark.svg";
import Button from './button';
import Logo1 from '../images/logos/wy-logo-3.png';
import Logo2 from '../images/logos/wy-logo-4.png';
import { Collapse } from 'flowbite';
import { Dropdown } from 'flowbite-react';

const Header = () => {
  const navigation = [{ name: 'Portfolio', href: '/portfolio' }];
  const mobileNavigation = [
    { name: 'Portfolio / 作品集', href: '/portfolio' },
    { name: 'Contact Us / 聯絡我們', href: '/contact' },
  ];

  if (typeof document !== 'undefined') {
    const $targetEl = document.getElementById('navbar-default');
    const $triggerEl = document.getElementById('triggerEl');
    const options = {
      onCollapse: () => {},
      onExpand: () => {},
      onToggle: () => {},
    };
    const instanceOptions = {
      id: 'navbar-default',
      override: true,
    };
    const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
  }
  return (
    <header>
      <div className="container mx-auto">
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:pt-8">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo1} className="h-12 sm:h-16" alt="WY Design Logo" />
              <img src={Logo2} className="h-12 sm:h-16" alt="WY Design Logo" />
            </a>
            {/* <button id="triggerEl" data-collapse-toggle="navbar-default" type="button" className="bg-neutral-300 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button> */}
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <div className="bg-neutral-300 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </div>
              )}
            >
              {mobileNavigation.map((item) => (
                <Dropdown.Item>
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="mt-2 md:hover:scale-110 block py-2 px-3 rounded md:bg-transparent text-neutral-700 md:hover:text-primary-600 md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                      {item.name}
                    </a>
                  </li>
                </Dropdown.Item>
              ))}
            </Dropdown>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="text-body-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="mt-2 md:hover:scale-110 block py-2 px-3 rounded md:bg-transparent text-neutral-700 md:hover:text-primary-600 md:p-0 dark:text-white md:dark:text-blue-500"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <Button label="CONTACT US" link="/contact" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
