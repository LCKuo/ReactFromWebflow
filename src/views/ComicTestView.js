/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/618a4278193df6032ea642e2_web3_day3.txt").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/619bbc78f37d8bc40d11cfac_countdown-public-end.txt").then(body => body.text()), isAsync: false },
]

let Controller

class ComicTestView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ComicTestController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ComicTestView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62b283c2cdbe6454790bcc77'
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
    const proxies = ComicTestView.Controller !== ComicTestView ? transformProxies(this.props.children) : {

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
            padding: 12px 80px;
            border-radius: 15px;
            background-color: #FCFCFC;
            color: #272727;
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
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-frosted-glass {\n\t-webkit-backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n  backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n}\n.af-view .af-class-qty {\n  width: 90px;\n  height: 35px;\n  text-align: center;\n  border: 0;\n  border-radius: 15px;\n  border-top: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n}\n.af-view input.af-class-qtyplus {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;   \n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #070707;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px #999;\n}\n.af-view input.af-class-qtyplus:hover {background-color: #524f4f}\n.af-view input.af-class-qtyplus:active {\n  background-color: #070707;\n  box-shadow: 0 2px #666;\n  transform: translateY(4px);\n}\n.af-view input.af-class-qtyminus {\n  display: inline-block;\n  padding: 12px 22px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;   \n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #070707;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px #999;\n}\n.af-view input.af-class-qtyminus:hover {background-color: #524f4f}\n.af-view input.af-class-qtyminus:active {\n  background-color: #070707;\n  box-shadow: 0 2px #666;\n  transform: translateY(4px);\n}\n" }} />
            </div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-2 w-nav">
              <div className="af-class-container w-container">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/Demiverse_Black.png" loading="lazy" width={237} sizes="(max-width: 479px) 99vw, 187px" srcSet="images/Demiverse_Black-p-500.png 500w, images/Demiverse_Black-p-800.png 800w, images/Demiverse_Black-p-1080.png 1080w, images/Demiverse_Black.png 1170w" alt className="af-class-image-3" /></a>
                <a href="http://discord.gg/demi-human" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/discord_1.png" loading="lazy" width={44} sizes="44px" srcSet="images/discord_1-p-500.png 500w, images/discord_1.png 512w" alt className="af-class-image-discord" /></a>
                <a href="https://opensea.io/collection/demihuman" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/截圖_2021-12-22_上午10.13.29-removebg-preview-1.png" loading="lazy" width={53} alt className="af-class-image-9" /></a>
                <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                  <a href="index.html" className="af-class-nav-link w-nav-link">HOME</a>
                  <a href="demily.html" className="af-class-nav-link w-nav-link">DEMILY</a>
                  <a href="poleis.html" className="af-class-nav-link w-nav-link">POLEIS</a>
                  <a href="history.html" className="af-class-nav-link w-nav-link">HISTORY</a>
                  <a href="comic-test.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">COMIC</a>
                  <a href="https://www.demily.store/" className="af-class-nav-link w-nav-link">MERCH</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section-comic-heading af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="af-class-div-comic-heading">
                  <h1 className="af-class-comic-heading">Demi comic reader<br /></h1>
                  <div className="w-embed">
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-comic-display af-class-wf-section">
              <div className="af-class-block-comic-display">
                <div className="af-class-columns w-row">
                  <div className="af-class-column w-col w-col-4">
                    <div className="af-class-comic-connect-wallet-div">
                      <h2 className="af-class-heading-10">LOGIN TO&nbsp;VIEW&nbsp;YOUR COLLECTION</h2>
                      <div>
                        <div className="af-class-html-embed w-embed">
                          <div><button id="my_address" className="af-class-nav af-class-button af-class-enableEthereumButton">CONNECT WALLET</button></div>
                          <p><span className="af-class-showMessage" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-col w-col-8">
                    <div className="af-class-div-block-13"><img src="images/截圖-2022-06-24-下午3.17.37.png" loading="lazy" sizes="100vw" srcSet="images/截圖-2022-06-24-下午3.17.37-p-500.png 500w, images/截圖-2022-06-24-下午3.17.37-p-800.png 800w, images/截圖-2022-06-24-下午3.17.37-p-1080.png 1080w, images/截圖-2022-06-24-下午3.17.37-p-1600.png 1600w, images/截圖-2022-06-24-下午3.17.37-p-2000.png 2000w, images/截圖-2022-06-24-下午3.17.37.png 2160w" alt className="af-class-image-25" />
                      <p className="af-class-paragraph-16">The very first installment of the Demi-Human NFT Comic series! <br />This story takes place in 2069, the earth trembles, in the Demiverse.</p>
                      <div className="af-class-div-block-12">
                        <a href="index.html" className="af-class-button-comic-preview w-button">CLICK HERE&nbsp;FOR A&nbsp;PREVIEW</a>
                      </div>
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
            {/*  Import countdown timer file  */}
          </div>
        </span>
      </span>
    )
  }
}

export default ComicTestView

/* eslint-enable */