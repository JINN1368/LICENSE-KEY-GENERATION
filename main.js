function generateKey() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var key = '';
  
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    key += '-';
  
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    key += '-';
  
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    key += '-';
  
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    key += '-';
  
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    return key;
  }
  
  document.querySelector("#generate-key").addEventListener("click", function() {
    var key = generateKey();
    document.querySelector("#key").innerHTML = key;
  });