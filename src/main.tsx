import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import { App } from './app.tsx'
import './assets/index.css'

render(document.getElementById('app') as HTMLElement, <App />)
