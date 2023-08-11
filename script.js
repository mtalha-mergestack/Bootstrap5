function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
  
  const upButton = document.getElementById('upButton');
          const downButton = document.getElementById('downButton');
          const gallery = document.querySelector('.gallery');
  
          upButton.addEventListener('click', () => {
              if(gallery.scrollTop == 0){
                  gallery.scrollTop = 520
              }
              else gallery.scrollTop -= 200;
              
          });
  
          downButton.addEventListener('click', () => {
              if(gallery.scrollTop == 520){
                  gallery.scrollTop = 0
              }
              else gallery.scrollTop += 200;
              
          });
  
          var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
          var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
              return new bootstrap.Popover(popoverTriggerEl)
          });