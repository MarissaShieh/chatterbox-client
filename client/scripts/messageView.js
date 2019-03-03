var MessageView = {

  render: _.template(`
      <div class="chat">
        <button class="username" type = "button" onclick="Friends.toggleStatus(this.innerHTML)"> <%-username%> </button>
        <div class="text"> <%-text%> </div>
        <div class="roomname"> <%-roomname%> </div>
      </div>
    `)                                              
};
