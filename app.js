document.addEventListener('DOMContentLoaded', function(e){
    document.addEventListener('click', function(e) {
        if(e.target.closest('.nav-search')) {
            document.querySelector('.search-bar').classList.add('search-bar-active')
        } else if (event.target.closest('.search-cancel')) {
            document.querySelector('.search-bar').classList.remove('search-bar-active')
        }
    })

    document.addEventListener('click',function(event) {
        const formElement = document.querySelector('.form')
        if (event.target.closest('.nav-user, .already-account')) {
            formElement.classList.add('login-active')
            formElement.classList.remove('sign-up-active')
        }

        if (event.target.closest('.nav-user, .already-account')) {
            formElement.classList.remove('login-active')
            formElement.classList.add('sign-up-active')
        }
        if (event.target.closest('.form-cancel')) {
            formElement.classList.remove('login-active')
            formElement.classList.remove('sign-up-active')
        }
    })
})