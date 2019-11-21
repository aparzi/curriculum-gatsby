import React from "react"

import imgFramework from "../images/skills/framework.png"
import imgDb from "../images/skills/database.png"
import imgMobile from "../images/skills/mobile.png"
import imgWp from "../images/skills/wp.png"
import imgGithub from "../images/skills/github.png"
import imgJetbrains from "../images/skills/jetbrains.png"
import { useTranslation } from "react-i18next"

const Skills = () => {
  const { t } = useTranslation("home")
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="section-title wow fadeIn a1" data-wow-delay="0.1s" style={{width: '100%'}}>
            <h2 className={'white-text'}><i className="fa fa-gears"/>Skills</h2>
          </div>
          <div className="skill-line z-depth-1" style={{background: '#fff', width: '100%'}}>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgFramework} alt="logo framework" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">Framework</span></b>
                  <p className="black-text justify" id="descr_framework">{t('framework')}</p>
                </div>
              </div>
            </div>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgDb} alt="logo database" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">Database</span></b>
                  <p className="black-text justify" id="descr_database">{t("database")}</p>
                </div>
              </div>
            </div>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgMobile} alt="logo mobile" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">App Mobile</span></b>
                  <p className="black-text justify" id="descr_app_mobile">{t("mobile")}</p>
                </div>
              </div>
            </div>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgWp} alt="logo wordpress" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">Wordpress</span></b>
                  <p className="black-text justify" id="descr_wordpress">{t("wordpress")}</p>
                </div>
              </div>
            </div>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgGithub} alt="logo git" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">Git</span></b>
                  <p className="black-text justify" id="descr_git">{t("git")}</p>
                </div>
              </div>
            </div>
            <div className="collection custom-div-skill">
              <div className="row">
                <div className="col-md-1">
                  <img src={imgJetbrains} alt="logo Jetbrains" className="circle custom-img-skill"/>
                </div>
                <div className="col-md-offset-1 col-md-10">
                  <b><span className="title black-text normal-font-size">IDE principale</span></b>
                  <p className="black-text justify" id="descr_jetbrains">{t("jetbrains")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
