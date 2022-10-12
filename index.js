
const mainElem = document.querySelector('main');

const hideableElems = document.getElementsByClassName('hideable');
const profileElem = document.getElementById('profile');
const projectsElem = document.getElementById('projects');
const blogElem = document.getElementById('blog');

const layoutToggler = document.getElementById('layout-toggler');

layoutToggler.addEventListener('change', (evt) => {
    if (evt.target.checked) {
        mainElem.classList.add('alternate');
        profileElem.classList.add('vertical');
        projectsElem.classList.remove('vertical');
        blogElem.classList.remove('vertical');
    } else {
        mainElem.classList.remove('alternate');
        profileElem.classList.remove('vertical');
        projectsElem.classList.add('vertical');
        blogElem.classList.add('vertical');
    }

    for (const hideableElem of hideableElems) {
        hideableElem.classList.toggle('hidden')
    }
});
