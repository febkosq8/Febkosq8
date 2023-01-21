import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressCard,
  faGraduationCap,
  faHouseLaptop,
  faBlog,
  faPeopleArrows,
  faBriefcase,
  faPersonCircleQuestion,
  faHeadset,
  faHandSparkles,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function About() {
  return (
    <section align="left" className="section px-2" id="aboutMe">
      <h2 className="display-1" align="center">
        About Me <FontAwesomeIcon icon={faAddressCard} color="black" />
      </h2>
      <div>
        <p>
          <FontAwesomeIcon icon={faGlobe} color="black" /> Pretty much go by
          Febkosq8 everywhere online
        </p>
        <p>
          <FontAwesomeIcon icon={faBlog} color="black" /> Blogging random tech
          stuff at
          <a
            href="http://www.febkosq8.tk/ "
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            febkosq8.tk
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faYoutube} color="black" /> Uploading gameplay
          montages at
          <a
            href="https://www.youtube.com/@Febkosq8DoesStuff "
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            Febkosq8 Does Stuff
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faBriefcase} color="black" /> Graduate Security
          Engineer at{" "}
          <a
            href="https://www.sita.aero/"
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            SITA
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faHouseLaptop} color="black" /> Actively
          developing
          <a href="/Jappan" className="ms-2 btn-outline-dark btn btn-sm">
            Jappan
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} color="black" /> Master of
          Science in Advanced Computer Science from
          <a
            href="https://le.ac.uk/"
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            University of Leicester
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} color="black" /> Bachelor of
          Technology in Computer Science and Engineering from
          <a
            href="https://www.kluniversity.in/"
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            KL University
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPeopleArrows} color="black" /> Looking to
          collaborate for Dev{" "}
          <a href="/#projects" className="ms-2 btn-outline-dark btn btn-sm">
            Projects
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPersonCircleQuestion} color="black" /> Ask me
          about anything, Except Maths
        </p>
        <p>
          <FontAwesomeIcon icon={faHeadset} color="black" /> I spend a good
          amount of my time playing
          <a href="/#gaming" className="ms-2 btn-outline-dark btn btn-sm">
            Games
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faHandSparkles} color="black" /> Life Hack:
          Save time by using hotkeys in your workflow
        </p>
      </div>
    </section>
  );
}
