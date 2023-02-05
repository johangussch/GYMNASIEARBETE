let activeIndex = 0;

const articles = document.querySelectorAll("article");

const GoLeft = () => {
    const nextIndex = activeIndex - 1 >= 0? activeIndex - 1 : articles.length - 1;
    
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    nextArticle = document.querySelector(`[data-index="$(nextIndex)"]`);
    
    
    currentArticle.dataset.status = "before";     
    nextArticle.dataset.status = "becoming-active-from-after";

    console.log("LEFT LEFT LEFT");

    setTimeout(() => {
        nextArticle.dataset.stats = "active";
        activeIndex = nextIndex;
    });
}
const GoRight = () => { 
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
    
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
		nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
	
        //Active group becomes after
	
    currentArticle.dataset.status = "after"
	
        //Next article element/page
	nextArticle.dataset.status = "becoming-active-from-after"
    
    console.log("RIGHT RIGHT RIGHT");

    setTimeout(() => {
        nextArticle.dataset.stats = "active";
        activeIndex = nextIndex;
    });
}
