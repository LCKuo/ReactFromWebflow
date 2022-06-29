/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://uploads-ssl.webflow.com/6165507cab3fc14387e2119a/6173ff6fd501688aeac601d2_web3.txt").then(body => body.text()), isAsync: false },
]

let Controller

class DemilyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/DemilyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DemilyView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '620de4284ad6f537cda17679'
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
    const proxies = DemilyView.Controller !== DemilyView ? transformProxies(this.props.children) : {

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
                <a href="index.html" className="af-class-brand-demily w-nav-brand"><img src="images/Demiverse_Black.png" loading="lazy" width={237} sizes="(max-width: 479px) 99vw, 187px" srcSet="images/Demiverse_Black-p-500.png 500w, images/Demiverse_Black-p-800.png 800w, images/Demiverse_Black-p-1080.png 1080w, images/Demiverse_Black.png 1170w" alt className="af-class-image-3" /></a>
                <a href="http://discord.gg/demi-human" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/discord_1.png" loading="lazy" width={44} sizes="44px" srcSet="images/discord_1-p-500.png 500w, images/discord_1.png 512w" alt className="af-class-image-discord" /></a>
                <a href="https://opensea.io/collection/demihuman" target="_blank" className="af-class-link-block-2 w-inline-block"><img src="images/截圖_2021-12-22_上午10.13.29-removebg-preview-1.png" loading="lazy" width={53} alt className="af-class-image-9" /></a>
                <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                  <a href="index.html" className="af-class-nav-link w-nav-link">HOME</a>
                  <a href="demily.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">DEMILY</a>
                  <a href="poleis.html" className="af-class-nav-link w-nav-link">POLEIS</a>
                  <a href="history.html" className="af-class-nav-link w-nav-link">HISTORY</a>
                  <a href="https://www.demily.store/" className="af-class-nav-link w-nav-link">MERCH</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div data-delay={3000} data-animation="slide" className="af-class-slider-1 w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={1000} data-infinite="true">
              <div className="w-slider-mask">
                <div className="af-class-slide-1 w-slide">
                  <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/7G0vYpb9xz8?rel=0&controls=1&autoplay=0&mute=0&start=0" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen title="2021Demi-Human NFTs | DEMI TEASER | DemiVerse" /></div>
                </div>
                <div className="af-class-slide-2 w-slide">
                  <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/zktbJ1CdYQ8?rel=0&controls=1&autoplay=0&mute=0&start=3" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen title="This is Demi life." /></div>
                </div>
                <div className="w-slide">
                  <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/F-_ud0G_06Y?rel=0&controls=1&autoplay=0&mute=0&start=3" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen title="自從艾瑪主人進了Demi以後......" /></div>
                </div>
                <div className="w-slide">
                  <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/S7vv8Q4dfw8?rel=0&controls=1&autoplay=0&mute=0&start=21" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen title="【我的沉浸式 DEMI-HUMAN DC日常】" /></div>
                </div>
                <div className="w-slide">
                  <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/RkVvOCYaCtY?rel=0&controls=1&autoplay=0&mute=0&start=61" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen title="DEMI-HUMAN 參與感想" /></div>
                </div>
              </div>
              <div className="w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="w-slider-nav w-slider-nav-invert w-shadow w-round" />
            </div>
            <div id="roadmap" className="af-class-section-demily af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading-demily">NEWS</h2>
                <div data-w-id="940c983b-94a0-4cf4-5d1e-bf5452ec904c" style={{opacity: '0.6'}} className="af-class-news"><img src="images/下載.png" loading="lazy" width={127} id="w-node-cf3c1a1f-796f-7c3a-bdd1-2a3c0e525fc0-cda17679" alt className="af-class-news-format" />
                  <div id="w-node-_9a3ddd9d-98da-f1e8-9dcb-b804849ecdd6-cda17679">
                    <h3>搶進元宇宙 Demi-Human NFT展現強大社群力</h3>
                    <p className="af-class-paragraph-6">元宇宙話題正夯，NFT投資熱潮更是持續延燒，作為 DemiVerse 第一個NFT專案「Demi-Human（亞人）」也即將SOLD OUT，12月20日將進入最後1輪的盲盒開啟階段，想要搶進元宇宙還在等什麼，加入「Demi-Human（亞人）」成為DEMILY，跟著社群一起玩耍、一起療癒、一起暴富！</p>
                    <a href="https://money.udn.com/money/story/5635/5972144" target="_blank" className="w-inline-block">
                      <div className="af-class-text-block-4">查看全文 &gt;&gt;</div>
                    </a>
                  </div><img src="images/unnamed.jpeg" loading="lazy" width={130} id="w-node-de16253e-534c-b902-0cfb-b0db001f0f2b-cda17679" srcSet="images/unnamed-p-500.jpeg 500w, images/unnamed-p-800.jpeg 800w, images/unnamed.jpeg 900w" sizes="(max-width: 479px) 26vw, (max-width: 767px) 22vw, 130px" alt className="af-class-news-format" />
                  <div id="w-node-cbc90656-f303-714e-d01e-3411d0159617-cda17679">
                    <h3>台灣最轟動的NFT社群，<br />如何讓你邊玩、邊賺、邊考照？</h3>
                    <p className="af-class-paragraph-7">目前台灣用戶活躍度最高的「Demi-Human」NFT社群。在沒有名人網紅的造勢下，竟還創下1萬枚NFT迅速完售紀錄！近期最夯台劇<strong>《華燈初上》也找上他們合作。</strong>究竟，Demi-Human NFT 成功的祕密是什麼？...... </p>
                    <a href="https://www.gvm.com.tw/article/87988" target="_blank" className="w-inline-block">
                      <div className="af-class-text-block-4">查看全文 &gt;&gt;</div>
                    </a>
                  </div><img src="images/截圖-2022-05-07-下午6.32.41.png" loading="lazy" width={215} id="w-node-_4bc22a46-2765-b549-df9f-ecd49575faa1-cda17679" alt className="af-class-news-format" />
                  <div id="w-node-d585c210-a7c1-17ca-de72-acd793bd5ad6-cda17679">
                    <h3>潘奕彰打破你對NFT的迷思，先搞懂什麼叫「社群凝聚力」!</h3>
                    <p className="af-class-paragraph-8">Demi Human NFT 系列擁有多達500個特徵，而且持有者多達3,400位，持續往亞太區最友善也最成功的NFT社群邁進，並以DAO IP的概念去發展這個元宇宙，讓持有Demi Human NFT的所有人都可以參與這個項目發展，未來依據社群的發展，衍生出更多元的亞人世界。</p>
                    <a href="https://pse.is/46hvt7" target="_blank" className="w-inline-block">
                      <div className="af-class-text-block-4">查看全文 &gt;&gt;</div>
                    </a>
                  </div><img src="images/截圖-2022-05-07-下午6.32.16.png" loading="lazy" width={215} id="w-node-_32e5c91a-bc82-fa06-df42-2eb4659f6628-cda17679" alt className="af-class-news-format" />
                  <div id="w-node-_737b559f-bcd3-7b3b-b965-87dc0498bfb7-cda17679">
                    <h3>種下善的種子，Demi-Human NFT 打造亞洲第一爆款NFT</h3>
                    <p className="af-class-paragraph-9">2021年9月開始啟動DemiVerse的第一個10K NFT系列專案「Demi-Human（亞人）」。「Demi-Human（亞人）」作為台灣攜手泰國的NFT合作項目，目標成為亞太區最友善，也最成功的NFT社群，讓Demi-Human NFT（Demi-Pass）的持有者共同參與項目發展，大家一起玩耍、一起療癒、一起暴富！</p>
                    <a href="https://news.sina.com.tw/article/20211214/40811880.html" target="_blank" className="w-inline-block">
                      <div className="af-class-text-block-4">查看全文 &gt;&gt;</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="10bf1c9b-7b48-e3ff-1d42-256ef1645c9f" className="af-class-track af-class-wf-section">
              <div className="af-class-camera">
                <div className="af-class-frame">
                  <div className="af-class-demi-photo"><img src="images/DSC_3073.jpeg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, (max-width: 1919px) 93vw, 95vw" srcSet="images/DSC_3073-p-500.jpeg 500w, images/DSC_3073-p-800.jpeg 800w, images/DSC_3073-p-1080.jpeg 1080w, images/DSC_3073-p-1600.jpeg 1600w, images/DSC_3073-p-2000.jpeg 2000w, images/DSC_3073-p-2600.jpeg 2600w, images/DSC_3073-p-3200.jpeg 3200w, images/DSC_3073.jpeg 4528w" alt className="af-class-image-event2" /></div>
                  <div className="af-class-demi-photo"><img src="images/279259335_10228962332189111_6486340897513973869_n.jpeg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, (max-width: 1919px) 93vw, 95vw" srcSet="images/279259335_10228962332189111_6486340897513973869_n-p-500.jpeg 500w, images/279259335_10228962332189111_6486340897513973869_n-p-800.jpeg 800w, images/279259335_10228962332189111_6486340897513973869_n-p-1080.jpeg 1080w, images/279259335_10228962332189111_6486340897513973869_n-p-1600.jpeg 1600w, images/279259335_10228962332189111_6486340897513973869_n.jpeg 2048w" alt className="af-class-image-event1" /></div>
                  <div className="af-class-demi-photo"><img src="images/IMG_6001.jpg" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 767px) 85vw, (max-width: 991px) 86vw, (max-width: 1919px) 88vw, 90vw" srcSet="images/IMG_6001-p-500.jpeg 500w, images/IMG_6001-p-800.jpeg 800w, images/IMG_6001-p-1080.jpeg 1080w, images/IMG_6001-p-1600.jpeg 1600w, images/IMG_6001-p-2000.jpeg 2000w, images/IMG_6001.jpg 2553w" alt className="af-class-image-moo" /></div>
                  <div className="af-class-demi-photo"><img src="images/278707848_10228889442686919_7592052804086039790_n.jpeg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, (max-width: 1919px) 93vw, 95vw" srcSet="images/278707848_10228889442686919_7592052804086039790_n-p-500.jpeg 500w, images/278707848_10228889442686919_7592052804086039790_n-p-800.jpeg 800w, images/278707848_10228889442686919_7592052804086039790_n-p-1080.jpeg 1080w, images/278707848_10228889442686919_7592052804086039790_n.jpeg 1800w" alt className="af-class-image-chubby" /></div>
                </div>
              </div>
            </div>
            <div id="team" className="af-class-section-demily af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-secondary-heading-demily">FOUR NOBLES</h2>
                <div className="w-layout-grid af-class-team-grid-nobles">
                  <div data-w-id="77e200a2-21f7-1566-6b3b-7b0ec1334c93" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed.png" loading="lazy" sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 52vw, (max-width: 1919px) 50vw, 600px" srcSet="images/unnamed-p-500.png 500w, images/unnamed.png 600w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/Demiarashishang" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-nobles">SCHOLAR<br />DEMI-ARASHI | DEMI-HUMAN-127<br /></p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="77e200a2-21f7-1566-6b3b-7b0ec1334c9b" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed_1.png" loading="lazy" sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 52vw, (max-width: 1919px) 50vw, 600px" srcSet="images/unnamed_1-p-500.png 500w, images/unnamed_1.png 600w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/bi821010" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-nobles">UNICORN FANTASY<br />DEMI-CHUBBYTANK | DEMI-HUMAN-0214<br /></p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="77e200a2-21f7-1566-6b3b-7b0ec1334cb4" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed-2.png" loading="lazy" sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 52vw, (max-width: 1919px) 50vw, 600px" srcSet="images/unnamed-2-p-500.png 500w, images/unnamed-2.png 600w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/epakamoo" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-nobles">HESTIA'S-KNIGHT<br />DEMI-MOO | DEMI-HUMAN-1314</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                  <div data-w-id="77e200a2-21f7-1566-6b3b-7b0ec1334cbc" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed-1.png" loading="lazy" sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 52vw, (max-width: 1919px) 50vw, 600px" srcSet="images/unnamed-1-p-500.png 500w, images/unnamed-1.png 600w" alt className="af-class-team-photo" />
                    <a href="https://twitter.com/WakeUpChiu" target="_blank" className="af-class-twitter-link w-inline-block">
                      <p className="af-class-team-intro-nobles">meteora<br />DEMI-Wakeup | Demi-Human-1124</p><img src="images/Twitter.svg" loading="lazy" alt className="af-class-twitter-logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-wf-section"><img src="images/截圖-2022-06-26-下午8.53.50.png" loading="lazy" sizes="(max-width: 1919px) 100vw, 1920px" srcSet="images/截圖-2022-06-26-下午8.53.50-p-500.png 500w, images/截圖-2022-06-26-下午8.53.50-p-800.png 800w, images/截圖-2022-06-26-下午8.53.50-p-1080.png 1080w, images/截圖-2022-06-26-下午8.53.50-p-1600.png 1600w, images/截圖-2022-06-26-下午8.53.50.png 1670w" alt className="af-class-image-26" /></div>
            <div data-delay={4000} data-animation="slide" className="af-class-slider-1 w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
              <div className="w-slider-mask">
                <div className="af-class-slide-1 w-slide">
                  <div className="af-class-container w-container">
                    <h2 className="af-class-secondary-heading-1k-demily">1K DEMILY</h2>
                    <div className="w-layout-grid af-class-team-grid-1000">
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f9415089999a" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1418.jpeg" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 3592px) 57vw, 2048px" srcSet="images/IMG_1418-p-500.jpeg 500w, images/IMG_1418-p-800.jpeg 800w, images/IMG_1418-p-1080.jpeg 1080w, images/IMG_1418-p-1600.jpeg 1600w, images/IMG_1418-p-2000.jpeg 2000w, images/IMG_1418.jpeg 2048w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/tj5391" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">Demily #1<br /></p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999a0" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1419.jpeg" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 3592px) 57vw, 2048px" srcSet="images/IMG_1419-p-500.jpeg 500w, images/IMG_1419-p-800.jpeg 800w, images/IMG_1419-p-1080.jpeg 1080w, images/IMG_1419-p-1600.jpeg 1600w, images/IMG_1419-p-2000.jpeg 2000w, images/IMG_1419.jpeg 2048w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/EChen0619" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #2<br /></p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999a6" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1566.jpeg" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 3592px) 57vw, 2048px" srcSet="images/IMG_1566-p-500.jpeg 500w, images/IMG_1566-p-800.jpeg 800w, images/IMG_1566-p-1080.jpeg 1080w, images/IMG_1566-p-1600.jpeg 1600w, images/IMG_1566-p-2000.jpeg 2000w, images/IMG_1566.jpeg 2048w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/draakzion1" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #3</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999ab" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1412.jpeg" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 3592px) 57vw, 2048px" srcSet="images/IMG_1412-p-500.jpeg 500w, images/IMG_1412-p-800.jpeg 800w, images/IMG_1412-p-1080.jpeg 1080w, images/IMG_1412-p-1600.jpeg 1600w, images/IMG_1412-p-2000.jpeg 2000w, images/IMG_1412.jpeg 2048w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/CCIE11440" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #4</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999b2" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/max.png" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 1919px) 55vw, 600px" srcSet="images/max-p-500.png 500w, images/max.png 600w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/soaringcrowz" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #5</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999b9" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1427.jpeg" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 3592px) 57vw, 2048px" srcSet="images/IMG_1427-p-500.jpeg 500w, images/IMG_1427-p-800.jpeg 800w, images/IMG_1427-p-1080.jpeg 1080w, images/IMG_1427-p-1600.jpeg 1600w, images/IMG_1427-p-2000.jpeg 2000w, images/IMG_1427.jpeg 2048w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/onionfrancis" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #6</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999c0" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed.png" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 1919px) 55vw, 600px" srcSet="images/unnamed-p-500.png 500w, images/unnamed.png 600w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/Demiarashishang" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #7</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999c7" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed_1.png" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 1919px) 55vw, 600px" srcSet="images/unnamed_1-p-500.png 500w, images/unnamed_1.png 600w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/bi821010" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #8</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999ce" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed-2.png" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 1919px) 55vw, 600px" srcSet="images/unnamed-2-p-500.png 500w, images/unnamed-2.png 600w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/epakamoo" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #9</p>
                        </a>
                      </div>
                      <div data-w-id="1ec0a704-e6ad-1421-7ec9-f941508999d5" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/unnamed-1.png" loading="lazy" sizes="(max-width: 991px) 60vw, (max-width: 1919px) 55vw, 600px" srcSet="images/unnamed-1-p-500.png 500w, images/unnamed-1.png 600w" alt className="af-class-team-photo" />
                        <a href="https://twitter.com/WakeUpChiu" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #10</p>
                        </a>
                      </div>
                      <div data-w-id="5c5e9e80-fdff-9894-448f-2742af434b92" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="e1a3b81d-83b2-df9c-cc04-11623fec434e" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="50bd2fec-c0e1-be43-170e-0b8e801ad1aa" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="322f48a5-8443-5499-e8b8-cff6ed394554" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="e83a5669-9588-24c0-ce0e-22bb00e59fff" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="c9f9500f-7ef5-65fd-7b82-fe0c7e071b86" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="6dd73a0c-5f63-aa51-4d0b-69c3398fad59" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="0c186fda-6e22-5416-da79-fcb80465d3b3" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="487f3a58-913e-22c3-252b-c707b44d4dde" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="60a69dc1-b2db-aaaf-70ea-6692a3b8cbed" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="d3a0c9d8-e11b-a4fe-7dee-ce60fb8a7c97" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="653d120b-930e-820e-ac34-31150cf1c526" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div id="w-node-c6ee1e78-7155-0709-19b9-14d74da9454c-cda17679" data-w-id="c6ee1e78-7155-0709-19b9-14d74da9454c" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="7cdc1fee-7f29-9ca6-136b-1e91ffc277d7" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="8b5a6442-df54-0fd7-be58-ec15508246e2" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-slide-2 w-slide">
                  <div className="af-class-container w-container">
                    <h2 className="af-class-secondary-heading-1k">1K DEMILY</h2>
                    <div className="w-layout-grid af-class-team-grid-1000">
                      <div data-w-id="d0a79d6c-fca7-dfb0-c6a1-5d8120117bdb" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="7bd57ccc-ff6f-bea2-6ebd-555aae8d30e0" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="7a76d0b1-aeef-bd12-d0cf-000d87de8262" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="9d9dbd98-af39-8766-cbe2-331fc1709e4f" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="5821cb0b-ff00-a0fd-99aa-5e3edff7e370" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="aaaecdb5-95f8-4e31-d950-d7480bcb04f4" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="a5bbedd4-a773-fbc2-8100-32190aa62344" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="5edd4f66-9b62-6e83-f5cd-370156ec1322" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="76e7e27c-9412-ca40-d476-7d17358a83d0" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="c833b813-16cb-6a0b-ef8a-06778cbe1a2d" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="da3a8d25-6978-da3c-33e4-cfe8014c1892" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="2d52e458-5b27-c99c-4712-b2d74fb516f2" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="8b97d7f4-9040-a0dc-9f31-fa03ac426312" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="41b58988-5f5f-4953-3534-2881eafb8091" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="5284bde9-6532-6fa4-76b5-d8c3fa15ac83" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="5ceaf0fc-942a-eaf5-2b26-7dad51782dca" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="ced2453d-8015-bd83-d45e-f6d67ab98b7c" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="13f1be51-3871-9f77-b5fd-0372cf74c505" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="21aa1ba2-ea27-e2a0-9635-e348a6a25e51" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="da66956c-cf18-ee52-243c-69571365ae38" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="f4e9e11e-efb0-51f2-2bea-7a6cd4a17dc8" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="5321f6f0-782f-361b-9be5-8a218ff982cb" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="ba49cd4d-65c5-8dad-8a83-10ae20f4f246" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="48d31e05-8275-68c3-78d3-3bfdacbba2a1" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                      <div data-w-id="7a7270e4-9506-c29c-b3e8-d509300a7830" style={{opacity: '0.6'}} className="af-class-team-block-right"><img src="images/IMG_1693.JPG" loading="lazy" alt className="af-class-team-photo" />
                        <a href="https://www.demiversestudio.com/demily" target="_blank" className="af-class-twitter-link w-inline-block">
                          <p className="af-class-team-intro">DEMILY #?</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="af-class-slide-nav w-slider-nav w-slider-nav-invert w-shadow w-round w-num" />
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

export default DemilyView

/* eslint-enable */