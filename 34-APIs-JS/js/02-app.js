// API Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver( entries => {
        // console.log(entries[0]);
        if(entries[0].isIntersecting) {
            console.log('Ya está vivisble');
        }
    });

    observer.observe(document.querySelector('.premium'));


})