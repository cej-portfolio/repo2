//var Person = require('./modules/Person');
/*
import Person from './modules/Person';

class Adult extends Person {
    payTaxes(){
        console.log(this.name + " now owes $1,000 in taxes.")
    }
}

var john = new Person("john Doe", "blue");
john.greet();

var jane = new Adult("Jane Smiths", "green");
jane.payTaxes();

var jane = new Adult("Jane Smiths", "orange");
jane.greet();
*/

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '50%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
