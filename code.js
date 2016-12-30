  window.onload = function(){
    // Grab Div
    var div = document.getElementById('text');
    getText();
    div.innerHTML = getText();
    console.log(div)

    // On Keypress, add that key to div
    document.addEventListener('keydown',function(e){
      e = e || window.event;
      var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;
      if (charCode){
        // New line if enter key is pressed
        if(e.key == 'Enter') {
        div.innerHTML = div.innerHTML + '<br>';
        return;
        } else if (e.key == 'Meta') {
          return;
        } else if (e.key == 'Control') {
          return;
        } else if (e.key == 'Shift') {
          return;
        } else if (e.key == 'Alt') {
          return;
        } else if (e.key == 'Tab') {
          return;
        } else if (e.key == 'CapsLock') {
          return;
        } else if (e.key == 'Backspace') {
          div.innerHTML = div.innerHTML.substring(0, div.innerHTML.length);
          return;
        }
        // Set div to what's already there plus new key
        div.innerHTML = div.innerHTML + e.key;
        // Set localStorage to what's in the div
        setText(div.innerHTML)
      }
    });

    // Delete All text in div
    var button = document.getElementById("button");
    button.addEventListener('click', function() {
      div.innerHTML = '';
    });

    // Get previous text from localStorage
    function getText(){
      var text = '';
      var localStorageText = localStorage.getItem('text');

      if (!localStorageText) {
        localStorage.setItem('text', text);
        return text;
      }
      return localStorageText;
    }

    // Sets localStorage Time to what's in the div
    function setText(input) {
      localStorage.setItem('text', input)
    }
}