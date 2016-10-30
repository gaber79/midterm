$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  // $('button').on("click" ,function(event){
  //   $('textarea').slideToggle();
  //   $('textarea').trigger("focus");
  //   return false;
  // });

  $.get('/api/users').then(users => {
    const dom = users.map(user => {
      // return $("<div/>").html(user.username);
      return $("<p>" + user.username + "</p>");

    });
  $('')

    //$('body').append(dom);
  });

  // <section class="resource-container">
  //   <article>
  //     <a href="http://google.ca">http://google.ca</a>
  //     <ul>
  //       <li>Comment 1</li>
  //       <li>Comment 2</li>
  //     </ul>
  //   </article>
  // </section>
  //<form method = "post" action = "/tweets/">
  // <textarea name="text"></textarea>
  function renderResource () {

  $.get('/api/comments/sortvids').then(resources => {
    let containerTag = $('<section>').addClass('resource-container');

    const dom = resources.forEach(resource => {
      console.log(resource)
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
    //$('img').append(dom);

  $.get('/api/activity').then(activity => {
    const dom = activity.map(user => {
      // return $("<div/>").html(user.username);
      // return $("<p>" + user.likes + "</p>");
      return $("<p>" + user.ratings + "</p>");

    });


    //$('p .rating').append(dom);
  });

  $('body').on('submit', 'form', function (event) {
    event.preventDefault();
    console.log('form values:', $(this).serialize());
    console.log('event values:', JSON.stringify(event));
    let formSubmitted = $(event.target);
    let commentField = $(this.commenttext);
    console.log("THIS IS COMMENT: " + commentField);
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

  $('button.sortvids').on('click', function (event){
    event.preventDefault();
    $.ajax ({
      url: "/api/comments/sortvids",
      method: 'get',
      data: $(this).serialize(),
        success: function (data) {
          renderResource(data);
        }
    });
  });

  function renderPostsFromDB() {
    $.ajax ({

      url: "/comments/sortvids",
      method: "get",
      success: function(data) {
        console.log(data);
        renderResource(data);
      }
    });
  }

  renderResource();

});
