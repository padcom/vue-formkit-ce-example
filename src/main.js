import './tailwind.css'

import { defineCustomElement } from 'vue'
import FormKitProvider from './components/FormKitProvider.ce.vue'
import HelloWorld from './components/HelloWorld.ce.vue'

customElements.define('formkit-provider', defineCustomElement(FormKitProvider))
customElements.define('hello-world', defineCustomElement(HelloWorld))
