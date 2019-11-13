import { Link } from "gatsby"
import PropTypes, { bool } from "prop-types"
import React from "react"
import imgIta from "../images/languages/italy.png";
import imgEng from "../images/languages/england.png";
import {useState} from 'react';

const Header = ({ menuLinks }) => {

  const [showEng, setFlag] = useState(true);

  return (
    <header id='header-top'>
      <div id="header-bottom" className="z-depth-1">
        <div id="sticky-nav-sticky-wrapper" className="sticky-wrapper" style={{ height: '64px' }}>
          <div id="sticky-nav" style={{}}>
            <div className={"container"}>
              <div className={"row"}>
                <nav className={'nav-wrap'}>
                  <ul id="example-one" className={'hide-on-med-and-down group'}>
                    <li style={{ borderRight: '1px solid rgb(0, 0, 0)', borderTopColor: 'rgb(0, 0, 0)', borderBottomColor: 'rgb(0, 0, 0)', borderLeftColor: 'rgb(0, 0, 0)' }}>
                      <a className="lang_it" style={!showEng ? { display: 'block' } : { display: 'none' }}>
                        <img style={{ cursor: 'pointer' }} src={imgIta} alt="Ita" onClick={() => setFlag(!showEng)} />
                      </a>
                      <a className="lang_eng" style={showEng ? { display: 'block' } : { display: 'none' }}>
                        <img style={{ cursor: 'pointer' }} src={imgEng} alt="Eng" onClick={() => setFlag(!showEng)}/>
                      </a>
                    </li>
                    {menuLinks.map(link => (
                      <li>
                        <Link style={{ color: `white` }} to={link.link}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                    <li style={{ borderLeft: 'solid 1px', borderColor: '#000' }}>
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
  );
}

Header.propTypes = {
  menuLinks: PropTypes.array
}

Header.defaultProps = {
  menuLinks: [],
}

export default Header
