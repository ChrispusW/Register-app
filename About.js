import { Button } from '@material-ui/core'
import React from 'react'
import "./About.css"
export function About() {
    return (
      <div className="list-unstyled">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="img-fluid" alt="Responsive image"></img>
          <h3 className="mt-0">our services</h3>
              <strong className="media">Networking</strong>
              <p >we offer all networking solutions in this field which include
                  <ul className="list-unstyled">
                      <li >
                          Laptop repair sessions.
                      </li>
                      <li>Wifi and other wireless network configurations</li>
                      <li>Subnetting</li>
                      <li>DHCP configurations and much moore.....</li>
                  </ul>
              </p>
              <strong className="media">Coding</strong>
              <p>Learn how to develop captivating websites and build modern mobile applications from scracth using 
                  <p>
                      <ul className="list-unstyled">
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
              <strong className="media">Graphic Design</strong>
              <p>Learn how to design official attractive documents used in business operations such as advertising using special sofware packages such as Adobe Photoshop,Microsoft Paint,Adobe illustrator and much more to develop the following
                  <ul className="list-unstyled">
                      <li>Logos</li>
                      <li>Bronchures</li>
                      <li>Business cards</li>
                      <li>Poster and much more</li>
                  </ul>
              </p>
            <p className="container">if you already have account click <a href="./Login" className="btn btn-primary">Login</a><br></br>
              <strong>or Click <a href="./Signup" className="btn btn-primary">Signup</a> if you are new here to create an account.</strong>
              </p> 
</div>
    )
}
export default About
