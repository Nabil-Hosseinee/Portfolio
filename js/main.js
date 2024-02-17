// chargement
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});


// Script pour la nav sur le côté
// js
window.addEventListener('scroll', function() {
    var headerNav = document.querySelector('header nav');
    var asideNav = document.getElementById("scroll-bar")

    if (window.scrollY > 600) { 
        headerNav.classList.add('desappear');
        headerNav.classList.remove('appear');
    } 
    else {
        headerNav.classList.remove('desappear');
        headerNav.classList.add('appear');
    }

    if (window.scrollY > 500) { 
        asideNav.classList.add('active');
    } 
    else {
        asideNav.classList.remove('active');
    }
});



// jquery
$(document).ready(function() {
    // Lorsque la souris survole la div avec la classe "icons-box"
    $(".icons-box").on("mouseover", function() {
        let conta = $(this).next(".info");
        console.log(conta);
        conta.stop().fadeIn('fast', function() {
            console.log("Ça marche");
        });
    });

    // Lorsque la souris quitte la div avec la classe "icons-box"
    $(".icons-box").on("mouseout", function() {
        let conta = $(this).next(".info");
        conta.stop().fadeOut('fast', function() {
            console.log("Ça marche");
        });
    });
});



// scrip pour le scroll-link (la souris dans le header)
jQuery(document).ready(function($){
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -1
		}, 750);
	});
});




// script changement de mots
document.addEventListener("DOMContentLoaded", function () {
    var changingWord = document.getElementById("changing-word");
    var words = ["curieux", "créatif", "motivé"];
    var index = 0;

    function changeWord() {
        changingWord.classList.add('falling'); 
        setTimeout(function () {
            changingWord.textContent = words[index];
            index = (index + 1) % words.length;
            changingWord.classList.remove('falling'); 
        }, 500); 
    }

    setInterval(changeWord, 2000);
});


// Script pour avoir la hauteur de la page en pixel
window.addEventListener("scroll", function() {
    var hauteurDeDefilement = window.scrollY || window.pageYOffset;
    console.log("Nouvelle hauteur de défilement : " + hauteurDeDefilement + " pixels");
});
    



// Animation Avatar
document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('perso');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        // Ajoutez une classe 'scroll-up' lorsque la position de défilement est proche de 911px
        if (scrollPosition >= 700 && scrollPosition <= 1000) {
            element.classList.add('scroll-up');
            element.classList.remove('scroll-down');
        } 
        else if (scrollPosition <= 700) {
            element.classList.add('scroll-down');
            element.classList.remove('scroll-up');
        }
    });
});


// Slider img Projet
let currentSlide = 1;
let currentSliderId;

function getIdOnClick() {
    var linkId = event.target.id;
    console.log('ID de la balise <a> cliquée :', linkId);
    var conca = "link-" + linkId;
    currentSliderId = conca;
    showSliderTest(currentSliderId);
}


function showSliderTest(id) {
    console.log("Je récup l'id et c'est" + id);
    document.getElementById(id).style.display= 'flex';
    showSlide(currentSlide, id);
}

function hideSlider(element) {
    element.parentNode.style.display = 'none';
  }
  

function showSlide(slideIndex, id) {
    console.log ("je suis " + id);
    var target = '#' + id + ' img';
    console.log ("le target est " + target);

  const slides = document.querySelectorAll(target);

  if (slideIndex < 1) {
    currentSlide = slides.length;
  } else if (slideIndex > slides.length) {
    currentSlide = 1;
  }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[currentSlide - 1].style.display = 'block';
}

function prevSlide() {
  showSlide(currentSlide -= 1, currentSliderId);
}

function nextSlide() {
  showSlide(currentSlide += 1, currentSliderId);
}

// Ajout d'événement au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.querySelector('.slider button.close');
  const prevBtn = document.querySelector('.slider button.prev');
  const nextBtn = document.querySelector('.slider button.next');

  closeBtn.addEventListener('click', hideSlider);
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
});



// souris personnalisé
document.addEventListener('DOMContentLoaded', function() {
    let cursor = document.querySelector(".custom-cursor");
    let cursorBefore = document.querySelector(".custom-cursor-before");
    let cursorBefore2 = document.querySelector(".custom-cursor-before2");


    document.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        cursorBefore.style.left = e.clientX + 'px';
        cursorBefore.style.top = e.clientY + 'px';

        cursorBefore2.style.left = e.clientX + 'px';
        cursorBefore2.style.top = e.clientY + 'px';
    })

})


// Animation compétences

function revealComp(selector, offset, delay) {
    var elements = document.querySelectorAll(selector);
    var positionScroll = window.scrollY;

    elements.forEach(function(element, index) {
        var revealTime = offset + index * delay;

        if (positionScroll > revealTime) {
            element.classList.add("show");
        }
        else {
            element.classList.remove("show");
        }
    });
}

window.addEventListener('scroll', function() {
    revealComp(".tools-content", 1416, 50);
});



// Animation projets margin top
function revealProj(selector, offset, delay) {
    var elements = document.querySelectorAll(selector);
    var positionScroll = window.scrollY;

    elements.forEach(function(element, index) {
        var revealTime = offset + index * delay;

        if (positionScroll > revealTime) {
            element.classList.add("box-proj-mgt0");
        }
        else {
            element.classList.remove("box-proj-mgt0");
        }
    });
}

window.addEventListener('scroll', function() {
    revealProj(".box-proj", 2465, 100);
});



// Animation le cache projet
document.addEventListener('DOMContentLoaded', function () {
    let cacheAbout = document.querySelector(".cache-about");
    let cacheComp = document.querySelector(".cache-comp");
    let cacheProj = document.querySelector(".cache-proj");

    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;

        if (scrollY > 180) {
            cacheAbout.classList.add("cache-about-active");
        }
        else {
            cacheAbout.classList.remove("cache-about-active");
        }

        if (scrollY > 1155) {
            cacheComp.classList.add("cache-comp-active");
        }
        else {
            cacheComp.classList.remove("cache-comp-active");
        }
        

        if (scrollY > 2126) {
            cacheProj.classList.add("cache-proj-active");
        }
        else {
            cacheProj.classList.remove("cache-proj-active");
        }
    })
})