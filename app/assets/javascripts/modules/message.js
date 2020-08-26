$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="mainmes" data-message-id=${message.id}>
          <div class="mainmes__arrive">
            <div class="mainmes__arrive--name">
              ${message.user_name}
            </div>
            <div class="mainmes__arrive--date">
              ${message.created_at}
            </div>
          </div>
          <div class="mainmes__nmes">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="mainmes" data-message-id=${message.id}>
        <div class="mainmes__arrive">
          <div class="mainmes__arrive--name">
            ${message.user_name}
          </div>
          <div class="mainmes__arrive--date">
            ${message.created_at}
          </div>
        </div>
        <div class="mainmes__nmes">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('#form-cfooter').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.cmiddle').append(html);
      $('#form-cfooter')[0].reset();
      $('.cmiddle').animate({ scrollTop: $('.cmiddle')[0].scrollHeight});  
      $('.cfooter__fobtn').prop("disabled", false);
    })
    .fail(function() {
      alert('メッセージを送信できません');
      $('.cfooter').prop("disabled", false);
    });
  });
});
