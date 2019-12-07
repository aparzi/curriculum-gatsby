import React from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation("home")
    return (
      <section id="contact-form">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s" style={{width: '100%'}}>
              <h2 id="title_contact" className={'white-text'}><i className="fa fa-send"/>{t('title_contact')}</h2>
            </div>
            <div className="interests col s12 m12 l12 wow fadeIn" data-wow-delay="0.1s">
              <div className="row">
                <ul className="z-depth-1" style={{width: '100%'}}>
                  <a href='mailto:angeloparziale94@gmail.com'>
                    <li><i className="fa fa-envelope tooltipped col m3 s6" data-position="top" data-delay="50" data-tip="Gmail"/></li>
                  </a>
                  <a href='https://www.facebook.com/angelo.m.parziale' target='_blank' rel="noopener noreferrer">
                    <li><i className="fa fa-facebook-official tooltipped col m3 s6" data-position="top" data-delay="50" data-tip="Facebook"/></li>
                  </a>
                  <a href='https://www.linkedin.com/in/angelo-parziale-2470b311a/' target='_blank' rel="noopener noreferrer">
                    <li><i className="fa fa-linkedin tooltipped col m3 s6" data-position="top" data-delay="50" data-tip="Linkedin"/></li>
                  </a>
                  <a href='https://github.com/aparzi' target='_blank' rel="noopener noreferrer">
                    <li><i className="fa fa-github tooltipped col m3 s6" data-position="top" data-delay="50" data-tip="Github"/></li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer
