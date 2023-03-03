// BURGER MENU EVENT
const burger = () => {
    const nav1 = document.querySelector(".nav-links-1");
    const nav2 = document.querySelector(".nav-links-2");
    const nav3 = document.querySelector(".nav-links-3");
    const nav4 = document.querySelector(".nav-links-4");

    nav1.classList.toggle("burger-active-1");
    nav2.classList.toggle("burger-active-2");
    nav3.classList.toggle("burger-active-3");
    nav4.classList.toggle("burger-active-4");
}

// ARROW NAVIGATION EVENT
let activeIndex = 0;
const articles = document.querySelectorAll("article");

const GoLeft = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentArticle.dataset.status = "before";     
    nextArticle.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    }); 
}
const GoRight = () => { 
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
                            
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
		nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    currentArticle.dataset.status = "after"
	
	nextArticle.dataset.status = "becoming-active-from-before"
    
    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
