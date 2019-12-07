import { useTranslation } from "react-i18next"
import React from "react"

const Istruzione = () => {
  const { t } = useTranslation("home")
  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <div className="section-title wow fadeIn a1" data-wow-delay="0.1s" style={{width: '100%'}}>
            <h2 id="title_education" className={'white-text'}><i className="fa fa-graduation-cap" />{t('title_education')}</h2>
          </div>

          <div className="cd-container" id="ed-timeline">

            <div className="cd-timeline-block wow fadeIn a1" data-wow-delay="0.2s">
              <div className="cd-timeline-img" />
              <div className="cd-timeline-content col m5 s12 z-depth-1">
                <a href="http://www.unimol.it/" target="_blank"><h2 id="title_university">{t('title_university')}</h2></a>
                <span> 2014 - </span><span className="non_terminato">{t('non_terminato')}</span>
                <p id="description_university">{t('description_university')}</p>
              </div>
            </div>

            <div className="cd-timeline-block wow fadeIn a2" data-wow-delay="0.2s">
              <div className="cd-timeline-img" />
              <div className="cd-timeline-content col m5 s12 z-depth-1">
                <h2 id="title_landing-page">
                  <a href='https://www.udemy.com/certificate/UC-H803RRCD/' target='_blank'>
                    {t('title_landing_page')}
                  </a>
                </h2>
                <span> 2018 </span>
                <p id="description_landing-page">{t('description_landing_page')}</p>
              </div>
            </div>

            <div className="cd-timeline-block wow fadeIn a3" data-wow-delay="0.3s">
              <div className="cd-timeline-img" />
              <div className="cd-timeline-content col m5 s12 z-depth-1">
                <h2 id="title_certificate">{t('title_certificate')}</h2>
                <span> 2013 - 2014 </span>
                <p id="description_certificate">{t('description_certificate')}</p>
              </div>
            </div>

            <div className="cd-timeline-block wow fadeIn a4" data-wow-delay="0.4s">
              <div className="cd-timeline-img" />
              <div className="cd-timeline-content col m5 s12 z-depth-1">
                <a href="http://www.ipiacb.it/" target="_blank"><h2 id="title_diploma">{t('title_diploma')}</h2></a>
                <span> 2012 - 2013 </span>
                <p id="description_diploma">{t('description_diploma')}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Istruzione
