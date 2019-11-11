import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <header id='header-top'>
    <div id="header-bottom" className="z-depth-1">
      <div id="sticky-nav-sticky-wrapper" className="sticky-wrapper" style={{height: '64px'}}>
        <div id="sticky-nav" style={{}}>
          <div className={"container"}>
            <div className={"row"}>
              <nav className={'nav-wrap'}>
                <ul id="example-one" className={'hide-on-med-and-down group'}>
                  {menuLinks.map(link => (
                    <li>
                      <Link style={{ color: `white` }} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li style={{'border-left': 'solid 1px', 'border-color': '#000'}}>
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

Header.propTypes = {
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  menuLinks: [],
}

export default Header
