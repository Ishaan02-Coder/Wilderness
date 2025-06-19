import React from 'react'

const Header = () => {
  return (
    <div>
      <header id="abw_main_header" className="aw_not_fixed">
          <div className="aw_inner_header aw_max_content_width">
            <div className="aw_logo ml_mobile_24">
              <a href="/" title="Link zur Startseite">
              <picture>
                <source
                  media="(min-width: 721px)"
                  srcset="https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/svg/logo-desktop.svg 164w"
                  sizes="(min-width: 721px) 164px" />

                <source
                  media="(max-width: 720px)"
                  srcset="https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/svg/logo-mobile.svg 87w"
                  sizes="(max-width: 720px) 87px" />

                <img
                  width="87"
                  height="48"
                  src=""
                  alt="Logo Wilderness International" />
              </picture>
              </a>
            </div>

            <nav>
              <ul className="aw_menu aw_main_menu">
                <li className="aw_menu_item">
                  <a
                    href="https://wilderness-international.org/reports/report-pdf-2024.html"
                    className="aw_ga_event donate"
                    data-gtm-event="Download PDF"
                    data-event-label="Impact Report 2024"
                    data-event-place="Landingpage Navigation Header"
                    >Bericht lesen</a>
                </li>
                <li className="aw_menu_item aw_donate aw_custom_item">
                  <a
                    className="aw_icon_gift"
                    href="https://donate.wilderness-international.org/?region=secret-forest&rhythm=1"
                    >Jetzt Wald schützen
                  </a>
                </li>
              </ul>
            </nav>

            <div className="aw_mobile_nav_visible">
              <a
                className="aw_btn aw_secondary aw_small aw_custom_icon aw_no_icon"
                href="https://donate.wilderness-international.org/?region=secret-forest&rhythm=1"
                >Jetzt Wald schützen</a
              >
            </div>

          </div>
        </header>
    </div>
  )
}

export default Header;
