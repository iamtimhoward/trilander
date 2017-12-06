var heroImage;


$(document).ready(function() {
   

    setInterval(function() {
        heroImage = document.getElementById('heroSection');
        if (heroImage.dataset.img === "code") {
            heroImage.dataset.img = "data";
            if ($(window).width() > 767) {
                heroImage.style.backgroundImage = 'url("img/data_hero.jpg")';
            } else {
                heroImage.style.backgroundImage = 'url("img/mobile/data_mobile_hero.jpg")';
            }
            $('.block-1').append($('.data-analytics'));
            document.getElementById('dataHeader').className = "selected";
            document.getElementById('dataHR').className = "picked";                       
            $('.block-2').append($('.coding'));
            document.getElementById('codingHeader').className = "";
            document.getElementById('codingHR').className = ""; 
        } else {
            heroImage.dataset.img = "code";
            if ($(window).width() > 767) {
                heroImage.style.backgroundImage = 'url("img/code_hero.jpg")';
            } else {
                heroImage.style.backgroundImage = 'url("img/mobile/code_mobile_hero.jpg")';
            }
            $('.block-1').append($('.coding'));
            document.getElementById('codingHeader').className = "selected";
            document.getElementById('codingHR').className = "picked";
            $('.block-2').append($('.data-analytics'));  
            document.getElementById('dataHeader').className = "";
            document.getElementById('dataHR').className = "";                           
        }        
    }, 5000);

    $('.list .row p, .list .row .item, .list .row span ').on('click', function() {
        var $this = $(this);
        var $ulList = $('.faq .list ul');
        var $deskChevs = $('.list .item img');
        var $mobChevs = $('.list span img');

        var selection = $this.parent().parent()[0].dataset.choice;

        for (var i=0;  i < $deskChevs.length; i++) {
            $deskChevs[i].src = 'img/icons/gn-right-chevron.svg';
        }

        for (var i=0;  i < $mobChevs.length; i++) {
            $mobChevs[i].src = 'img/icons/gn-right-chevron.svg';
        }        

        for (var i=0; i < $ulList.length; i++) {
            // console.log($ulList[i].dataset.ul);
            if ($ulList[i].dataset.ul === selection) {
                // $ulList[i].dataset
               $ulList[i].style.display = "block";
               $deskChevs[selection - 1].src = 'img/icons/blk-chevron-dn.svg';
               $mobChevs[selection - 1].src = 'img/icons/blk-chevron-dn.svg';
            } else {
                $ulList[i].style.display = "none";
            }

        }
        

    })
  

   

});