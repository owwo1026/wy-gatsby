import React, { useState, useEffect } from 'react';

import { motion } from 'motion/react';
import Button from './button';
import Logo1 from '../images/logos/wy-logo-3.png';
import Logo2 from '../images/logos/wy-logo-4.png';
import { Navbar } from 'flowbite-react';

const Header = () => {
  const navigation = [{ name: 'Portfolio', href: '/portfolio' }];
  const mobileNavigation = [
    { name: 'Portfolio / 作品集', href: '/portfolio' },
    { name: 'Contact Us / 聯絡我們', href: '/contact' },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 假设 768px 及以下为手机模式
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化时判断一次

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container mx-auto">
        <Navbar className="bg-transparent px-0 py-2.5 md:my-3 [&>div]:px-0">
          <Navbar.Brand href="/">
            <img src={Logo1} className="h-12 sm:h-16" alt="WY Design Logo" />
            <img src={Logo2} className="h-12 sm:h-16" alt="WY Design Logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <motion.div
            initial={{ rotate: 0 }} // 初始状态
            animate={{ rotate: isOpen ? 180 : 0 }} // 动画效果：打开时旋转180度，关闭时旋转回0度
            transition={{ duration: 0.3 }} // 动画持续时间
            onClick={() => setIsOpen(!isOpen)} // 切换打开状态
          >
            <Navbar.Toggle />
          </motion.div>
          <Navbar.Collapse>
            {(isMobile ? mobileNavigation : navigation).map((item) => (
              <Navbar.Link
                href={item.href}
                className="!text-body-xl font-medium mt-2 md:hover:scale-110 block py-2 px-3 rounded md:bg-transparent text-neutral-700 md:hover:text-primary-600 md:p-0 dark:text-white md:dark:text-blue-500"
                active
              >
                {item.name}
              </Navbar.Link>
            ))}
            {!isMobile && <Button label="CONTACT US" link="/contact" />}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
