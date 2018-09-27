import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}

  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  html {
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;
    position: fixed;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    overflow: hidden;
    height: 100%;
  }

  #__next {
    overflow: hidden;
    height: 100%;
  }
`
