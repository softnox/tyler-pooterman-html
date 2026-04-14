import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import jQuery and set globals before other scripts

import './js/jquery.min.js';
window.jQuery = window.$ = window.jQuery || window.$;
import './js/bootstrap.min.js'
import './js/swiper-bundle.min.js'
import './js/carousel.js'
// import './js/plugin.js'
import './js/jquery.nice-select.min.js'
import './js/animation_heading.js'
import './js/rangle-slider.js'
import './js/shortcodes.js'
import './js/lazysize.min.js'
import './js/main.js'

import './fonts/fonts.css';
import './fonts/font-icons.css';
import './css/bootstrap.min.css';
import './css/swiper-bundle.min.css';
import './css/animate.css';
import './css/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

