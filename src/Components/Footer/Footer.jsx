
import React from 'react'

const Footer = () => {
  return (
    <footer className=" shadow m-4 mx-0 w-full   footer-main-nav">
    <div className="w-[86%] mx-auto max-w-screen-xl p-4  md:flex md:items-center md:justify-between">
      <span className="span-footer">© 2024 <a href="https://www.nestle.in/" className="hover:underline">Nestlé
      </a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium ul-class-main-footer  sm:mt-0">
        <li>
            <a href="https://www.nestle.in/aboutus/allaboutnestl%C3%A9" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer




