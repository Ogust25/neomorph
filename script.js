document.querySelector(".scroll").oninput = function() {
    this.style.background = 'linear-gradient(to right, gray 0%, gray ' + this.value + '%, #EBECF0 ' + this.value + '%, #EBECF0 100%)'
  };