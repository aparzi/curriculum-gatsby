import { useTranslation } from "react-i18next"
import React from "react"
import imgProfile from "../images/profile.jpg"

const About = () => {
  const { t } = useTranslation("home")
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="intro z-depth-1 col m12">
            <div className="col m12 s12">
              <div className="profile-pic wow fadeIn a1" data-wow-delay="0.1s">
                <img src={imgProfile} alt="profilo" />
              </div>
            </div>
            <div className="col m12 s12 co-centered wow fadeIn a2" data-wow-delay="0.2s">
              <div className="intro-content col m11 s12">
                <h2>Angelo Parziale</h2>
                <span>Web/Mobile Developer</span>
                <p id="introduction">{t("welcome")}</p>
                <a href="#contact-form" className="btn btn-success waves-effect">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
