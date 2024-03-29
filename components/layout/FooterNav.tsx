"use client";

import { useRouter } from "next/navigation";

export default function FooterNav() {
  const router = useRouter();

  return (
    <section className='w-full flex justify-between font-space-mono'>
      <ul>
        <li
          onClick={() => router.push("/")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200 mb-1'
        >
          Home
        </li>
        <li
          onClick={() => router.push("/#discover")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Discover
        </li>
        <li
          onClick={() => router.push("/#key-features")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Key Features
        </li>
        <li
          onClick={() => router.push("/#sponsors")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Sponsors
        </li>
        <li
          onClick={() => router.push("/#contact")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Contact
        </li>
      </ul>
      <ul>
        <li
          onClick={() => router.push("/about")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200 mb-1'
        >
          About
        </li>
        <li
          onClick={() => router.push("/about#about-us")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          About Us
        </li>
        <li
          onClick={() => router.push("/about#previous-years")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Previous Years
        </li>
        <li
          onClick={() => router.push("/about#schedule")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Schedule
        </li>
        <li
          onClick={() => router.push("/about#faq")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          FAQ
        </li>
      </ul>
      <ul>
        <li
          onClick={() => router.push("/resources")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200 mb-1'
        >
          Resources
        </li>
        <li
          onClick={() => router.push("/resources#part-1")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Part 1
        </li>
        <li
          onClick={() => router.push("/resources#part-2")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Part 2
        </li>
        <li
          onClick={() => router.push("/resources#part-3")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Part 3
        </li>
        <li
          onClick={() => router.push("/resources#part-4")}
          className='cursor-pointer hover:text-fairy_tale transition-all duration-200'
        >
          Part 4
        </li>
      </ul>
    </section>
  );
}
