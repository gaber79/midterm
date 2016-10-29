$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  $('button').on("click" ,function(event){
    $('textarea').slideToggle();
    $('textarea').trigger("focus");
    return false;
  });

  $.get('/api/users').then(users => {
    const dom = users.map(user => {
      // return $("<div/>").html(user.username);
      return $("<p>" + user.username + "</p>");

    });

    // $('body').append(dom);
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

  $.get('/api/resources').then(resources => {
    let containerTag = $('<section>').addClass('resource-container');

    const dom = resources.forEach(resource => {
        let resourceTag = $("<article>");

        resourceTag.append($('<a href="' + resource.urls + '">' + resource.urls + '</a>'));
        let commentTag = resourceTag.append($('<ul>'));

        $.get('/api/resources/' + resource.resourcesid + '/comments').then(comments => {
          const dom = comments.forEach(comment => {
            // return $("<div/>").html(user.username);
            commentTag.append($("<li>" + comment.comment + "</li>"));

          });
        });

      containerTag.prepend(resourceTag);

    });

    $('body').append(containerTag);

    //$('img').append(dom);
  });
  $.get('/api/activity').then(activity => {
    const dom = activity.map(user => {
      // return $("<div/>").html(user.username);
      // return $("<p>" + user.likes + "</p>");
      return $("<p>" + user.ratings + "</p>");

    });

    //$('p .rating').append(dom);
  });
});
