window.addEventListener('load', () => {

    const mycursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        mycursor.style.left = e.clientX + 'px';
        mycursor.style.top = e.clientY + 'px';
    });
    
    const catalogContent = document.querySelector('.catalog-container');

    function loadingOpacity () {
        setTimeout(() => {
            catalogContent.style.opacity = '1';
            catalogContent.style.transition = 'opacity 1500ms ease';
        }, 500);
    }

    loadingOpacity();

    // DISPLAY PARAGRAPH TEXT

    const contentInner = document.querySelectorAll('.content-inner');

    // MOUSE EVENTS
    contentInner.forEach(inner => {
        inner.addEventListener('mouseenter', () => {
            inner.children[1].style.opacity = '1';
            inner.children[1].style.transition = '300ms ease';
        });
        inner.addEventListener('mouseleave', () => {
            inner.children[1].style.opacity = '';
            inner.children[1].style.transition = '300ms ease';
        });
        // TOUCH
        inner.addEventListener('touchstart', () => {
            inner.style.opacity = '0';
            inner.style.transition = '300ms ease';
            inner.children[1].style.opacity = '1';
            inner.children[1].style.transition = '300ms ease';
        });
    });

    // IMAGE BOARD

    const img1 = document.querySelector('.img1');

    contentInner[0].addEventListener('mouseenter', () => {
        contentInner[0].children[0].style.zIndex = '6';
        contentInner[0].children[1].style.zIndex = '6';
        img1.classList.add('image-board-img');
        img1.style.opacity = '1';
        img1.style.transition = '300ms ease';
    });

    contentInner[0].addEventListener('mouseleave', () => {
        img1.classList.remove('image-board-img');
        img1.style.opacity = '0';
        img1.style.transition = '300ms ease';
    });
    
    // TOUCH
    contentInner[0].addEventListener('touchstart', () => {
        contentInner.style.opacity = '0';
        contentInner.style.transition = '300ms ease';
        contentInner[0].children[0].style.zIndex = '6';
        contentInner[0].children[1].style.zIndex = '6';
        img1.classList.add('image-board-img');
        img1.style.opacity = '1';
        img1.style.transition = '300ms ease';
    });

    // SPLATTERED

    const splatteredImg = document.querySelector('.splattered-img');

    contentInner[1].addEventListener('mousemove', (e) => {
        contentInner[1].children[0].style.zIndex = '6';
        contentInner[1].children[1].style.zIndex = '6';
        splatteredImg.style.left = e.clientX + 'px';
        splatteredImg.style.top = e.clientY + 'px';
        splatteredImg.style.opacity = '1';
        splatteredImg.style.transition = '300ms linear';
    });

    contentInner[1].addEventListener('mouseleave', (e) => {
        splatteredImg.style.opacity = '0';
        splatteredImg.style.transition = '300ms linear';
    });

    // THE SIMPLISTIC RESTORATION

    const imgTsr1 = document.querySelector('.imgTsr-1');
    const imgTsr2 = document.querySelector('.imgTsr-2');

    contentInner[2].addEventListener('mouseenter', () => {
        contentInner[2].children[0].style.zIndex = '6';
        contentInner[2].children[1].style.zIndex = '6';
        imgTsr1.classList.add('imgTsr-1-displayed');
        imgTsr1.style.opacity = '1';
        imgTsr1.style.transition = '300ms ease';
        imgTsr2.classList.add('imgTsr-2-displayed');
        imgTsr2.style.opacity = '1';
        imgTsr2.style.transition = '300ms ease';
    });
    
    contentInner[2].addEventListener('mouseleave', () => {
        imgTsr1.classList.remove('imgTsr-1-displayed');
        imgTsr1.style.opacity = '0';
        imgTsr1.style.transition = '300ms ease';
        imgTsr2.classList.remove('imgTsr-2-displayed');
        imgTsr2.style.opacity = '0';
        imgTsr2.style.transition = '300ms ease';
    });
    
    // TOUCH
    contentInner[2].addEventListener('touchstart', () => {
        contentInner.style.opacity = '0';
        contentInner.style.transition = '300ms ease';
        contentInner[2].children[0].style.zIndex = '6';
        contentInner[2].children[1].style.zIndex = '6';
        imgTsr1.classList.add('imgTsr-1-displayed');
        imgTsr1.style.opacity = '1';
        imgTsr1.style.transition = '300ms ease';
        imgTsr2.classList.add('imgTsr-2-displayed');
        imgTsr2.style.opacity = '1';
        imgTsr2.style.transition = '300ms ease';
    });

    // THOUGHTS
    // const jVideo = document.querySelector('.j-video');
    const nycDoor = document.querySelector('.thoughts-nyc-door');

    contentInner[3].addEventListener('mousemove', (e) => {
        contentInner[3].children[0].style.zIndex = '6';
        contentInner[3].children[1].style.zIndex = '6';
        nycDoor.style.left = e.clientX + 'px';
        nycDoor.style.top = e.clientY + 'px';
        nycDoor.style.opacity = '1';
        nycDoor.style.transition = '300ms linear';
    });

    contentInner[3].addEventListener('mouseleave', (e) => {
        nycDoor.style.opacity = '0';
        nycDoor.style.transition = '300ms linear';
    });


    // JACKET
    const jacketImg = document.querySelector('.jacket-img');

    contentInner[4].addEventListener('mouseenter', () => {
        contentInner[4].children[0].style.zIndex = '6';
        contentInner[4].children[1].style.zIndex = '6';
        jacketImg.classList.add('jacket-img-displayed');
        jacketImg.style.opacity = '1';
        jacketImg.style.transition = '300ms ease';
    });

    contentInner[4].addEventListener('mouseleave', () => {
        jacketImg.classList.remove('jacket-img-displayed');
        jacketImg.style.opacity = '0';
        jacketImg.style.transition = '300ms ease';
        
    });
    
    // TOUCH
    contentInner[4].addEventListener('touchstart', () => {
        contentInner.style.opacity = '0';
        contentInner.style.transition = '300ms ease';
        contentInner[4].children[0].style.zIndex = '6';
        contentInner[4].children[1].style.zIndex = '6';
        jacketImg.classList.add('jacket-img-displayed');
        jacketImg.style.opacity = '1';
        jacketImg.style.transition = '300ms ease';
    });

});
