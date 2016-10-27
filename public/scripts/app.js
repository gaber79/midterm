$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  $.get('/api/users').then(users => {
    const dom = users.map(user => {
      // return $("<div/>").html(user.username);
      return $("<p>" + user.username + "</p>");

    });

    $('body').append(dom);
  });
  $.get('/api/comments').then(comments => {
    const dom = comments.map(user => {
      // return $("<div/>").html(user.username);
      return $("<p>" + user.comment + "</p>");

    });

    $('p').append(dom);
  });

  $.get('/api/resources').then(resources => {
    const dom = resources.map(user => {
      // return $("<div/>").html(user.username);
      return $("<a>" + user.urls + ">");

    });

    $('img').append(dom);
  });
  $.get('/api/user_activity').then(user_activity => {
    const dom = user_activity.map(user => {
      // return $("<div/>").html(user.username);
      // return $("<p>" + user.likes + "</p>");
      return $("<p>" + user.ratings + "</p>");

    });

    $('p .rating').append(dom);
  });
});
