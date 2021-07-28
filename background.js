const HEADERS_TO_STRIP = ['content-security-policy', 'x-frame-options']

chrome.webRequest.onHeadersReceived.addListener(
  details => {
    return {
      responseHeaders: details.responseHeaders.filter(header => {
        return !HEADERS_TO_STRIP.includes(header.name.toLowerCase())
      })
    }
  },
  {
    urls: ['https://www.baidu.com/*'],
    types: ['sub_frame']
  },
  ['blocking', 'responseHeaders', 'extraHeaders']
)
