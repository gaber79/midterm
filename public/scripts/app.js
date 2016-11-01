$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  // ---------------------------TOGGLE COMMENTS TEXT AREA---------------------------------

  // $('button').on("click" ,function(event){
  //   $('textarea').slideToggle();
  //   $('textarea').trigger("focus");
  //   return false;
  // });

  // $.get('/api/users').then(users => {
  //   const dom = users.map(user => {
  //     // return $("<div/>").html(user.username);
  //     return $("<p>" + user.username + "</p>");
  //   });
  //   //$('body').append(dom);
  // });

//---------------------LOAD COMMENTS ON PAGE----------------------------------------------

    // $('body').append(dom);
  // });


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

  $.get('/api/resources').then(resources => {
    let containerTag = $('<section>').addClass('resource-container');

    const dom = resources.forEach(resource => {
      // console.log(resource)
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


//COMMENT BUTTON
  $('section.resource-container').on('submit', 'form', function (event) {
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


//THIS IS WHAT THE COMMENTS CODE IS GENERATING
  // <section class="resource-container">
  //   <article>
  //     <a href="http://google.ca">http://google.ca</a>
  //     <ul>
  //       <li>Comment 1</li>
  //       <li>Comment 2</li>
  //     </ul>
  //   </article>
  // </section>



// ---------------------SEARCH PAGE AND HIDE UNLIKE SEARCHTERM---------------------------
  // $('.search-button').on("click" ,function(event){
  //   //hide function
  //   let searchTerm = $('input#search-bar')
  //   let tag = $('<a>').attr('href')
  //   let section =
  //   //  knex
  //   //   .select("*")
  //   //   .from("resources")
  //   //   // .where('urls', 'like', '%'+searchTerm+'%')
  //   //   .where('urls', 'like', `%${searchTerm}%`)
  //   //   .orWhere('type', 'like', `%${searchTerm}%`)
  //   //   .orWhere('topic', 'like', `%${searchTerm}%`)
  //   //   .then((results) => {
  //   //     results.hide("fast");
  //   //     // res.redirect("search-results");
  //   // });

  //   if(searchTerm){}

  // });

// --------------------DIDN'T GO WITH THIS APPROACH--------------------



  // $.get('/api/activity').then(activity => {
  //   const dom = activity.map(user => {
  //     // return $("<div/>").html(user.username);
  //     // return $("<p>" + user.likes + "</p>");
  //     return $("<p>" + user.ratings + "</p>");
  function renderPostsFromDB() {
    $.ajax ({

      url: "/comments",
      method: "get",
      success: function(data) {
        console.log(data);
        renderResource(data);
      }
    });
  }

  renderResource();

    //$('p .rating').append(dom);
//   });
// });


});
