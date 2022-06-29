/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/6173ff6fd501688aeac601d2_web3.txt").then(body => body.text()), isAsync: false },
]

let Controller

class PoleisView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/PoleisController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PoleisView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62767d368b704f4c45219300'
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
    const proxies = PoleisView.Controller !== PoleisView ? transformProxies(this.props.children) : {

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
                  <a href="poleis.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">POLEIS</a>
                  <a href="history.html" className="af-class-nav-link w-nav-link">HISTORY</a>
                  <a href="https://www.demily.store/" className="af-class-nav-link w-nav-link">MERCH</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <header id="hero" className="af-class-hero-2 af-class-wf-section">
              <div className="af-class-flex-container-2 w-container">
                <div className="af-class-hero-image-mask" />
                <div data-delay={3000} data-animation="slide" className="af-class-slider-2 w-slider" data-autoplay="true" data-easing="ease-in-out-quart" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={1500} data-infinite="true" id={1}>
                  <div className="w-slider-mask">
                    <div className="w-slide"><img src="images/Unicorn_Fantasy.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 59vw, 900px" srcSet="images/Unicorn_Fantasy-p-500.jpeg 500w, images/Unicorn_Fantasy-p-800.jpeg 800w, images/Unicorn_Fantasy.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 59vw, 900px" srcSet="images/1-p-500.jpeg 500w, images/1-p-800.jpeg 800w, images/1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/2_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 59vw, 900px" srcSet="images/2_1-p-500.jpeg 500w, images/2_1-p-800.jpeg 800w, images/2_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/3_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 59vw, 900px" srcSet="images/3_1-p-500.jpeg 500w, images/3_1-p-800.jpeg 800w, images/3_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="w-slider-nav w-shadow w-round" />
                </div>
              </div>
              <div className="af-class-poleis-overview w-container">
                <div className="af-class-div-block-11"><img src="images/unknown.png" loading="lazy" width={342} alt className="af-class-image-17" />
                  <h1 className="af-class-poleis-heading-h2">Poleis Unicorn Fantasy</h1>
                  <p className="af-class-paragraph-h2">茶几義氣無人比 &nbsp; 有熊主持沒問題<br />教練教你養身體 &nbsp; 坦克嗓音奪你心<br />獨角迷因超人氣 &nbsp; 亞人小說寫不停<br />白色菜頭很有戲 &nbsp; 城邦共創ＮＦＴ</p>
                </div>
              </div>
            </header>
            <header id="hero" className="af-class-hero-1 af-class-wf-section">
              <div className="af-class-poleis-overview w-container">
                <div className="af-class-div-block-11"><img src="images/S__17981456-removebg-preview.png" loading="lazy" width={342} alt className="af-class-image-17-black" />
                  <h1 className="af-class-poleis-heading">Poleis Scholar</h1>
                  <p className="af-class-paragraph-11">Demi Scholar 又名為讀書人，<br />讀書人城邦立志為 Demiverse 宇宙，提供一個深耕內在的學習殿堂。熱情邀約你加入我們，一起付出、一起分享自己的專長及時間來創造及堆疊 Demi 的價值，一起玩耍、一起療癒，不斷搭建人與人之間的連結，珍惜這得來不易的緣分，你並不孤單。</p>
                </div>
              </div>
              <div className="af-class-flex-container-1 w-container">
                <div className="af-class-hero-image-mask" />
                <div data-delay={2000} data-animation="slide" className="af-class-slider-2 w-slider" data-autoplay="true" data-easing="ease-in-out-quart" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={1500} data-infinite="true" id={1}>
                  <div className="w-slider-mask">
                    <div className="w-slide"><img src="images/7101058bb0c81a92.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/7101058bb0c81a92-p-500.jpeg 500w, images/7101058bb0c81a92.jpg 720w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/2.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/2-p-500.jpeg 500w, images/2.jpg 720w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/3.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/3-p-500.jpeg 500w, images/3.jpg 720w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/4.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/4-p-500.jpeg 500w, images/4.jpg 720w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/5.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/5-p-500.jpeg 500w, images/5.jpg 720w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/6.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/6-p-500.jpeg 500w, images/6.jpg 720w" alt className="af-class-image-100-width" /></div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="w-slider-nav w-slider-nav-invert w-shadow w-round" />
                </div>
              </div>
            </header>
            <header id="hero" className="af-class-hero-2 af-class-wf-section">
              <div className="af-class-flex-container-2 w-container">
                <div className="af-class-hero-image-mask" />
                <div data-delay={2000} data-animation="slide" className="af-class-slider-2 w-slider" data-autoplay="true" data-easing="ease-in-out-quart" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={1500} data-infinite="true">
                  <div className="w-slider-mask">
                    <div className="w-slide"><img src="images/騎士團城邦簡介.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/騎士團城邦簡介-p-500.png 500w, images/騎士團城邦簡介-p-800.png 800w, images/騎士團城邦簡介.png 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/騎士團城邦簡介-1.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/騎士團城邦簡介-1-p-500.png 500w, images/騎士團城邦簡介-1-p-800.png 800w, images/騎士團城邦簡介-1.png 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/騎士團城邦簡介-2.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/騎士團城邦簡介-2-p-500.png 500w, images/騎士團城邦簡介-2-p-800.png 800w, images/騎士團城邦簡介-2.png 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/騎士團城邦簡介-3.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/騎士團城邦簡介-3-p-500.png 500w, images/騎士團城邦簡介-3-p-800.png 800w, images/騎士團城邦簡介-3.png 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/騎士團城邦簡介-4.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/騎士團城邦簡介-4-p-500.png 500w, images/騎士團城邦簡介-4-p-800.png 800w, images/騎士團城邦簡介-4.png 960w" alt className="af-class-image-100-width" /></div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="w-slider-nav w-shadow w-round" />
                </div>
              </div>
              <div className="af-class-poleis-overview w-container">
                <div className="af-class-div-block-11"><img src="images/hestia.png" loading="lazy" width={342} alt className="af-class-image-17" />
                  <h1 className="af-class-poleis-heading-h2">Poleis Hestia's Knight</h1>
                  <p className="af-class-paragraph-h2">赫斯提雅騎士團期望在 Demiverse 中打造一個讓人放心 chill 的環境，讓每一位騎士都能夠用自己感到最舒適的方式參與建造 Demiverse 的過程。如果你想在 Demiverse 找人一起準備面試，我們陪你；如果你想在 Demiverse 執行構思已久的計畫，我們陪你；不管你離開 Demiverse 多久，每當你重新回到騎士團，我們總會有個人會記得你，跟你說一句：「Welcome back」赫斯提雅騎士團，Demiverse 中最暖心的城邦，沒有之一。</p>
                </div>
              </div>
            </header>
            <header id="hero" className="af-class-hero-1 af-class-wf-section">
              <div className="af-class-poleis-overview w-container">
                <div className="af-class-div-block-11"><img src="images/9ED0228D-91DE-47EA-AA38-7CF55522A4E2.png" loading="lazy" width={342} sizes="(max-width: 479px) 88vw, 342px" srcSet="images/9ED0228D-91DE-47EA-AA38-7CF55522A4E2-p-500.png 500w, images/9ED0228D-91DE-47EA-AA38-7CF55522A4E2.png 657w" alt className="af-class-image-17" />
                  <h1 className="af-class-poleis-heading">Poleis Meteora</h1>
                  <p className="af-class-paragraph-11">天之彼方 Meteora 一個遠離紛爭、壓力、歧視等負面情緒，<br />並且能夠隨心所欲、自由自在發揮自身所長的地方。<br />待在這裡不需要任何的動機，不需要迫使自己做任何一切自己不想做的事。<br />信仰是我們的思想中心 <br />自由是我們的行事方針<br />核心精神是：「佈道」把所見所聞分享出去<br />科技源自於生活，因此我們致力於打造生活化空間，是一個聊天型的城邦<br />Just for fun.</p>
                </div>
              </div>
              <div className="af-class-flex-container-copy w-container">
                <div className="af-class-hero-image-mask" />
                <div data-delay={4000} data-animation="slide" className="af-class-slider-2 w-slider" data-autoplay="true" data-easing="ease-in-out-quart" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={1500} data-infinite="true">
                  <div className="w-slider-mask">
                    <div className="w-slide"><img src="images/1_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/1_1-p-500.jpeg 500w, images/1_1-p-800.jpeg 800w, images/1_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/2_2.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/2_2-p-500.jpeg 500w, images/2_2-p-800.jpeg 800w, images/2_2.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/3_2.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/3_2-p-500.jpeg 500w, images/3_2-p-800.jpeg 800w, images/3_2.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/4_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/4_1-p-500.jpeg 500w, images/4_1-p-800.jpeg 800w, images/4_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/5_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/5_1-p-500.jpeg 500w, images/5_1-p-800.jpeg 800w, images/5_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/6_1.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/6_1-p-500.jpeg 500w, images/6_1-p-800.jpeg 800w, images/6_1.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/7.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/7-p-500.jpeg 500w, images/7-p-800.jpeg 800w, images/7.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/8.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/8-p-500.jpeg 500w, images/8-p-800.jpeg 800w, images/8.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/9.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/9-p-500.jpeg 500w, images/9-p-800.jpeg 800w, images/9.jpg 960w" alt className="af-class-image-100-width" /></div>
                    <div className="w-slide"><img src="images/10.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, (max-width: 1919px) 54vw, 900px" srcSet="images/10-p-500.jpeg 500w, images/10-p-800.jpeg 800w, images/10.jpg 960w" alt className="af-class-image-100-width" /></div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="w-slider-nav w-shadow w-round" />
                </div>
              </div>
            </header>
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

export default PoleisView

/* eslint-enable */