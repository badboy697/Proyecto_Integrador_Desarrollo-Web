window.addEventListener('load', function() {
  var loginButton = document.getElementById('loginButton');
  var loginPopup = document.getElementById('loginPopup');
  var closeLoginPopup = document.querySelector('#loginPopup .close');
  var registerLink = document.getElementById('registerLink');
  var registerPopup = document.getElementById('registerPopup');
  var closeRegisterPopup = document.querySelector('#registerPopup .close');
  
  loginButton.addEventListener('click', function() {
    loginPopup.style.display = 'block';
  });
  
  closeLoginPopup.addEventListener('click', function() {
    loginPopup.style.display = 'none';
  });
  
  registerLink.addEventListener('click', function() {
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'block';
  });
  
  closeRegisterPopup.addEventListener('click', function() {
    registerPopup.style.display = 'none';
  });
});