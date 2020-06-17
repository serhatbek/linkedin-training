import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/Logo.png';
import TextLogo from '../../../assets/img/LinkedIn-logo-footer.png';
import Heading3 from '../../Atoms/Text/Heading3';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="container">
          <Link to="/users">
            <div className="site-logo">
              <h1 className="logo">
                <img className="footer-logo" src={Logo} alt="Logo" />
              </h1>
              <img src={TextLogo} alt="Text Logo"></img>
            </div>
          </Link>
          <div className="footer-grid">
            <div className="footer-nav">
              <Heading3 text="Navigation" className="footer-title" />
              <div className="footer-nav-links">
                <ul>
                  <Link to="/about">
                    <Text text="About" />
                  </Link>
                  <Link to="/about">
                    <Text text="Careers" />
                  </Link>
                  <Link>
                    <Text text="Advertising" />
                  </Link>
                  <Link to="/about">
                    <Text text="Small Business" />
                  </Link>
                </ul>

                <ul>
                  <Link to="/about">
                    <Text text="Talent Solutions" />
                  </Link>
                  <Link to="/about">
                    <Text text="Marketing Solutions" />
                  </Link>
                  <Link to="/about">
                    <Text text="Sales Solutions" />
                  </Link>
                  <Link to="/about">
                    <Text text="Safery Center" />
                  </Link>
                </ul>

                <ul>
                  <Link to="/about">
                    <Text text="Community Guidelines" />
                  </Link>
                  <Link to="/about">
                    <Text text="Privacy & Terms" />
                  </Link>
                  <Link to="/about">
                    <Text text="Mobile App" />
                  </Link>
                </ul>
              </div>
            </div>
            <div className="footer-access">
              <Heading3 text="Fast Access" className="footer-title" />
              <Button color="blue" thin>
                Questions
              </Button>
              <Button color="transparent" thin>
                Settings
              </Button>
            </div>
            <div className="footer-lang">
              <Heading3 text="Language" className="footer-title" />
              <select className="lang-select" name="language" id="language">
                <option className="lang-select__eng" value="eng">
                  English
                </option>
                <option className="lang-select__tr" value="tr">
                  Türkçe
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
