$(document).ready(function(){

    // $(window).on('load scroll', function () {
    //     var scrolled = $(this).scrollTop();
    //     $('#title').css({
    //         'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
    //         'opacity': 1 - scrolled / 400 // fade out at 400px from top
    //     });
    //     $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    // });


    $('.toggles p').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

          $('.post').not( get_current ).hide(500);
          get_current.show(500);
      });


      $('#showall').click(function() {
          $('.post').show(500);
      });

    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 150) {
    //        $('.navbar-main').addClass('color');
    //     } else {
    //        $('.navbar-main').removeClass('color');
    //     }
    // });

    // $('.slick-slider').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 700,
    //   autoplay:true,
    //   autoplaySpeed: 1000,
    //   arrows:false,
    //   slidesToShow: 5,
    //   slidesToScroll: 1
    // });



      setTimeout( $(".contain p").click(function() {
        $('.post').toggleClass('fade-in-image');
      }), 200);

    setTimeout(function thisDo() {
        $('.hide').removeClass('hide');
        $('.main').addClass('fade-in');
    }, 1500);


    function TimedEvent() {
        $('.loader').addClass('hide');
        $('.titled').addClass('hide');
      };
      setTimeout(TimedEvent, 1500);

(function($) { "use strict";

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});

//Animation

$(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover

$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});

})(jQuery);
});


