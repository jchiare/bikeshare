var search_input_area = document.querySelector('#after-landing-page');

function ShowObject(object){
    object.classList.remove = 'hidden';
    object.style.display = 'flex';
}

function HideObject(object){
    object.classList.add('hidden');
}