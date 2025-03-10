// for category selection
const categoryTitle1 = document.querySelectorAll('.category_title_4option');
const categoryTitle = document.querySelectorAll('.category_title_5option');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle1.length; i++){
    categoryTitle1[i].addEventListener('click', filterPosts.bind(this, categoryTitle1[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts. length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        }
        else{
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle1.length; i++){
        categoryTitle1[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}


// 
for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts2.bind(this, categoryTitle[i]));
}

function filterPosts2(item){
    changeActivePosition2(item);
    for(let i = 0; i < allCategoryPosts. length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        }
        else{
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition2(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

// for product detail page
let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}