import App from "./App"
import r2wc from "@r2wc/react-to-web-component"

const SecretComponent = r2wc(App)

customElements.define("secret-component", SecretComponent)