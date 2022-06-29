/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61828ba571ff8360c564be3a'
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
    const proxies = UnauthorizedView.Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-frosted-glass-original {\n\t-webkit-backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n  backdrop-filter: saturate(200%) blur(10px) brightness(100%);\n}\n" }} />
            </div>
            <div className="af-class-utility-page-wrap">
              <div data-w-id="52cf82be-fe2d-20ab-a8ee-5818d7c8e3d3" className="w-layout-grid af-class-password-interaction">
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
                <div className="af-class-password-cell">
                  <div className="af-class-password-cell-color" />
                  <div className="af-class-password-cell-color af-class-orange" />
                  <div className="af-class-password-cell-color af-class-yellow" />
                  <div className="af-class-password-cell-color af-class-green" />
                  <div className="af-class-password-cell-color af-class-blue" />
                  <div className="af-class-password-cell-color af-class-indigo" />
                  <div className="af-class-password-cell-color af-class-violet" />
                </div>
              </div>
              <div className="af-class-utility-page-content w-password-page w-form">
                <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" className="af-class-frosted-glass-original w-password-page"><img src="images/Password-lock.svg" loading="lazy" alt className="af-class-lock" />
                  <h1 className="af-class-password-heading">Member only Content</h1>
                  <p className="af-class-password-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, </p><label htmlFor="pass">Password</label><input type="password" className="af-class-text-field w-password-page w-input" autofocus="true" maxLength={256} name="pass" data-name="field" placeholder="Enter your password" id="pass" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-utility-button w-password-page w-button" />
                  <div className="w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                  </div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                  </div>
                </form>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default UnauthorizedView

/* eslint-enable */