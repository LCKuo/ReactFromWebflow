/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61828ba571ff8353a464be3b'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\demiversestudio.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-frosted-glass {\n\t-webkit-backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n  backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n}\n" }} />
            </div>
            <div className="af-class-utility-page-wrap">
              <div className="af-class-_404-interaction"><img src="images/Blue-texture.jpg" loading="lazy" sizes="460px" srcSet="images/Blue-texture-p-500.jpeg 500w, images/Blue-texture-p-800.jpeg 800w, images/Blue-texture.jpg 1600w" alt className="af-class-circle-image" /><img src="images/Blue-texture.jpg" loading="lazy" sizes="460px" srcSet="images/Blue-texture-p-500.jpeg 500w, images/Blue-texture-p-800.jpeg 800w, images/Blue-texture.jpg 1600w" alt className="af-class-circle-image af-class-glow" /></div>
              <div className="af-class-utility-page-content w-form">
                <h1 className="af-class-utility-heading">Page not found</h1>
                <div className="af-class-frosted-glass-original">
                  <div className="af-class-_404">404</div>
                  <div className="af-class-_404-details">The page you are looking for doesn't exist or has been moved</div>
                  <div className="af-class-horizontal-divider" />
                  <a href="index.html" className="af-class-utility-button w-button">Back to Home Page</a>
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

export default NotFoundView

/* eslint-enable */