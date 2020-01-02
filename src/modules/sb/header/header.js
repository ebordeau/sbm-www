import { LightningElement } from 'lwc';

export default class Header extends LightningElement {
    toggleMenu() {
        const nav = this.template.querySelector('nav');
        nav.classList.toggle('open');
    }
    navigateToServices() {

    }
}
