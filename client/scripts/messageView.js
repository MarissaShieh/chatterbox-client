var MessageView = {

  render: _.template(`
      <div class="chat">
        <button class="username notFriend" type = "button" onclick="Friends.toggleStatus(this, this.innerHTML)"> <%-username%> </button>
        <div class="text"> <%-text%> </div>
        <div class="roomname"> <%-roomname%> </div>
      </div>
    `)                                              
};
