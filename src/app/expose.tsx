import Home from "@page"
import r2wc from "@r2wc/react-to-web-component"

const SecretComponent = r2wc(Home)

customElements.define("secret-component", SecretComponent)