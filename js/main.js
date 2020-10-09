$(document).ready(function(){
   $('#select-menu').on('change', function(){
       let name = $('#select-menu option:selected').text();
       let distance = $('#select-menu option:selected').val();
       let price = $('#select-menu option:selected').data('price')
       
       $('#feedback-message').text('You are signing up for a ' + name + ', which consts ' + price + ', to a distance of ' + distance + 'km');
   });
});
