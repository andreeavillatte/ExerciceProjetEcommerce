var valeur = 1;
var price1 = $('.price1').text();
var price2 = $('.price2').text();
var price3 = $('.price3').text();
var price4 = $('.price4').text();
var total = 0;

$(document).ready(function(){
  $('.clicpl').click(function(){
    // clickCount++;
    // $('#result').attr('value',clickCount);
    $('.qte').text(valeur++);
  });
  // prix de la montre Homme
  $('.clicpl1').click(function(){
    $('.price1').text();
    total += Number(price1) ;
    $('.prix').text(total);
    console.log('total: '+total);
    console.log('prix produit : '+price1);
  });
  $('.clicpl2').click(function(){
    $('.price2').text();
    total += Number(price2) ;
    $('.prix').text(total);
    console.log('total: '+total);
    console.log('prix produit : '+price2);
  });
  $('.clicpl3').click(function(){
    $('.price3').text();
    total += Number(price3) ;
    $('.prix').text(total);
    console.log('total: '+total);
    console.log('prix produit : '+price3);
  });
  $('.clicpl4').click(function(){
    $('.price4').text();
    total += Number(price4) ;
    $('.prix').text(total);
    console.log('total: '+total);
    console.log('prix produit : '+price4);
  });
  // On récupère les élements p et span pour récupérer le nom et le prix de chaque montre
  $('.add').click(function () {
    var descript = $( this ).parent().parent().parent().find('p:first').text();
    var descriptPrice = $( this ).parent().parent().parent().find('.price').text();
    var divDescript = '<div class="row d-flex flex-row justify-content-center Seiko1"><div class="col"><hr>' + descript + '</div><div><hr>' + descriptPrice + ' €' + '</div></div>';
    $('.modal-panier').append(divDescript);
    console.log(descript);
    console.log(divDescript);
    console.log(descriptPrice);
  });
  // on reset le panier 
  $('.clickmoins').click(function(){
    $('.modal-panier').empty();
    total= 0;
    valeur= 0;
    $('.qte').text(valeur);
    $('.prix').text(total)
  });
});
