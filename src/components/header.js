import { Link } from "gatsby"
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"
import imgIta from "../images/languages/italy.png"
import imgEng from "../images/languages/england.png"

const Header = ({ menuLinks }) => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t, i18n } = useTranslation("common")

  return (
    <header id='header-top'>
      <div id="header-bottom" className="z-depth-1">
        <div id="sticky-nav-sticky-wrapper" className="sticky-wrapper" style={{ height: "64px" }}>
          <div id="sticky-nav" style={{}}>
            <div className={"container"}>
              <div className={"row"}>
                <nav className={"nav-wrap"}>
                  <ul id="example-one" className={"hide-on-med-and-down group"}>
                    {alternateLinks &&
                    alternateLinks
                      .filter(link => link.language !== i18n.language)
                      .map((link, i) => [
                        i > 0 && " | ",
                        <Link to={link.path} hrefLang={link.language}>
                          <li style={{
                            borderRight: "1px solid rgb(0, 0, 0)",
                            borderTopColor: "rgb(0, 0, 0)",
                            borderBottomColor: "rgb(0, 0, 0)",
                            borderLeftColor: "rgb(0, 0, 0)",
                          }}>
                            <a className="lang_it"
                               style={i18n.language === "en" ? { display: "block" } : { display: "none" }}>
                              <img style={{ cursor: "pointer" }} src={imgIta} alt="Ita"/>
                            </a>
                            <a className="lang_eng"
                               style={i18n.language === "it" ? { display: "block" } : { display: "none" }}>
                              <img style={{ cursor: "pointer" }} src={imgEng} alt="Eng"/>
                            </a>
                          </li>
                        </Link>,
                      ])}
                    {menuLinks.map(link => (
                      <li>
                        <Link style={{ color: `white` }} to={link.link}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                    <li style={{ borderLeft: "solid 1px", borderColor: "#000" }}>
                      <a target="_blank" href="https://www.angeloparziale.it/blog">Blog</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  menuLinks: [],
}

export default Header
