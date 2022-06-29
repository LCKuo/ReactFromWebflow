/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61828ba571ff8370c964be3c'
    htmlEl.dataset['wfSite'] = '6165507cab3fc14387e2119a'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = ContactView.Controller !== ContactView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\demiversestudio.webflow.css);


            .nav.button {
            display: inline-block;
            margin: 20px 0px 20px 15px;
            padding: 20x 25px 20px 25px;
            border-radius: 15px;
            background-color: #070707;
            color: #fff;
          }
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="af-class-container af-class-phone w-container">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/Demiverse_Black.png" loading="lazy" width={237} sizes="(max-width: 479px) 35vw, 187px" srcSet="images/Demiverse_Black-p-500.png 500w, images/Demiverse_Black-p-800.png 800w, images/Demiverse_Black-p-1080.png 1080w, images/Demiverse_Black.png 1170w" alt className="af-class-image-3" /></a>
                <a href="http://discord.gg/demi-human" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/discord_1.png" loading="lazy" width={39} sizes="(max-width: 479px) 9vw, 39px" srcSet="images/discord_1-p-500.png 500w, images/discord_1.png 512w" alt className="af-class-image-discord" /></a>
                <a href="https://opensea.io/collection/demihuman" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/截圖_2021-12-22_上午10.13.29-removebg-preview-1.png" loading="lazy" width={43} alt className="af-class-image-9" /></a>
                <a href="https://demiverse.refinable.store/" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/Circle_Logo.png" loading="lazy" width={39} sizes="(max-width: 479px) 10vw, 39px" srcSet="images/Circle_Logo-p-500.png 500w, images/Circle_Logo-p-800.png 800w, images/Circle_Logo.png 853w" alt className="af-class-image-9" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="index.html" className="af-class-nav-link w-nav-link">HOME</a>
                  <a href="/#story" className="af-class-nav-link w-nav-link">STORY</a>
                  <a href="/#roadmap" className="af-class-nav-link w-nav-link">ROADMAP</a>
                  <a href="/#team" className="af-class-nav-link w-nav-link">TEAM</a>
                  <a href="/#contact" className="af-class-nav-link w-nav-link">CONTACT</a>
                  <a href="demily.html" className="af-class-nav-link w-nav-link">DEMILY</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section-3 af-class-wf-section">
              <div className="af-class-container w-container">
                <h1 className="af-class-larger-heading">I would love to hear from you !</h1>
                <div className="af-class-form-block w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="af-class-form">
                    <h2 className="af-class-heading-2">Reach Us !</h2>
                    <p className="af-class-paragraph-4">About Partnerships, please fill out this form.</p>
                    <div className="w-layout-grid af-class-grid">
                      <div><label htmlFor="First-name" className="af-class-field-label">First name</label><input type="text" className="w-input" maxLength={256} name="First-name" data-name="First name" placeholder id="First-name" required /></div>
                      <div className="af-class-div-block-9"><label htmlFor="Last-name" className="af-class-field-label">last name</label><input type="text" className="w-input" maxLength={256} name="Last-name" data-name="Last name" placeholder id="Last-name" required /></div>
                    </div><label htmlFor="Email-address" className="af-class-field-label">Email Address</label><input type="email" className="w-input" maxLength={256} name="Email-address" data-name="Email address" placeholder id="Email-address" required /><label htmlFor="Message" className="af-class-field-label">Ｍessage</label><textarea placeholder="Example Text" maxLength={5000} id="Message" name="Message" data-name="Message" className="af-class-textarea w-input" defaultValue={""} />
                    <div className="af-class-recaptcha-wrapper">
                      <div data-sitekey="6LeA6cYcAAAAALJgx7lAA7mFELHzkI23-8fZw7Sy" className="w-form-formrecaptcha af-class-g-recaptcha af-class-g-recaptcha-error af-class-g-recaptcha-disabled" />
                    </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-submit-button w-button" />
                  </form>
                  <div className="af-class-success-message w-form-done">
                    <div className="af-class-lottie-animation" data-w-id="d7bf3e5b-afde-6850-af0b-25169617848e" data-animation-type="lottie" data-src="documents/76760-success.json" data-loop={1} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="5.5" data-duration="5.5" />
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-footer af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="af-class-footer-holder"><img src="images/S__54698003-removebg-preview.png" loading="lazy" width={376} sizes="(max-width: 479px) 78vw, (max-width: 767px) 65vw, 376px" srcSet="images/S__54698003-removebg-preview-p-500.png 500w, images/S__54698003-removebg-preview.png 746w" alt className="af-class-image" />
                  <div className="af-class-social-wrapper">
                    <a href="https://twitter.com/DemihumanNft" target="_blank" className="af-class-socail-link w-inline-block"><img src="images/Twitter.svg" loading="lazy" alt /></a>
                    <a href="https://www.instagram.com/demihumannft/" target="_blank" className="af-class-socail-link w-inline-block"><img src="images/Instagram.svg" loading="lazy" alt className="af-class-image-6" /></a>
                    <a href="https://discord.gg/demi-human" target="_blank" className="af-class-socail-link w-inline-block"><img src="images/Discord.png" loading="lazy" width={31} height={29} alt /></a>
                  </div>
                  <h5 className="af-class-heading-4">Copyright © 2021 DEMIVERSE STUDIO, LLC. <br />All rights reserved.</h5>
                  <a href="https://etherscan.io/address/0xa6916545A56f75ACD43fb6A1527A73a41d2b4081#code" target="_blank" className="af-class-contract-link">OFFICIAL EMAIL ADDRESS: demihuman.nft@gmail.com</a>
                  <a href="https://etherscan.io/address/0xa6916545A56f75ACD43fb6A1527A73a41d2b4081#code" target="_blank" className="af-class-contract-link">VERIFIED SMART CONTRACT ADDRESS: 0xa6916545A56f75ACD43fb6A1527A73a41d2b4081</a>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ContactView

/* eslint-enable */