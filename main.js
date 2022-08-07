window.addEventListener('load', () => {

    const mycursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        mycursor.style.left = e.clientX + 'px';
        mycursor.style.top = e.clientY + 'px';
    });
    
    const images = document.querySelectorAll('img');

    function imgLoading () {
        images.forEach((image, index) => {
            setTimeout(() => {
               image.style.opacity = '1'; 
            }, index * 150);
        });
        setTimeout(() => {
            images[0].style.top = '5%';
            images[0].style.left = '5%';
            images[0].style.transition = '1000ms ease';

            images[1].style.top = '2.5%';
            images[1].style.left = '80%';
            images[1].style.transition = '1000ms ease';

            images[2].style.top = '40%';
            images[2].style.left = '25%';
            images[2].style.transition = '1000ms ease';

            images[3].style.top = '85%';
            images[3].style.left = '70%';
            images[3].style.transition = '1000ms ease';

            images[4].style.top = '73%';
            images[4].style.left = '35%';
            images[4].style.transition = '1000ms ease';
            
        }, 2000);
    }
    imgLoading();
    
    const home = document.querySelector('.home');
    const catalog = document.querySelector('.catalog');
    const x = document.querySelector('.x');
    const contact = document.querySelector('.contact');

    function nav() {
        setTimeout(() => {
            home.style.opacity = '1';
            catalog.style.opacity = '1';
            x.style.opacity = '1';
            contact.style.opacity = '1';
        }, 2000);
    }
    nav();
    
});