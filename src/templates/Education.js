import React from "react"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from "react-i18next"
import SchoolIcon from '@material-ui/icons/School';

const Education = () => {
  const { t } = useTranslation("home")
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="section-title wow fadeIn a1" data-wow-delay="0.1s" style={{width: '100%'}}>
            <h2 className={'white-text'}><i className="fa fa-graduation-cap"/>{t('title_education')}</h2>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2014 - 2019"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon/>}
            >
              <h4 className="vertical-timeline-element-title custom-font">{t('title_university')}</h4>
              <p>{t('description_university')}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2018"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon/>}
            >
              <h4 className="vertical-timeline-element-title custom-font">{t('title_landing_page')}</h4>
              <p>{t('description_landing_page')}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2013 - 2014"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon/>}
            >
              <h4 className="vertical-timeline-element-title custom-font">{t('title_certificate')}</h4>
              <p>{t('description_certificate')}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2012 - 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon/>}
            >
              <h4 className="vertical-timeline-element-title custom-font">{t('title_diploma')}</h4>
              <p>{t('description_diploma')}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Education
