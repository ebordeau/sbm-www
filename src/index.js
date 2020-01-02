import { buildCustomElementConstructor } from 'lwc';
import Header from 'sb/header';
import Services from 'sb/services';

customElements.define('sb-header', buildCustomElementConstructor(Header));
customElements.define('sb-services', buildCustomElementConstructor(Services));
