/* eslint-disable */

const styles = [
  {
    type: 'href',
    body: 'C:\\css\\normalize.css',
  },
  {
    type: 'href',
    body: 'C:\\css\\webflow.css',
  },
  {
    type: 'href',
    body: 'C:\\css\\demiversestudio.webflow.css',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-nav.af-class-button{display:inline-block;margin:20px 0 20px 15px;padding:20x 25px 20px 25px;border-radius:15px;background-color:#070707;color:#fff}',
  },
  {
    type: 'sheet',
    body: '@media (min-width:992px){.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="478d7b00-095e-32b9-7b7e-c25ce198ed22"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=df230a4e-67bb-1604-b7d6-34f0f1bead51]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=a10697e6-2f1b-5b30-1cac-ec7ad23d34df]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="94d1c81b-c908-fed5-ed33-6e436573522c"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=d48ffdc4-99f2-f027-6873-a1443c1fa8c6]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="49a0c165-5ff2-41ca-210f-53360136f514"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=c67c90a6-607f-c8a6-ccf3-ad54385b03b3]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=fe52eb26-442b-0c3e-c97e-6df78c7be264]{opacity:0}}@media (max-width:991px) and (min-width:768px){.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="478d7b00-095e-32b9-7b7e-c25ce198ed22"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=df230a4e-67bb-1604-b7d6-34f0f1bead51]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=a10697e6-2f1b-5b30-1cac-ec7ad23d34df]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="94d1c81b-c908-fed5-ed33-6e436573522c"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=d48ffdc4-99f2-f027-6873-a1443c1fa8c6]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="49a0c165-5ff2-41ca-210f-53360136f514"]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=c67c90a6-607f-c8a6-ccf3-ad54385b03b3]{opacity:0}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=fe52eb26-442b-0c3e-c97e-6df78c7be264]{opacity:0}}',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-nav.af-class-button{display:inline-block;margin:0;padding:20x 25px 20px 25px;border-radius:15px;background-color:#070707;color:#fff}',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-nav.af-class-button{display:inline-block;margin:20px 0 20px 15px;padding:12px 80px;border-radius:15px;background-color:#fcfcfc;color:#272727}.af-view .w-button{display:inline-block;padding:9px 15px;background-color:#3898ec;color:#fff;border:0;line-height:inherit;text-decoration:none;cursor:pointer;border-radius:0}.af-view .af-class-utility-button{width:50%;padding-right:0;padding-left:0;background-color:rgba(7,7,7,.7);text-align:center}',
  },
  {
    type: 'sheet',
    body: '.af-view .af-class-nav.af-class-button{display:inline-block;margin:20px 0 20px 15px;padding:20x 25px 20px 25px;border-radius:15px;background-color:#070707;color:#fff}.af-view .w-button{display:inline-block;padding:9px 15px;background-color:#3898ec;color:#fff;border:0;line-height:inherit;text-decoration:none;cursor:pointer;border-radius:0}.af-view .af-class-utility-button{width:50%;padding-right:0;padding-left:0;background-color:rgba(7,7,7,.7);text-align:center}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */