document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    const divElements = this.querySelectorAll('div');
    divElements.forEach(function(div) {
      div.classList.remove('no-animation');
    });
  });
  