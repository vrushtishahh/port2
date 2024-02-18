function toggleContent(contentType) {
    if (contentType === 'hi') {
      document.getElementById('hiContent').style.display = 'block';
      document.getElementById('helloContent').style.display = 'none';
    } else if (contentType === 'hello') {
      document.getElementById('helloContent').style.display = 'block';
      document.getElementById('hiContent').style.display = 'none';
    }
  }
  
    const navLinks = document.querySelectorAll(".link-style");
    const nav = document.getElementById('nav');

function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        const offset = nav.offsetHeight;  // Offset for fixed navigation bar

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

window.addEventListener('scroll', function () {
    if (window.scrollY > nav.offsetTop + nav.offsetHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
