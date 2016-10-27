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
      return $("<div/>").html(user.username);
    });

    $('body').append(dom);
  });
});
