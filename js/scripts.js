function newItem() {

  //1.Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
      let list = $("#list");
      list.append(li);
  }

  //2.Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass('stike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });
  
  //3(I).Adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //3(II). Adding CLASS DELETE (DISPLAY: NONE) from the css
  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }
  
  //4.Reordering the items
  $('#list').sortable();
}