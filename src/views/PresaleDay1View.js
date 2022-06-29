/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/618a3fc606e40b9bd389a11a_web3_day3.txt").then(body => body.text()), isAsync: false },
]

let Controller

class PresaleDay1View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/PresaleDay1Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PresaleDay1View

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61828ba571ff83d62364be42'
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
    const proxies = PresaleDay1View.Controller !== PresaleDay1View ? transformProxies(this.props.children) : {

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
          .w-button {
            display: inline-block;
            padding: 9px 15px;
            background-color: #3898EC;
            color: white;
            border: 0;
            line-height: inherit;
            text-decoration: none;
            cursor: pointer;
            border-radius: 0;
          }
          .utility-button {
            width: 50%;
            padding-right: 0px;
            padding-left: 0px;
            background-color: rgba(7, 7, 7, 0.7);
            text-align: center;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-frosted-glass {\n\t-webkit-backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n  backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n}\n" }} />
            </div>
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
            <div className="af-class-section-copy af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="af-class-div-block-5">
                  <h1 className="af-class-heading">Presale Day1 LAUNCH IN</h1>
                </div>
                <div id="js-clock" className="af-class-js-clock">
                  <div className="af-class-box">
                    <div id="js-clock-days" className="af-class-clock-number">00</div>
                    <div className="af-class-clock-label">Days</div>
                  </div>
                  <div className="af-class-box">
                    <div id="js-clock-hours" className="af-class-clock-number">00</div>
                    <div className="af-class-clock-label">Hrs</div>
                  </div>
                  <div className="af-class-box">
                    <div id="js-clock-minutes" className="af-class-clock-number">00</div>
                    <div className="af-class-clock-label">Min</div>
                  </div>
                  <div className="af-class-box">
                    <div id="js-clock-seconds" className="af-class-clock-number">00</div>
                    <div className="af-class-clock-label">Sec</div>
                  </div>
                </div>
              </div><img src="images/FOMO.jpeg" loading="lazy" sizes="(max-width: 1971px) 100vw, 1971px" srcSet="images/FOMO-p-500.jpeg 500w, images/FOMO-p-1080.jpeg 1080w, images/FOMO-p-1600.jpeg 1600w, images/FOMO.jpeg 1971w" alt />
            </div>
            <div className="af-class-section-demi af-class-wf-section">
              <div className="af-class-mint-block w-clearfix">
                <div className="af-class-mint">
                  <div className="af-class-mint-push"><em className="af-class-italic-text">TO BE, OR NOT TO BE, <br />THAT IS THE QUESTION</em></div>
                  <div className="af-class-lottie-animation-2" data-w-id="b407bf84-5a8b-c6d6-430f-4c290569dddf" data-animation-type="lottie" data-src="documents/62111-arrow-down-bounce.json" data-loop={1} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration={1} data-duration={0} />
                  <div className="af-class-mint-details"><em className="af-class-italic-text-2">Mint Your DEMI-HUMAN !!!<br /> 0.08 ETH EACH<em /></em></div>
                  <div data-w-id="a16bcf54-37e2-0f8d-b49e-2e8d9f7a8826" style={{opacity: '0.6'}} className="af-class-mint-button">
                    <div className="af-class-html-embed-2 w-embed">
                      <div style={{cursor: 'pointer'}} onclick="_premintd1(2)"><span className="af-class-showAlert">MiNT my 2 DemiHuman <br />♀ 0.16 ETH ♀ </span></div>
                    </div>
                  </div>
                  <div data-w-id="e7661ef5-0fde-69ac-79de-146cd21c39bb" style={{opacity: '0.6'}} className="af-class-mint-button">
                    <div className="af-class-html-embed-2 w-embed">
                      <div style={{cursor: 'pointer'}} onclick="_premintd1(1)"><span className="af-class-showAlert2">MiNT my 1 DemiHuman <br />♀ 0.08 ETH ♀ </span></div>
                    </div>
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
            {/*  Import JS file  */}
            {/*  Import countdown timer file 

         */}
          </div>
        </span>
      </span>
    )
  }
}

export default PresaleDay1View

/* eslint-enable */