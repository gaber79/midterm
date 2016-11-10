$(() => {

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
    console.log("Got API data.")
    const dom = resources.forEach(resource => {
      // console.log(resource)
        let resourceTag = $("<article>").addClass('each-resource');

        resourceTag.append($('<img class="logo" src="http://clipartix.com/wp-content/uploads/2016/05/Cartoon-lightning-bolt-clipart.png" width="80" height="80">'));
        resourceTag.append($('<p class="type">' + resource.topic + '</p>'))
        resourceTag.append($('<a class="link "href="' + resource.urls + '">' + resource.urls + '</a>'));
        resourceTag.append($('<p class="type">' + resource.type + '</p>'))
        resourceTag.append($('<input class="counting" id="inputcounter" type="text" value="0"><a id="btn" href="#"><button class="counter">Like</button></a>'))
        resourceTag.append($('<span class="star-rating"><input type="radio" name="rating" value="1"><i></i><input type="radio" name="rating" value="2"><i></i><input type="radio" name="rating" value="3"><i></i><input type="radio" name="rating" value="4"><i></i><input type="radio" name="rating" value="5"><i></i></span><strong class="choice">Choose a rating</strong>'))
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

    $('div.row').append(containerTag);

    // for like clicks
    document.getElementById('btn').onclick = function() {
      var input = document.getElementById('inputcounter');
      input.value = parseInt(input.value) + 1;
    };

    });
  }

  // comment
  $('div.row').on('submit', 'form', function (event) {
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

});



