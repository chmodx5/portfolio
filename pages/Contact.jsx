import React from "react";
import Breadcrumbs from "./../components/Blocks/Breadcrumbs/Breadcrumbs";
import HeadingWithEffect from "./../components/General/HeadingWithEffect";
import { ImLocation, ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdPhone } from "react-icons/md";

function ContactInfo({ icon, children }) {
  return (
    <div className="flex gap-8  px-5 py-8 group hover:bg-primary-default bg-primary-default/5">
      <span className="text-5xl group-hover:text-white">{icon}</span>

      <div className="">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <Breadcrumbs title="contact me" />
      <section>
        <div className="mycontainer py-20  ">
          <HeadingWithEffect large title="contact info" />
          <br />
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactInfo icon={<ImLocation />}>
              <p className="group-hover:text-white">Juja, kenya</p>
            </ContactInfo>
            <ContactInfo icon={<MdPhone />}>
              <ul>
                <li className="hover:font-bold group-hover:text-white">
                  <a href="tel:0746405792">0746405792</a>
                </li>
                <li className="hover:font-bold group-hover:text-white">
                  <a href="tel:0106856867">0106856867</a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<MdOutlineEmail />}>
              <ul>
                <li>
                  <a
                    className="hover:font-bold group-hover:text-white"
                    href="mailto:onesmaswanjala2021@gmail.com"
                  >
                    <p>onesmaswanjala2021@gmail.com</p>
                  </a>
                </li>
                <li>
                  <a
                    className="hover:font-bold group-hover:text-white"
                    href="mailto:wafulawanjala@hotmail.com"
                  >
                    <p>wafulawanjala@hotmail.com</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<ImWhatsapp />}>
              <ul>
                <li>
                  <a
                    className="hover:font-bold group-hover:text-white"
                    href="https://api.whatsapp.com/send?phone=+254746405792"
                  >
                    <p>0746405792</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<FaGithub />}>
              <ul>
                <li>
                  <a
                    className="hover:font-bold group-hover:text-white"
                    href="https://github.com/chmodx5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>@chmodx5</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<FaLinkedin />}>
              <ul>
                <li>
                  <a
                    className="hover:font-bold group-hover:text-white"
                    href="https://www.linkedin.com/in/onesmas-wanjala-10127b216/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>onesmas wanjala</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
          </div>
        </div>
      </section>
    </div>
  );
}
