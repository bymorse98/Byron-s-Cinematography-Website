const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
                entry.target.classList.add('show');
        } else {
                entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
const hiddenElementsLeft2 = document.querySelectorAll('.hiddenLeft2');
const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
const hiddenElementsHidden = document.querySelectorAll('.hidden');
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsLeft2.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsHidden.forEach((el) => observer.observe(el));
