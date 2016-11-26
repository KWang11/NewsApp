;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M875.052155 823.429939c-19.820418-51.561329-48.232514-97.906867-84.444251-137.749294-36.403095-40.054251-78.866209-71.533196-126.20947-93.566002-8.992815-4.185322-18.088984-7.988951-27.278273-11.418051 20.349467-11.520381 39.263236-25.873274 56.248072-42.85811 49.285496-49.285496 76.428693-114.813932 76.428693-184.514387 0-69.700455-27.142174-135.228891-76.428693-184.514387s-114.814955-76.428693-184.515411-76.428693-135.228891 27.143197-184.515411 76.428693c-49.285496 49.28652-76.428693 114.813932-76.428693 184.514387 0 69.700455 27.143197 135.228891 76.428693 184.514387 16.984836 16.984836 35.899628 31.337729 56.247049 42.85811-9.18929 3.430122-18.285458 7.232728-27.278273 11.418051-47.343261 22.031782-89.806375 53.511751-126.20947 93.566002-36.21276 39.84345-66.13628 85.633333-84.445274 137.749294-15.278985 43.48949-13.682627 86.440721-14.458293 106.500593l61.380976 0c-2.025123-143.258775 134.198421-310.976614 319.278697-310.976614 185.079252 0 324.882322 173.85563 325.419558 310.976614l61.379952 0C894.560464 891.158483 895.512139 876.651071 875.052155 823.429939zM309.306066 353.324094c0-110.028952 89.515756-199.544709 199.545732-199.544709 110.028952 0 199.545732 89.515756 199.545732 199.544709s-89.51678 199.544709-199.545732 199.544709C398.821823 552.868803 309.306066 463.353047 309.306066 353.324094z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sanheng" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M942.004009 541.080316 82.058412 541.080316c-15.809057 0-28.719088-13.003152-28.719088-29.063943 0-16.061814 12.911054-29.097712 28.719088-29.097712l859.945597 0c15.809057 0 28.656667 13.034874 28.656667 29.097712C970.660676 528.077164 957.81409 541.080316 942.004009 541.080316L942.004009 541.080316z"  ></path>'+
      ''+
      '<path d="M942.004009 541.080316 82.058412 541.080316c-15.809057 0-28.719088-13.003152-28.719088-29.063943 0-16.061814 12.911054-29.097712 28.719088-29.097712l859.945597 0c15.809057 0 28.656667 13.034874 28.656667 29.097712C970.660676 528.077164 957.81409 541.080316 942.004009 541.080316L942.004009 541.080316z"  ></path>'+
      ''+
      '<path d="M942.004009 863.568101 82.058412 863.568101c-15.809057 0-28.719088-13.005198-28.719088-29.065989 0-16.061814 12.911054-29.098735 28.719088-29.098735l859.945597 0c15.809057 0 28.656667 13.035898 28.656667 29.098735C970.660676 850.562902 957.81409 863.568101 942.004009 863.568101L942.004009 863.568101z"  ></path>'+
      ''+
      '<path d="M942.004009 863.568101 82.058412 863.568101c-15.809057 0-28.719088-13.005198-28.719088-29.065989 0-16.061814 12.911054-29.098735 28.719088-29.098735l859.945597 0c15.809057 0 28.656667 13.035898 28.656667 29.098735C970.660676 850.562902 957.81409 863.568101 942.004009 863.568101L942.004009 863.568101z"  ></path>'+
      ''+
      '<path d="M942.004009 218.594577 82.058412 218.594577c-15.809057 0-28.719088-13.004175-28.719088-29.064966 0-16.061814 12.911054-29.098735 28.719088-29.098735l859.945597 0c15.809057 0 28.656667 13.035898 28.656667 29.098735C970.660676 205.590402 957.81409 218.594577 942.004009 218.594577L942.004009 218.594577z"  ></path>'+
      ''+
      '<path d="M942.004009 218.594577 82.058412 218.594577c-15.809057 0-28.719088-13.004175-28.719088-29.064966 0-16.061814 12.911054-29.098735 28.719088-29.098735l859.945597 0c15.809057 0 28.656667 13.035898 28.656667 29.098735C970.660676 205.590402 957.81409 218.594577 942.004009 218.594577L942.004009 218.594577z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
