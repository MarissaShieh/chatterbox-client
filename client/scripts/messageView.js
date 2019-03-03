var MessageView = {

  render: _.template(`
      <div class="chat">
        <button class="username notFriend <%-username%>" type = "button" 
        onclick='
          var sameFriend = document.querySelectorAll(".<%-username%>");
          for (var i = 0; i<sameFriend.length; i++) {
            Friends.toggleStatus(sameFriend[i], this.innerHTML);
          }'> <%-username%> </button>
        <div class="text"> <%-text%> </div>
        <div class="roomname"> <%-roomname%> </div>
      </div>
    `)                                              
};