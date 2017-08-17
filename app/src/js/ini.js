;(function( $ ) {

    "use strict";

	$(document).ready( function(){

		console.log("Everything OK");

	
		$('#nav-mobile').on("click", function(){
			if($('header nav').hasClass('active')){
				$(this).find('span').addClass('glyphicon-menu-hamburger').removeClass('glyphicon-remove');
				$('header nav').removeClass('active');

			}else{
				$(this).find('span').removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
				$('header nav').addClass('active');
			}
		});

		var config = {
    		apiKey: "AIzaSyDw0MDU8BqKPKkid3a7MMSIRRQUkDq2fvU",
    		authDomain: "accarioca-88ab8.firebaseapp.com",
    		databaseURL: "https://accarioca-88ab8.firebaseio.com",
    		projectId: "accarioca-88ab8",
    		storageBucket: "accarioca-88ab8.appspot.com",
    		messagingSenderId: "274192660025"
  		};
		firebase.initializeApp(config);

  		$('#authEmailPassButton').on('click', function(){
  			var email = $('#emailInput').val();
			var password = $('#passwordInput').val();
			console.log(email+ " - " +password);
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then(function(result){
				//console.log(result);
				console.log("Autenticado");
			})
			.catch(function(error) {
			  // Handle Errors here.
			  console.log("Não autenticado");
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});

  		});

  		$('#authEmailPassLogout').on("click",function(){
  			firebase.auth().signOut().then(function() {
			  console.log("Logout com sucesso");
			}, function(error) {
			  console.log("Erro ao efetuar logout");
			});
  		});

  		$('#authEmailPassGetUser').on("click",function(){
  			var user = firebase.auth().currentUser;
			var name, email, photoUrl, uid;

			if (user != null) {
			  name = user.displayName;
			  email = user.email;
			  photoUrl = user.photoURL;
			  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
			                   // this value to authenticate with your backend server, if
			                   // you have one. Use User.getToken() instead.
			}	
			alert(email);
  		})
  			



	});
})(jQuery); 