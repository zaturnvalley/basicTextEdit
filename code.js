  window.onload = function(){
    // Grab Div
    var div = document.getElementById('text');
    getText();
    div.innerHTML = getText();
    console.log(div)

    // On Keypress, add that key to div
    document.addEventListener('keypress',function(e){
      e = e || window.event;
      var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;
      if (charCode){
        if(e.key == 'Enter') {
        div.innerHTML = div.innerHTML + '<br>';
        return;
        }
        div.innerHTML = div.innerHTML + e.key;
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