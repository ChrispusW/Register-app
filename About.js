import React from 'react'
import "./About.css"
export function About() {
    return (
      <div className="about">
          <h3>our services</h3>
          <div className="col-lg-6">
              <strong>Networking</strong>
              <p>we offer all networking solutions in this field which include
                  <ul>
                      <li>
                          Laptop repair sessions.
                      </li>
                      <li>Wifi and other wireless network configurations</li>
                      <li>Subnetting</li>
                      <li>DHCP configurations and much moore.....</li>
                  </ul>
              </p>
              <strong>Coding</strong>
              <p>Learn how to develop captivating websites and build modern mobile applications from scracth using 
                  <p>
                      <ul>
                          <li>
                              javaScript
                          </li>
                          <li>HTML and CSS</li>
                          <li>Bootstrap framework and material-ui</li>
                          <li>React,react Js,React Hooks</li>
                          <li>Angular,ionic5</li>
                      </ul>
                  </p>
                  <p>Train interns on hosting websites using free sites such as firebase.</p>
                  <p>Special softwares used in the the development life cycle such as Android Studio,VS Code,Git and more...</p>
              </p>
              <strong>Graphic Design</strong>
              <p>Learn how to design official attractive documents used in business operations such as advertising using special sofware packages such as Adobe Photoshop,Microsoft Paint,Adobe illustrator and much more to develop the following
                  <ul>
                      <li>Logos</li>
                      <li>Bronchures</li>
                      <li>Business cards</li>
                      <li>Poster and much more</li>
                  </ul>
              </p>
          </div>
</div>
    )
}
export default About
