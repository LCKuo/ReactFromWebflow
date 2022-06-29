/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/6173ff6fd501688aeac601d2_web3.txt").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61828ba571ff83f91d64be39'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\demiversestudio.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"478d7b00-095e-32b9-7b7e-c25ce198ed22\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"df230a4e-67bb-1604-b7d6-34f0f1bead51\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a10697e6-2f1b-5b30-1cac-ec7ad23d34df\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"94d1c81b-c908-fed5-ed33-6e436573522c\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d48ffdc4-99f2-f027-6873-a1443c1fa8c6\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"49a0c165-5ff2-41ca-210f-53360136f514\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"c67c90a6-607f-c8a6-ccf3-ad54385b03b3\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"fe52eb26-442b-0c3e-c97e-6df78c7be264\"] {opacity:0;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"478d7b00-095e-32b9-7b7e-c25ce198ed22\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"df230a4e-67bb-1604-b7d6-34f0f1bead51\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a10697e6-2f1b-5b30-1cac-ec7ad23d34df\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"94d1c81b-c908-fed5-ed33-6e436573522c\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d48ffdc4-99f2-f027-6873-a1443c1fa8c6\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"49a0c165-5ff2-41ca-210f-53360136f514\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"c67c90a6-607f-c8a6-ccf3-ad54385b03b3\"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"fe52eb26-442b-0c3e-c97e-6df78c7be264\"] {opacity:0;}}


            .nav.button {
            display: inline-block;
            margin: 0px 0px 0px 0px;
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
                <a href="index.html" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/Demiverse_Black.png" loading="lazy" width={237} sizes="(max-width: 479px) 35vw, 187px" srcSet="images/Demiverse_Black-p-500.png 500w, images/Demiverse_Black-p-800.png 800w, images/Demiverse_Black-p-1080.png 1080w, images/Demiverse_Black.png 1170w" alt className="af-class-image-3" /></a>
                <a href="http://discord.gg/demi-human" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/discord_1.png" loading="lazy" width={39} sizes="(max-width: 479px) 9vw, 39px" srcSet="images/discord_1-p-500.png 500w, images/discord_1.png 512w" alt className="af-class-image-discord" /></a>
                <a href="https://opensea.io/collection/demihuman" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/截圖_2021-12-22_上午10.13.29-removebg-preview-1.png" loading="lazy" width={43} alt className="af-class-image-9" /></a>
                <a href="https://demiverse.refinable.store/" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/Circle_Logo.png" loading="lazy" width={39} sizes="(max-width: 479px) 10vw, 39px" srcSet="images/Circle_Logo-p-500.png 500w, images/Circle_Logo-p-800.png 800w, images/Circle_Logo.png 853w" alt className="af-class-image-9" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="index.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">HOME</a>
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
            <div className="af-class-section af-class-main af-class-wf-section"><img src="images/Hero-image.jpeg" loading="lazy" sizes="100vw" alt /></div>
            <div id="story" className="af-class-section af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="af-class-text-block">LIVE OR&nbsp;DIE</div>
                <h1 className="af-class-password-heading">DEMI HUMAN - COLLECTIBLE NFTs is coming</h1>
              </div>
              <div className="af-class-hero-camera">
                <div data-w-id="d9c110b3-99e6-d583-5e9f-8a5168e40f41" style={{opacity: 0}} className="w-layout-grid af-class-hero-image-grid"><img src="images/IMG_1412.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1412-p-500.jpeg 500w, images/IMG_1412-p-800.jpeg 800w, images/IMG_1412-p-1080.jpeg 1080w, images/IMG_1412-p-1600.jpeg 1600w, images/IMG_1412-p-2000.jpeg 2000w, images/IMG_1412.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1410.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1410-p-500.jpeg 500w, images/IMG_1410-p-800.jpeg 800w, images/IMG_1410-p-1080.jpeg 1080w, images/IMG_1410-p-1600.jpeg 1600w, images/IMG_1410-p-2000.jpeg 2000w, images/IMG_1410.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1409.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1409-p-500.jpeg 500w, images/IMG_1409-p-800.jpeg 800w, images/IMG_1409-p-1080.jpeg 1080w, images/IMG_1409-p-1600.jpeg 1600w, images/IMG_1409-p-2000.jpeg 2000w, images/IMG_1409.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1408.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1408-p-500.jpeg 500w, images/IMG_1408-p-800.jpeg 800w, images/IMG_1408-p-1080.jpeg 1080w, images/IMG_1408-p-1600.jpeg 1600w, images/IMG_1408-p-2000.jpeg 2000w, images/IMG_1408.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1411.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1411-p-500.jpeg 500w, images/IMG_1411-p-800.jpeg 800w, images/IMG_1411-p-1080.jpeg 1080w, images/IMG_1411-p-1600.jpeg 1600w, images/IMG_1411-p-2000.jpeg 2000w, images/IMG_1411.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1427.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1427-p-500.jpeg 500w, images/IMG_1427-p-800.jpeg 800w, images/IMG_1427-p-1080.jpeg 1080w, images/IMG_1427-p-1600.jpeg 1600w, images/IMG_1427-p-2000.jpeg 2000w, images/IMG_1427.jpeg 2048w" alt className="af-class-hero-image" /><img src="images/IMG_1419.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1419-p-500.jpeg 500w, images/IMG_1419-p-800.jpeg 800w, images/IMG_1419-p-1080.jpeg 1080w, images/IMG_1419-p-1600.jpeg 1600w, images/IMG_1419-p-2000.jpeg 2000w, images/IMG_1419.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /><img src="images/IMG_1417.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1417-p-500.jpeg 500w, images/IMG_1417-p-800.jpeg 800w, images/IMG_1417-p-1080.jpeg 1080w, images/IMG_1417-p-1600.jpeg 1600w, images/IMG_1417-p-2000.jpeg 2000w, images/IMG_1417.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /><img src="images/IMG_1418.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1418-p-500.jpeg 500w, images/IMG_1418-p-800.jpeg 800w, images/IMG_1418-p-1080.jpeg 1080w, images/IMG_1418-p-1600.jpeg 1600w, images/IMG_1418-p-2000.jpeg 2000w, images/IMG_1418.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /><img src="images/IMG_1416.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1416-p-500.jpeg 500w, images/IMG_1416-p-800.jpeg 800w, images/IMG_1416-p-1080.jpeg 1080w, images/IMG_1416-p-1600.jpeg 1600w, images/IMG_1416-p-2000.jpeg 2000w, images/IMG_1416.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /><img src="images/IMG_1415.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1415-p-500.jpeg 500w, images/IMG_1415-p-800.jpeg 800w, images/IMG_1415-p-1080.jpeg 1080w, images/IMG_1415-p-1600.jpeg 1600w, images/IMG_1415-p-2000.jpeg 2000w, images/IMG_1415.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /><img src="images/IMG_1414.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1414-p-500.jpeg 500w, images/IMG_1414-p-800.jpeg 800w, images/IMG_1414-p-1080.jpeg 1080w, images/IMG_1414-p-1600.jpeg 1600w, images/IMG_1414-p-2000.jpeg 2000w, images/IMG_1414.jpeg 2048w" alt className="af-class-hero-image af-class-bottom" /></div>
              </div><img src="images/Hero-background.jpg" loading="lazy" sizes="100vw" srcSet="images/Hero-background-p-500.jpeg 500w, images/Hero-background-p-800.jpeg 800w, images/Hero-background-p-2000.jpeg 2000w, images/Hero-background-p-2600.jpeg 2600w, images/Hero-background-p-3200.jpeg 3200w, images/Hero-background.jpg 3388w" alt className="af-class-original-hero-image" />
              <div className="af-class-container-4 af-class-phone w-container">
                <h2 className="af-class-heading-3">Earth ! What's going on ?</h2>
                <div className="af-class-text-story">In 2069, after death, human beings were infected with an unknown virus and mutated.<br /><br />After the mutation, the new species will not regenerate, die, old, sick, and will lose the ability to move only after being decapitated.<br /><br />From then on ... In the world, there is no country or government anymore ...<br /><br />There is only one last hope for mankind, hiding in every corner of the world, struggling to fight the Demi-Human!</div>
              </div>
            </div>
            <div id="projects" className="af-class-section af-class-wf-section"><img src="images/Statement.jpeg" loading="lazy" sizes="100vw" srcSet="images/Statement-p-500.jpeg 500w, images/Statement-p-800.jpeg 800w, images/Statement-p-1600.jpeg 1600w, images/Statement-p-2600.jpeg 2600w, images/Statement-p-3200.jpeg 3200w, images/Statement.jpeg 3604w" alt />
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading">New World</h2>
              </div><img src="images/IMG_1484.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1484-p-500.jpeg 500w, images/IMG_1484-p-800.jpeg 800w, images/IMG_1484-p-1080.jpeg 1080w, images/IMG_1484-p-1600.jpeg 1600w, images/IMG_1484-p-2000.jpeg 2000w, images/IMG_1484.jpeg 2285w" alt />
            </div>
            <div id="projects" className="af-class-section af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading">New Ethnicity</h2>
              </div>
              <div className="w-layout-grid af-class-ethnicity-grid"><img src="images/截圖-2021-10-12-下午7.39.08.png" loading="lazy" data-w-id="478d7b00-095e-32b9-7b7e-c25ce198ed22" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.39.08-p-500.png 500w, images/截圖-2021-10-12-下午7.39.08-p-800.png 800w, images/截圖-2021-10-12-下午7.39.08.png 886w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.34.54.png" loading="lazy" data-w-id="df230a4e-67bb-1604-b7d6-34f0f1bead51" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.34.54-p-500.png 500w, images/截圖-2021-10-12-下午7.34.54-p-800.png 800w, images/截圖-2021-10-12-下午7.34.54.png 890w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.34.37.png" loading="lazy" data-w-id="a10697e6-2f1b-5b30-1cac-ec7ad23d34df" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.34.37-p-500.png 500w, images/截圖-2021-10-12-下午7.34.37-p-800.png 800w, images/截圖-2021-10-12-下午7.34.37.png 892w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.38.55.png" loading="lazy" data-w-id="d48ffdc4-99f2-f027-6873-a1443c1fa8c6" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.38.55-p-500.png 500w, images/截圖-2021-10-12-下午7.38.55-p-800.png 800w, images/截圖-2021-10-12-下午7.38.55.png 886w" alt className="af-class-ethnic-image" /><img src="images/DH-Logo-png.png" loading="lazy" style={{opacity: 0}} data-w-id="ca634181-2425-8b1d-201a-560065447142" srcSet="images/DH-Logo-png-p-500.png 500w, images/DH-Logo-png-p-800.png 800w, images/DH-Logo-png-p-1080.png 1080w, images/DH-Logo-png-p-1600.png 1600w, images/DH-Logo-png-p-2000.png 2000w, images/DH-Logo-png.png 2048w" sizes="100vw" alt className="af-class-logo-image" /><img src="images/截圖-2021-10-12-下午7.34.16.png" loading="lazy" data-w-id="94d1c81b-c908-fed5-ed33-6e436573522c" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.34.16-p-500.png 500w, images/截圖-2021-10-12-下午7.34.16-p-800.png 800w, images/截圖-2021-10-12-下午7.34.16.png 888w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.46.28.png" loading="lazy" data-w-id="fe52eb26-442b-0c3e-c97e-6df78c7be264" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.46.28-p-500.png 500w, images/截圖-2021-10-12-下午7.46.28-p-800.png 800w, images/截圖-2021-10-12-下午7.46.28.png 890w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.39.41.png" loading="lazy" data-w-id="c67c90a6-607f-c8a6-ccf3-ad54385b03b3" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.39.41-p-500.png 500w, images/截圖-2021-10-12-下午7.39.41-p-800.png 800w, images/截圖-2021-10-12-下午7.39.41.png 882w" alt className="af-class-ethnic-image" /><img src="images/截圖-2021-10-12-下午7.37.59.png" loading="lazy" data-w-id="49a0c165-5ff2-41ca-210f-53360136f514" sizes="100vw" srcSet="images/截圖-2021-10-12-下午7.37.59-p-500.png 500w, images/截圖-2021-10-12-下午7.37.59-p-800.png 800w, images/截圖-2021-10-12-下午7.37.59.png 892w" alt className="af-class-ethnic-image" /></div>
            </div>
            <div id="roadmap" className="af-class-section af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading">Roadmap 1.0</h2>
              </div><img src="images/IMG_2817.JPG" loading="lazy" sizes="100vw" srcSet="images/IMG_2817-p-500.jpeg 500w, images/IMG_2817-p-800.jpeg 800w, images/IMG_2817-p-1080.jpeg 1080w, images/IMG_2817-p-1600.jpeg 1600w, images/IMG_2817-p-2000.jpeg 2000w, images/IMG_2817.JPG 2428w" alt className="af-class-roadmap-image" /><img src="images/IMG_2818.JPG" loading="lazy" sizes="100vw" srcSet="images/IMG_2818-p-500.jpeg 500w, images/IMG_2818-p-800.jpeg 800w, images/IMG_2818-p-1080.jpeg 1080w, images/IMG_2818-p-1600.jpeg 1600w, images/IMG_2818-p-2000.jpeg 2000w, images/IMG_2818.JPG 2411w" alt className="af-class-roadmap-image" />
            </div>
            <div id="roadmap" className="af-class-section af-class-wf-section">
              <h2 className="af-class-secondary-heading-rm2-0">Roadmap 2.0</h2>
              <div className="af-class-container-roadmap2-0 w-container"><img src="images/roadmpa2.0.JPG" loading="lazy" width={895} sizes="(max-width: 479px) 81vw, (max-width: 767px) 84vw, (max-width: 991px) 85vw, (max-width: 1919px) 88vw, 895px" srcSet="images/roadmpa2.0-p-500.jpeg 500w, images/roadmpa2.0-p-800.jpeg 800w, images/roadmpa2.0-p-1080.jpeg 1080w, images/roadmpa2.0-p-1600.jpeg 1600w, images/roadmpa2.0-p-2000.jpeg 2000w, images/roadmpa2.0-p-2600.jpeg 2600w, images/roadmpa2.0-p-3200.jpeg 3200w, images/roadmpa2.0.JPG 4380w" alt className="af-class-roadmap-image-2-0" /></div>
            </div>
            <div id="team" className="af-class-section af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading">Team</h2>
                <div className="w-layout-grid af-class-team-grid">
                  <div data-w-id="b5d660d1-a97a-0cd9-efd0-32f64bd072df" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1418.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1418-p-500.jpeg 500w, images/IMG_1418-p-800.jpeg 800w, images/IMG_1418-p-1080.jpeg 1080w, images/IMG_1418-p-1600.jpeg 1600w, images/IMG_1418-p-2000.jpeg 2000w, images/IMG_1418.jpeg 2048w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/tj5391" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-GENE<br />CO-FOUNDER | Strategy &amp; DEVELOPMENT</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="0555f365-1151-1830-2966-a3dbdfeafbd8" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1412.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1412-p-500.jpeg 500w, images/IMG_1412-p-800.jpeg 800w, images/IMG_1412-p-1080.jpeg 1080w, images/IMG_1412-p-1600.jpeg 1600w, images/IMG_1412-p-2000.jpeg 2000w, images/IMG_1412.jpeg 2048w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/CCIE11440" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-CCIE<br />CO-FOUNDER | Business &amp; EDuCATION<br /></p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="9c0e74eb-4759-7260-b05e-feceaa02e3db" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1419.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1419-p-500.jpeg 500w, images/IMG_1419-p-800.jpeg 800w, images/IMG_1419-p-1080.jpeg 1080w, images/IMG_1419-p-1600.jpeg 1600w, images/IMG_1419-p-2000.jpeg 2000w, images/IMG_1419.jpeg 2048w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/EChen0619" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-Shadoweric<br />CO-FOUNDER | PROJECT MANAGEMENT</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="9d0e895e-1203-cd01-2287-89b2432269cc" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1566.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1566-p-500.jpeg 500w, images/IMG_1566-p-800.jpeg 800w, images/IMG_1566-p-1080.jpeg 1080w, images/IMG_1566-p-1600.jpeg 1600w, images/IMG_1566-p-2000.jpeg 2000w, images/IMG_1566.jpeg 2048w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/draakzion1" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-CAT<br />CO-FOUNDER | AESTHETICS</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="5d0c694c-7455-1136-75d9-5cf0ea06c03e" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/max.png" loading="lazy" sizes="100vw" srcSet="images/max-p-500.png 500w, images/max.png 600w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/soaringcrowz" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-MAX<br />CO-FOUNDER | Public relations</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="56e7fdf0-d108-cf76-a02f-e68d6709e5b5" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1427.jpeg" loading="lazy" sizes="100vw" srcSet="images/IMG_1427-p-500.jpeg 500w, images/IMG_1427-p-800.jpeg 800w, images/IMG_1427-p-1080.jpeg 1080w, images/IMG_1427-p-1600.jpeg 1600w, images/IMG_1427-p-2000.jpeg 2000w, images/IMG_1427.jpeg 2048w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/onionfrancis" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-admin">DEMI-Maker<br />CO-FOUNDER | community</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="af-class-section af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading">Contact</h2>
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
            {/*  Import JS file  */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */
