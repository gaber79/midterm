$(() => {

  function renderResource () {

  $.get('/api/users/1').then(resources => {
    let containerTag = $('<section>').addClass('resource-container');
    console.log("this is being printed in resources. ------------=============")
    const dom = resources.forEach(resource => {
        console.log("----------------------->",resource)
        let resourceTag = $("<article>").addClass('each-resource');

        resourceTag.append($('<img class="logo" src="http://clipartix.com/wp-content/uploads/2016/05/Cartoon-lightning-bolt-clipart.png" width="80" height="80">'));
        resourceTag.append($('<p class="type">' + resource.topic + '</p>'))
        resourceTag.append($('<a class="link "href="' + resource.urls + '">' + resource.urls + '</a>'));
        resourceTag.append($('<p class="type">' + resource.type + '</p>'))
        let inputform = $('<form method="post" action="/api/comments/">');
        resourceTag.append(inputform);
        inputform.append($('<input name="resourceid" type="hidden" value="' + resource.resourcesid + '" />'));
        inputform.append($('<textarea name="commenttext" placeholder="join the conversation..."></textarea>'));
        inputform.append($('<input type="submit" value="Comment">'));
        let commentTag = $('<ul>');
        resourceTag.append(commentTag);

        $.get('/api/resources/' + resource.resourcesid + '/comments').then(comments => {
          const dom = comments.reverse().forEach(comment => {
            // return $("<div/>").html(user.username);
            commentTag.append($("<li>" + comment.comment + "</li>"));

          });
        });

      containerTag.prepend(resourceTag);

    });

    $('body').append(containerTag);
    });
  }



  $('body').on('submit', 'form', function (event) {
    event.preventDefault();
    console.log('form values:', $(this).serialize());
    console.log('event values:', JSON.stringify(event));
    let formSubmitted = $(event.target);
    let commentField = $(this.commenttext);
    // console.log("THIS IS COMMENT: " + commentField);
    $.ajax ({
      url: "/api/comments",
      method: 'post',
      data: $(this).serialize(),
      success: function (data) {
        // if(commentField.val() === "") {
        //   alert('No Comment Detected');
        // }
        formSubmitted.parent().children('ul').prepend("<li>" + commentField.val() + "</li>");
        commentField.val("");
        // $('body > ul').html(data);
      },
      error: function (data) {
        alert("No Comment!");
      }
    });
  })

  function renderPostsFromDB() {
    $.ajax ({

      url: "/users/1",
      method: "get",
      success: function(data) {
        // console.log(data);
        renderResource(data);
      }
    });
  }

  renderResource();

});