function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

  // Define the language reload anchors
  var language = {
    eng: {
      welcome:
        "Welcome to L&M",
    },
    al: {
      welcome:
        "Miresevini te L&M",
    },
    // hin: {
    //   welcome:
    //     "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
    //     "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
    //     "भाषा को चुन सकते हैं!",
    // },
  };

  // Check if a hash value exists in the URL
  if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#al") {
      siteContent.textContent = language.al.welcome;
    } else if (window.location.hash == "#hin") {
      siteContent.textContent = language.hin.welcome;
    }
  }

  //////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"APPETIZERS" },' +
		'{ "type":"food", "name":"Hot Appetizer", "description":"tost bread, chiken ham, cheese, salad, french fries", "price":"300/400 " },' +
		'{ "type":"food", "name":"Hot Appetizer", "description":"Cheese triangles, cheese, onions, chicken fingers,olives,tatar sos", "price":"500/1000" },' +
        '{ "type":"food", "name":"Cold Appetizer", "description":"Beef ham,cheese,pickled cucumber,olive, tomatoes, chicken ham, chicken salami", "price":"300/400 " },' +
        '{ "type":"food", "name":"Chicken fingers", "description":"Chicken file,egg, flour, bred crumbs, french fries, tartar sauce", "price":"200 " },' +
        '{ "type":"food", "name":"Chicken wings", "description":"Chicken wings, french fries, souce", "price":"200 " },' +
        '{ "type":"food", "name":"Onion rings", "description":"Onion, egg, flour, bread crumbs, french fries, sauce", "price":"100 " },' +
        '{ "type":"food", "name":"Fried Cheese", "description":"Cheese, egg, flour, bread crumbs, sauce", "price":"80" },' +
        '{ "type":"food", "name":"Fried Cheese triangles", "description":"Cheese triangles, egg, flour, bread crumbs, sauce", "price":"110" },' +
		'{ "type":"separator", "description":"SALADS" },' +
		'{ "type":"food", "name":"Cezar Salad", "description":"Green salad, cucumber, tomatoes, cubeti, chicken file, dressing", "price":"240" },' +
		'{ "type":"food", "name":"Tuna Salad", "description":"Green salad, cucumber, tomatoes, tuna, dressing", "price":"220" },' +
        '{ "type":"food", "name":"Shopska Salad", "description":"Green salad, cucumber, tomatoes, tuna, dressing", "price":"130" }]'

);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Snacks" },' +
		'{ "type":"food", "name":"Club Sandwich", "description":"tost bread, chicken ham, cheese, salad, french fries", "price":"100" },' +
		'{ "type":"food", "name":"Tost Sandwich", "description":"tost bread, chicken salami, cheese, french fries", "price":"110" },' +
		'{ "type":"food", "name":"LM sandwich", "description":"Baguete bread, chichen file, cheese, salad, tomatoes, pickled cucumber", "price":"150" },' +
		'{ "type":"food", "name":"LM hamburger", "description":"Beef, cheese, salad, tomatoes, tortilla, french fries, ketchup", "price":"180" },' +
        '{ "type":"food", "name":"Burrito", "description":"Chicken file, cheese, salad, tomatoes, tortilla, french fries, ketchup", "price":"170" },' +
        '{ "type":"food", "name":"Beef Burrito", "description":"", "price":"200" },'+
        '{ "type":"food", "name":"Medalion Burger", "description":"", "price":"150" },' +
        '{ "type":"food", "name":"Quesadilla", "description":"Chicken file, cheese, tortilla, tomatoes, pickled cucumber, peppers, french fries, ketchup", "price":"170" },' +
        '{ "type":"food", "name":"French Fries", "description":"", "price":"80" },' +
        '{ "type":"food", "name":"French fries with cheese", "description":"", "price":"110" } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"Crepes with nutella", "description":"Nutella, banana, nuts, melted chocolate,cream", "price":"120" },' +
		'{ "type":"food", "name":"Crepes with honey and nuts", "description":"Honey, nuts", "price":"110" },' +
		'{ "type":"food", "name":"Waffle with nutella", "description":"Nutella, banana, melted chocolate", "price":"130" } ]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"Coffee" },' +
		'{ "type":"drink", "name":"Tea Rum", "description":"", "price":"140" },' +
		'{ "type":"drink", "name":"Espresso", "description":"", "price":"50" },' +
        '{ "type":"drink", "name":"Double espresso", "description":"", "price":"100" },' +
        '{ "type":"drink", "name":"Macchiato", "description":"", "price":"50" },' +
        '{ "type":"drink", "name":"Macchiato Big", "description":"", "price":"60" },' +
        '{ "type":"drink", "name":"Cappuchino", "description":"", "price":"60" },' +
        '{ "type":"drink", "name":"Late Macchiato", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Nescafe Cold", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Nescafe Vanilla", "description":"", "price":"80" },' +
		'{ "type":"separator", "description":"Hot Drinks" },' +
		'{ "type":"drink", "name":"Hot Chocolate", "description":"", "price":"80" },' +
		'{ "type":"drink", "name":"Hot Nescafe", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Hot Milk", "description":"", "price":"60" },' +
        '{ "type":"drink", "name":"Nesquik", "description":"", "price":"60" },' +
        '{ "type":"drink", "name":"Tea", "description":"", "price":"50" },' +
		'{ "type":"separator", "description":"Soft Drinks" },' +
		'{ "type":"drink", "name":"Coca Cola", "description":"", "price":"70" },' +
		'{ "type":"drink", "name":"Fanta", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Scheweppes Bitter", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Scheweppes Tonic", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Scheweppes Tangerin", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Coca Cola zero", "description":"", "price":"70" },' +
        '{ "type":"drink", "name":"Red Bull", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Orange Juice", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Peach Nectar", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Apple Juice", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Blueberry Juice", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Cherry Juice", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Peach Iced Tea", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Lemon Iced Tea", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Golden Eagle", "description":"", "price":"80" },' +
        '{ "type":"drink", "name":"Rosa", "description":"", "price":"50" },' +
        '{ "type":"drink", "name":"Pelisterka", "description":"", "price":"50" },' +
		'{ "type":"separator", "description":"BEER" },' +
		'{ "type":"drink", "name":"Skopsko", "description":"", "price":"100" },' +
		'{ "type":"drink", "name":"Skopsko Smooth", "description":"", "price":"100" },' +
		'{ "type":"drink", "name":"Zlaten Dab", "description":"", "price":"100" },' +
        '{ "type":"drink", "name":"Heineken", "description":"", "price":"140" },' +
        '{ "type":"drink", "name":"Paulaner", "description":"", "price":"250" },' +
        '{ "type":"drink", "name":"Tuborg", "description":"", "price":"120" },' +
        '{ "type":"drink", "name":"Corona", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Draft Beer", "description":"0.3l", "price":"90" },' +
        '{ "type":"drink", "name":"Draft Beer", "description":"0.5l", "price":"120" },' +
        '{ "type":"separator", "description":"Special Cocktails" },' +
		'{ "type":"drink", "name":"LM Cocktail", "description":"", "price":"250" },' +
        '{ "type":"drink", "name":"Creative Cocktail", "description":"", "price":"250" },' +
        '{ "type":"separator", "description":"White Wine" },' +
        '{ "type":"drink", "name":"Alexandria", "description":"0.2l", "price":"150" },' +
        '{ "type":"drink", "name":"Bovin", "description":"0.2l", "price":"200" },' +
        '{ "type":"separator", "description":"Red Wine" },' +
        '{ "type":"drink", "name":"Alexandria", "description":"0.2l", "price":"150" },' +
        '{ "type":"drink", "name":"Alexandria", "description":"0.75l", "price":"700" },' +
        '{ "type":"drink", "name":"Bovin", "description":"0.2l", "price":"200" },' +
        '{ "type":"drink", "name":"T`ga ", "description":"0.2l", "price":"150" },' +
        '{ "type":"separator", "description":"Aperitif Cocktails" },' +
        '{ "type":"drink", "name":"Spritz Strawberry", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Bisneo", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Aperol", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Struga", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Camari", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Martini", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Spritz Hugo", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Americano", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Negroni", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Manhattan", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Martini Cocktail", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Old Fashion", "description":"", "price":"200" },' +
        '{ "type":"separator", "description":"Classic Cocktails" },' +
        '{ "type":"drink", "name":"Vodka Sour", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"White Russian", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Mai Tai", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Daiquri", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Pina Colada", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Sex on the beach", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Moskow Mule", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Margerita", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Cosmopolitan", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Gin Fizz", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Tequila Sunrise", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Blue Lagoon", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Tom Collins", "description":"", "price":"200" },' +
        '{ "type":"drink", "name":"Zombie", "description":"", "price":"250" },' +
        '{ "type":"drink", "name":"Long Island Iced Tea", "description":"", "price":"250" },' +
		'{ "type":"separator", "description":"Alcoholic Drinks" },' +
		'{ "type":"drink", "name":"Sminoff", "description":"0.4cl", "price":"120" },' +
        '{ "type":"drink", "name":"Sminoff Ice", "description":"0.4cl", "price":"200" },' +
        '{ "type":"drink", "name":"Eristoff", "description":"0.4cl", "price":"120" },' +
        '{ "type":"drink", "name":"Blevedere", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Grey Goose", "description":"0.4cl", "price":"350" },' +
        '{ "type":"drink", "name":"Johnnie Walker", "description":"0.4cl", "price":"200" },' +
        '{ "type":"drink", "name":"Jack Daniels", "description":"0.4cl", "price":"250" },' +
        '{ "type":"drink", "name":"Jack Honey", "description":"0.4cl", "price":"250" },' +
        '{ "type":"drink", "name":"Whiskey Turkey", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Baileys", "description":"0.4cl", "price":"160" },' +
        '{ "type":"drink", "name":"Four Roses", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Angostura", "description":"0.4cl", "price":"160" },' +
        '{ "type":"drink", "name":"Martel V.S", "description":"0.4cl", "price":"200" },' +
        '{ "type":"drink", "name":"Kahlua", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Martini", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Ramazzoti", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Jagermeister", "description":"0.4cl", "price":"120" },' +
        '{ "type":"drink", "name":"Loza", "description":"0.4cl", "price":"60" },' +
        '{ "type":"drink", "name":"Badel", "description":"0.4cl", "price":"70" },' +
        '{ "type":"drink", "name":"Jim Beam", "description":"0.4cl", "price":"150" },' +
        '{ "type":"drink", "name":"Henderinks Gin&Tonic", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Bombay Sapphire&Tonic", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Gordon`s Tonic", "description":"0.4cl", "price":"250" },' +
        '{ "type":"drink", "name":"GlenFioldich", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Johnnie Black Label", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Johnnie Gold Label", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Chivas", "description":"0.4cl", "price":"350" },' +
        '{ "type":"drink", "name":"Gentleman Jack", "description":"0.4cl", "price":"350" },' +
        '{ "type":"drink", "name":"Single Barel Jack", "description":"0.4cl", "price":"350" },' +
        '{ "type":"drink", "name":"Courvoisier", "description":"0.4cl", "price":"300" },' +
        '{ "type":"drink", "name":"Hennessy", "description":"0.4cl", "price":"350" },' +
        '{ "type":"drink", "name":"Stock", "description":"0.4cl", "price":"100" },' +
        '{ "type":"drink", "name":"Jemison", "description":"0.4cl", "price":"150" },' +
		'{ "type":"drink", "name":"Malibue", "description":"0.4cl", "price":"120" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);




$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

  });