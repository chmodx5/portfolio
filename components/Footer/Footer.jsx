import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaPinterestP,
  FaGithubAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import IconButton from "../General/IconButton";
import HeadingWithEffect from "../General/HeadingWithEffect";
import FooterContactListItem from "./FooterContactListItem";

function Footer() {
  return (
    <footer className=" ">
      <div className=" dark:bg-darkbackground dark:text-white">
        <div className="container mx-auto py-16 px-6 sm:px-0 border-y border-gray-300 dark:border-gray-500">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-12 md:col-span-4">
              <h1 className=" uppercase text-2xl font-bold mb-8">
                <span className=" text-primary-default">nya</span>ngumi
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi saepe incidunt. Eveniet vel assumenda distinctio
                recusandae vero! Possimus deserunt dolor ut. Quisquam nobis nam
                aperiam id placeat possimus aliquam?
              </p>
              <div className="flex gap-5 mt-12">
                <IconButton icon={<BsInstagram />} />
                <IconButton icon={<BsTwitter />} />
                <IconButton icon={<FaPinterestP />} />
                <IconButton icon={<FaGithubAlt />} />
              </div>
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            <div className="col-span-12 md:col-span-3">
              <HeadingWithEffect title="contact us" />
              <br />
              <br />
              <div>
                <ul className="footer-contacts-list">
                  <li>
                    <FooterContactListItem icon={<HiOutlineLocationMarker />}>
                      <p>374 FA Tower, William S Blvd 2721, IL, USA</p>
                    </FooterContactListItem>
                  </li>
                  <li>
                    <FooterContactListItem icon={<FaPhoneAlt />}>
                      <p>(+880)155 69569 365</p>
                    </FooterContactListItem>
                  </li>
                  <li>
                    <FooterContactListItem icon={<FaRegEnvelope />}>
                      <p>support@rstheme.com</p>
                    </FooterContactListItem>
                  </li>
                  <li>
                    <FooterContactListItem icon={<AiOutlineFieldTime />}>
                      <p>Opening Hours: 10:00 - 18:00</p>
                    </FooterContactListItem>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            <div className="col-span-12 md:col-span-3 ">
              <HeadingWithEffect title="contact us" />
              <br />
              <br />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique reiciendis asperiores
              </p>
              <form action="" className=" mt-12">
                <div>
                  <input
                    type="email"
                    className="py-3 text-black px-3 w-full"
                    name=""
                    id=""
                  />
                </div>
                <br />
                <div>
                  <input type="submit" className="btn" value="subscribe now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" dark:bg-darkbackground py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-5">
            <div className=" col-span-12 md:col-span-4 flex md:justify-start justify-center">
              ©
              {
                //get current year
                new Date().getFullYear()
              }
              Dabble Inc. All Rights Reserved.
            </div>
            <div className="col-span-12 md:col-span-8 flex md:justify-end justify-center">
              <div className="flex divide-blue-200 gap-6">
                {/* to finish the styling of this links in the css file */}
                <Link passHref href="/" className="link">
                  Home
                </Link>
                <Link passHref href="/about" className="link">
                  About
                </Link>

                <Link passHref href="/contact" className="link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
