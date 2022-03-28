const _store='PageMode';
const _class='light';
const _sun='/Assets/Img/Png/night.png';

function DarkMode() {
  document.body.classList.toggle( _class );
  localStorage.setItem( _store, document.body.classList.contains( _class ) ? 1 : 0 )
  let dm = localStorage.getItem( _store );
  
  if( Number(dm) === 1 ) {
  document.body.classList.add( _class );  
  document.querySelector(".DarkMode").setAttribute("id", "lbtn");
  document.querySelector("#lbtn img").setAttribute("src", "/Assets/Img/Png/sun.png");
} else if( Number(dm) === 0 ) {
  document.querySelector(".DarkMode").removeAttribute("id");
  document.querySelector(".DarkMode").setAttribute("id", "Nbtn");
  document.querySelector("#Nbtn img").setAttribute("src", "/Assets/Img/Png/night.png");
  }
}

(function() {
    function appendHtml(el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
          el.appendChild(div.children[0]);
        }
      }
      var thebutton = "<button class='DarkMode' id='Nbtn' onclick='DarkMode()'><img src='/Assets/Img/Png/night.png' alt=''></button>";
      appendHtml(document.body, thebutton);
    let dm = localStorage.getItem( _store );
    if( Number(dm)==1 ) {
    document.body.classList.add( _class );  
    document.querySelector("#Nbtn").setAttribute("id", "lbtn");
    document.querySelector("#lbtn img").setAttribute("src", "/Assets/Img/Png/sun.png");
  }
})();