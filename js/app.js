(function() {

  window.addEventListener('DOMContentLoaded', function() {
    var string = document.querySelector('textarea'),
        decode = document.querySelector('#decode'),
        encode = document.querySelector('#encode');

    decode.addEventListener('click', function(e) {
      string.value = decodeURIComponent(string.value);
      document.title = decodeURIComponent(document.title);

      e.preventDefault();
    });

    encode.addEventListener('click', function(e) {
      string.value = encodeURIComponent(string.value);
      document.title = encodeURIComponent(document.title);

      e.preventDefault();
    });

    string.addEventListener('paste', function() {
      setTimeout(function() {
        decode.focus();
      }, 50);
    });
  });

})();
