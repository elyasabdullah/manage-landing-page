

// ==================================== Header ==================================================== 
let IconMenu = document.querySelector('header nav > img:last-child');
let navContent = document.querySelector('header nav .links-and-startIcon');
let closeBtn = document.querySelector('.links-and-startIcon .close-btn > img')



IconMenu.addEventListener('click', function() {
    navContent.style.display = 'flex';
    this.style.display = 'none'
})


closeBtn.addEventListener('click', _ => {
    navContent.style.display = 'none';
    IconMenu.style.display = 'block'
})

window.addEventListener('resize', function() {
    if(this.innerWidth > 638) {
        IconMenu.style.display = 'none'
        navContent.style.display = 'flex';
    }else {
        IconMenu.style.display = 'block'
        navContent.style.display = 'none';
    }
})

// ============================================== Section three ===========================================
let iconsThree = document.querySelectorAll('.three .icons-three span');
let iconsThreeParent = document.querySelector('.three .icons-three')
let cards = document.querySelector('.three .cards');
let allCardsChildern = document.querySelectorAll('.three .cards > div')
let cardsFirstChild = document.querySelector('.three .cards > div:first-child');
let cardsSecondChild = document.querySelector('.three .cards > div:nth-child(2)');
let cardsLastChild = document.querySelector('.three .cards > div:last-child');



iconsThree.forEach((icon)=> {
    icon.addEventListener('click', function() {
        iconsThree.forEach((icon)=> {
            icon.classList.remove('active')
        });
        icon.classList.add('active');

        if(iconsThreeParent.children[0].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsFirstChild.style.display = 'block';
        }else if(iconsThreeParent.children[1].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsSecondChild.style.display = 'block';
        }else if(iconsThreeParent.children[2].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsLastChild.style.display = 'block';
        }
    })
})

window.addEventListener('resize', function() {
    if(window.innerWidth >= 638) {
        cardsFirstChild.style.display = 'block';
        cardsSecondChild.style.display = 'block';
        cardsLastChild.style.display = 'block';
    }else {
        if(iconsThreeParent.children[0].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsFirstChild.style.display = 'block';
        }else if(iconsThreeParent.children[1].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsSecondChild.style.display = 'block';
        }else if(iconsThreeParent.children[2].classList.contains('active')) {
            allCardsChildern.forEach((ele)=> {
                ele.style.display = 'none';
            })
            cardsLastChild.style.display = 'block';
        }
    }
})
