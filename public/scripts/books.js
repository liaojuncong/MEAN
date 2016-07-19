$(".close").click(function() {
    if (confirm("确定删除？")) {
        var id = $(this).data("id");
        var row = $(this).parents(".booklist");
        $.ajax({
            url: "/api/books/" + id,
            method: "delete",
        }).done(function(data) {
            console.log(data);
            row.fadeOut();
        });
    }
});