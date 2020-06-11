$(function() {
    $('#js-shopping-list-form').submit(function(event) {
      // this stops the default form submission behavior
      event.preventDefault();
      const newUserItem = $(this).find('#shopping-list-entry');
      $('ul').append(
        `<li>
        <span class="shopping-item">${newUserItem.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>`
      );
      newUserItem.val('');
    });  
    
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
  })