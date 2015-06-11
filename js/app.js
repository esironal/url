(function() {

  window.addEventListener('DOMContentLoaded', function() {
    var string = document.querySelector('textarea'),
        decode = document.querySelector('#decode'),
        encode = document.querySelector('#encode');

    decode.addEventListener('click', function(e) {
      string.value = decodeURIComponent(string.value);

      e.preventDefault();
    });

    encode.addEventListener('click', function(e) {
      string.value = encodeURIComponent(string.value);

      e.preventDefault();
    });

    string.addEventListener('paste', function() {
      setTimeout(function() {
        decode.focus();
      }, 50);
    });
  });

})();
