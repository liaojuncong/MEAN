$(".close").click(function () {
    if (confirm("确定删除？")) {
        var id = $(this).data("id");
        var row = $(this).parents(".booklist");
        $.ajax({
            url: "/api/books/" + id,
            method: "delete",
        }).done(function (data) {
            console.log(data);
            row.fadeOut();
        });
    }
});

var uploader = new plupload.Uploader({
    runtimes: 'html5,flash,silverlight,html4',
    browse_button: "upload",
    url: '/uploadImg',
    flash_swf_url: '//cdn.bootcss.com/plupload/2.1.9/Moxie.swf',
    silverlight_xap_url: '//cdn.bootcss.com/plupload/2.1.9/Moxie.xap',
    filters: {
        max_file_size: "3mb",
        mime_types: [
            { title: "Image files", extensions: "jpg,gif,png" },
            { title: "Zip files", extensions: "zip" }
        ]
    },
    init: {
        PostInit: function () {
        },
        FilesAdded: function (up, files) {
            plupload.each(files, function (file) {
                uploader.start();
            });
        },
        UploadProgress: function (up, file) {
        },
        Error: function (up, err) {
        }
    }
});
uploader.init();
uploader.bind('FileUploaded', function (upldr, file, object) {
    var data = JSON.parse(object.response);
    console.log(data);
    $("#img").attr("src", data);
    $("#imgvalue").val(data);
});