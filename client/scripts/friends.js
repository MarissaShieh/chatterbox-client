var Friends = {
  toggleStatus: function(element, friendsName) {
    //console.log(element.classList.contains("notFriend"));
    if (element.classList.contains('notFriend')) {
      element.classList.remove('notFriend');
      element.classList.add('friend');
    } else if (element.classList.contains('friend')) {
      element.classList.remove('friend');
      element.classList.add('notFriend');
    }
  }
};
