/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6165507cab3fc14387e2119a").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class OrderConfirmationView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/OrderConfirmationController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = OrderConfirmationView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '620bcd3d5054d72709fb03e5'
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
    const proxies = OrderConfirmationView.Controller !== OrderConfirmationView ? transformProxies(this.props.children) : {

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
            <div data-node-type="commerce-order-confirmation-wrapper" data-wf-order-query data-wf-page-link-href-prefix className="w-commerce-commerceorderconfirmationcontainer">
              <div className="w-commerce-commercelayoutcontainer w-container">
                <div className="w-commerce-commercelayoutmain">
                  <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Customer Information</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Email</label>
                            <div />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Shipping Address</label>
                            <div />
                            <div />
                            <div />
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="w-commerce-commercecheckoutshippingsummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Shipping Method</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem">
                            <div />
                            <div />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="w-commerce-commercecheckoutpaymentsummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Payment Info</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Payment Info</label>
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div />
                              <div> / </div>
                              <div />
                            </div>
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Billing Address</label>
                            <div />
                            <div />
                            <div />
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="w-commerce-commercecheckoutorderitemswrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Items in Order</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div role="list" className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-620bcd3d5054d78ddbfb03e6000000000051" />
                    </fieldset>
                  </div>
                </div>
                <div className="w-commerce-commercelayoutsidebar">
                  <div className="w-commerce-commercecheckoutordersummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Order Summary</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Subtotal</div>
                        <div />
                      </div>
                      <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-620bcd3d5054d78ddbfb03e600000000006b">
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                          <div />
                          <div />
                        </div>
                      </div>
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal" />
                      </div>
                    </fieldset>
                  </div>
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

export default OrderConfirmationView

/* eslint-enable */