function getContactData (){
    var name = $('#contact-name').val();
    // var phone = $('#contact-phone').val();
    var $phone = $('#contact-phone').val();
    // console.log(name, $phone);
    addContactData(name, $phone);

    $('#contact-name').val('');
    $('#contact-phone').val('');
    // $phone.val=('');

}

var count = 0;

var template = '<div class="row">' + 
                    '<div class="col offset-s3 s6">' +
                        '<div class="card #880e4f pink darken-4">' +
                            '<div class="card-content">' +
                                '<h3 class="white-text">__name__</h3>' +
                                '<span class="white-text">__phone__</span>' +
                                '<a class="waves-effect waves-light btn right #f48fb1 pink lighten-3t" onClick="deleteContact()"><i class="material-icons">delete</i></a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'

function addContactData (name, $phone){
    count++;
    var finalTemplate = '';
    finalTemplate = template.replace('__name__', name)
    .replace('__phone__',$phone);

    $('main').append(finalTemplate);
    $('h5').html('Contactos: ' + count);
    swal("Good job!", "Ya tienes otro amigo", "success");
}

$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);
  });

  function deleteContact(){
      count--;
      var item = $(event.currentTarget);
      var card = item.parent();
      var colCard = card.parent();
      var rowCard = colCard.parent();
      rowCard.remove();
      $('h5').html('Contactos: ' + count);

    //   console.log('borrado');
    //   $(this).remove();
  }