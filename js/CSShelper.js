var search_input_area = document.querySelector('#after-landing-page');

function ShowObjects(object){
    object.classList.remove = 'hidden';
    object.style.display = 'flex';
}

function HideObject(object){
    return object.classList.add('hidden');
}