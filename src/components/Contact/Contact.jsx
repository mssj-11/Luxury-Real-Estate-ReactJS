import React from "react";
import { RiFacebookBoxLine, RiInstagramLine, RiTiktokLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+55 2631 8934</span>
              </div>
              <div>
                <p>Email</p>
                <span>luxury.rental@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
              </div>
              <ul>
                <Link to={"/"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/"} target="_blank">
                  <RiInstagramLine />
                </Link>
                <Link to={"/"} target="_blank">
                  <RiTiktokLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
