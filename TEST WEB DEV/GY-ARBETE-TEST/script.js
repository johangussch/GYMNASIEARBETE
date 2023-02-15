let activeIndex = 0;

const articles = document.querySelectorAll("article");

let nextIndex = 0;

const GoLeft = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    console.log(nextArticle);

    currentArticle.dataset.status = "before";     
    nextArticle.dataset.status = "becoming-active-from-after";
    
    console.log("LEFT LEFT LEFT");

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    }); 
}
const GoRight = () => { 
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
                            
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
	nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    console.log(nextArticle);
	
    currentArticle.dataset.status = "after"
	nextArticle.dataset.status = "becoming-active-from-before"
    
    console.log("RIGHT RIGHT RIGHT");

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
