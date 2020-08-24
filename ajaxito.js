(function getAjax () {
  let ajax = null
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest()
  } else {
    throw new Error('no ajax support')
  }
  window.getAjax = ajax
})()
