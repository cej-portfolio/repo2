import $ from 'jquery';

class MobileMenu {
    constructor(){
        //alert("testing");
        /*
        $(".site-header__menu-icon").click(function(){
            console.log("clicked!!!");
        });
        */
        //제이쿼리 스파게티 유발.. 코드이므로.. 별로 권장 안함.
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        //console.log(this);
    }

    toggleTheMenu(){
        //console.log("아이콘이 클릭됐어요!!!");

        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;
