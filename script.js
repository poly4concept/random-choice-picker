const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');


textarea.focus();
textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)
    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = "";
        }, 10)

        randomSelect();
    }
});

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !=="").map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect(){
    const times = 30;
    const timeout = 100;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, timeout);
    }, timeout);

    setTimeout(() => {
        clearInterval(interval);

        const randomTag = pickRandomTag();

        setTimeout(() => {
            highlightTag(randomTag);
        }, timeout);
    }, times * timeout);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}