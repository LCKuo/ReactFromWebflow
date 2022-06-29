/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/6173ff6fd501688aeac601d2_web3.txt").then(body => body.text()), isAsync: false },
]

let Controller

class HistoryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/HistoryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HistoryView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62767ece3da70c370606f495'
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
    const proxies = HistoryView.Controller !== HistoryView ? transformProxies(this.props.children) : {

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
          <div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar-2 w-nav">
              <div className="af-class-container w-container">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/Demiverse_Black.png" loading="lazy" width={237} sizes="(max-width: 479px) 99vw, 187px" srcSet="images/Demiverse_Black-p-500.png 500w, images/Demiverse_Black-p-800.png 800w, images/Demiverse_Black-p-1080.png 1080w, images/Demiverse_Black.png 1170w" alt className="af-class-image-3" /></a>
                <a href="http://discord.gg/demi-human" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/discord_1.png" loading="lazy" width={44} sizes="44px" srcSet="images/discord_1-p-500.png 500w, images/discord_1.png 512w" alt className="af-class-image-discord" /></a>
                <a href="https://opensea.io/collection/demihuman" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/截圖_2021-12-22_上午10.13.29-removebg-preview-1.png" loading="lazy" width={53} alt className="af-class-image-9" /></a>
                <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                  <a href="index.html" className="af-class-nav-link w-nav-link">HOME</a>
                  <a href="demily.html" className="af-class-nav-link w-nav-link">DEMILY</a>
                  <a href="poleis.html" className="af-class-nav-link w-nav-link">POLEIS</a>
                  <a href="history.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">HISTORY</a>
                  <a href="https://www.demily.store/" className="af-class-nav-link w-nav-link">MERCH</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <section className="af-class-wf-section">
              <h1 className="af-class-heading-8">= Demi History =<br /></h1>
              <h3 className="af-class-heading-9">Heading for more in depth information, join us on <a href="https://twitter.com/DemihumanNft" target="_blank" className="af-class-link">*Twitter</a> and <a href="https://discord.gg/demi-human" target="_blank" className="af-class-link-2">*Discord</a>
              </h3>
              <div className="af-class-container-6 w-container">
                <div className="af-class-content-block">
                  <div className="af-class-steps-clone">
                    <div className="af-class-step-block">
                      <div className="af-class-img-block"><img src="images/IMG_3368.JPG" loading="lazy" width={400} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 400px" srcSet="images/IMG_3368-p-500.jpeg 500w, images/IMG_3368-p-800.jpeg 800w, images/IMG_3368-p-1080.jpeg 1080w, images/IMG_3368-p-1600.jpeg 1600w, images/IMG_3368-p-2000.jpeg 2000w, images/IMG_3368.JPG 2048w" alt className="af-class-image-20" /></div>
                      <div className="af-class-dot" />
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2021.10</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">The beginning of the DEMIVERSE :)</div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Official</em></strong><br />10.18<br /> &nbsp;&nbsp;Demi Human NFT Discord Server 正式上線<br />10.23<br />&nbsp;&nbsp;&nbsp;Demi-Guardians role 成立</p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community</em></strong><br />10.22<br />&nbsp;&nbsp;&nbsp;Mummy and Human 第一屆猜拳大賽<br />10.29<br />&nbsp;&nbsp;&nbsp;The first meme contest 第一屆迷因大賽</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                    </div>
                    <div className="af-class-step-block">
                      <div className="af-class-scoll-wrap">
                        <div className="af-class-scroll-animate" />
                        <div className="af-class-scroll-base" />
                      </div>
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2021.11</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First Fight :&gt;</div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Official</em></strong><br />11.05<br /> &nbsp;&nbsp;Presale Day1 <br />11.06<br />&nbsp;&nbsp;&nbsp;Presale Day2<br />11.07<br />&nbsp;&nbsp;&nbsp;Public Sale<br /></p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community</em></strong><br />11.08<br /> &nbsp;&nbsp;The first avatar changing contest <br />第一屆換頭像大賽<br />11.10<br />1111購物節買10送E的活動<br />11.21<br />The first KTV competition<br />第一屆KTV大賽<br />11.22<br />The second avatar changing contest<br />第二屆換頭像大賽</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                      <div className="af-class-dot" />
                      <div className="af-class-img-block"><img src="images/IMG_3369.JPG" loading="lazy" width={400} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 400px" srcSet="images/IMG_3369-p-500.jpeg 500w, images/IMG_3369-p-800.jpeg 800w, images/IMG_3369-p-1080.jpeg 1080w, images/IMG_3369-p-1600.jpeg 1600w, images/IMG_3369-p-2000.jpeg 2000w, images/IMG_3369.JPG 2048w" alt className="af-class-image-19" /></div>
                    </div>
                    <div className="af-class-step-block">
                      <div className="af-class-img-block"><img src="images/IMG_3379.JPG" loading="lazy" width={400} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 400px" srcSet="images/IMG_3379-p-500.jpeg 500w, images/IMG_3379-p-800.jpeg 800w, images/IMG_3379-p-1080.jpeg 1080w, images/IMG_3379-p-1600.jpeg 1600w, images/IMG_3379-p-2000.jpeg 2000w, images/IMG_3379.JPG 2048w" alt className="af-class-image-21" /></div>
                      <div className="af-class-dot" />
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2021.12</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unstoppable !!!</div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Official</em></strong><br />12.05<br /> &nbsp;&nbsp;Demi 25% SOLD&nbsp;OUT<br />12.09<br />&nbsp;&nbsp;Demi Box Launched<br />Demi紙箱推出 (天橋/公園款)<br />‍12.15<br />&nbsp;&nbsp;&nbsp;Demi 50% SOLD&nbsp;OUT<br />12.18<br />Demi Teaser YT 發佈<br />12.19<br />Demi 75% SOLD OUT<br />12.22<br />Demi 100% SOLD OUT<br />Get on the OpenSea Trending<br />12.26<br />Demi-Boss 開跑<br />12.30<br />Demi Six Factions 六大陣營開跑<br /></p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community</em></strong><br />12.07<br />The second meme contest <br />第二屆迷因大賽<br />12.12<br />Sacrifice Avatar Event (Christmas Eve)<br />獻祭 Demi PFP 活動<br />12.22<br />&nbsp;&nbsp;The Second KTV competition<br />第二屆KTV大賽<br />12.31<br />The third avatar changing contest<br />第三屆換頭像大賽<br /></p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                      <div className="af-class-scoll-wrap">
                        <div className="af-class-scroll-animate" />
                        <div className="af-class-scroll-base" />
                      </div>
                    </div>
                    <div className="af-class-step-block">
                      <div className="af-class-scoll-wrap-3">
                        <div className="af-class-scroll-animate" />
                        <div className="af-class-scroll-base" />
                      </div>
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2022.01 - 2022.02</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">The *Highlight of Demi </div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Official</em></strong>‍<br />01.09<br />Pick&nbsp;6 Demi-Nobles <br />01.22<br />&nbsp;&nbsp;&nbsp;Demiverse x KryptoGO 獨家聯名合作<br />01.27<br />Demiverse x MetaCityM 聯名合作<br />02.01<br />Demiverse x Pionex 專屬賦能<br />02.08<br />Get double blue tick of OpenSea<br />取得 OpenSea 雙藍勾<br />02.14<br />Demiverse x ACE 交易所專屬賦能<br /></p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community</em></strong><br />01.15<br />第一屆 Demi 笑話冠軍大賽<br />01.22<br />第一屆 Demi 叫賣大會<br />02.06<br />Demi 元宵節猜謎大賽<br />&nbsp;&nbsp;&nbsp;<br /></p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                      <div className="af-class-dot" />
                      <div className="af-class-img-block"><img src="images/IMG_3393.JPG" loading="lazy" width={400} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 400px" srcSet="images/IMG_3393-p-500.jpeg 500w, images/IMG_3393-p-800.jpeg 800w, images/IMG_3393-p-1080.jpeg 1080w, images/IMG_3393-p-1600.jpeg 1600w, images/IMG_3393-p-2000.jpeg 2000w, images/IMG_3393.JPG 2048w" alt className="af-class-image-22" /></div>
                    </div>
                    <div className="af-class-step-block">
                      <div className="af-class-img-block"><img src="images/IMG_3394.JPG" loading="lazy" width={400} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 400px" srcSet="images/IMG_3394-p-500.jpeg 500w, images/IMG_3394-p-800.jpeg 800w, images/IMG_3394-p-1080.jpeg 1080w, images/IMG_3394-p-1600.jpeg 1600w, images/IMG_3394-p-2000.jpeg 2000w, images/IMG_3394.JPG 2048w" alt className="af-class-image-23" /></div>
                      <div className="af-class-dot" />
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2022.03 - 2022.04</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Journey</div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Official</em></strong>‍<br />03.07<br />Demi Roadmap 2.0 正式發佈<br />03.15<br />Entering the era of the four poleis<br />進入四大城邦時代<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第一個戰略合作夥伴 Taiwan DAO<br />第二個戰略合作夥伴 WGG<br />03.22<br />Demi Charity fund established<br />&nbsp;Demi 善基金成立<br />04.29<br />Demiverse x Honda 聯名合作<br />‍<br /></p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community<br /></em></strong>03.11<br />DEMI-HUMAN NFT 線下實體展<br />03.28<br />Show Me The Demi 影片大賞<br />04.22<br />&nbsp;&nbsp;&nbsp;Demi DC to Earn 屬性活動<br />‍<br /></p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Poleis</em></strong><br />03.19<br />讀書人-守護地球淨灘活動<br />03.26<br />&nbsp;&nbsp;赫斯提雅騎士團-城市尋寶-勇闖動物園<br />04.15<br />獨角獸夢工廠-阿神獨角獸NFT投稿<br />04.23<br />赫斯提雅騎士團-第一屆赫斯提雅運動會<br />‍<br /></p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                      <div className="af-class-scoll-wrap">
                        <div className="af-class-scroll-animate" />
                        <div className="af-class-scroll-base" />
                      </div>
                    </div>
                    <div className="af-class-step-block">
                      <div className="af-class-scoll-wrap-2">
                        <div className="af-class-scroll-animate" />
                        <div className="af-class-scroll-base" />
                      </div>
                      <div className="af-class-content-wrap">
                        <div className="af-class-step-content-block">
                          <div className="af-class-step">
                            <div className="af-class-text-block-5">
                              <div className="af-class-label">2022.05 - 2022.06</div>
                              <div className="af-class-content">
                                <div className="af-class-heading-7">Grow in the community</div>
                                <p className="af-class-demi-history-paragraph"><strong><em>Community</em></strong><br />05.02<br />Demi 家園重建計畫<br />05.03<br /> &nbsp;&nbsp;The forth avatar changing contest<br />第四屆換頭像大賽<br />‍</p>
                                <p className="af-class-demi-history-paragraph"><strong><em>Poleis</em></strong><br />05.29<br />赫斯提雅騎士團-第一屆赫斯提雅保齡球大賽</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-bg-shadow" />
                        </div>
                      </div>
                      <div className="af-class-dot" />
                      <div className="af-class-img-block"><img src="images/IMG_3373.JPG" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 1919px) 40vw, 432px" srcSet="images/IMG_3373-p-500.jpeg 500w, images/IMG_3373-p-800.jpeg 800w, images/IMG_3373-p-1080.jpeg 1080w, images/IMG_3373-p-1600.jpeg 1600w, images/IMG_3373-p-2000.jpeg 2000w, images/IMG_3373.JPG 2048w" alt className="af-class-image-24" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default HistoryView

/* eslint-enable */