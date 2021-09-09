$(() => {
    const path = location.pathname;
    $("#menu li a").removeClass("active");
    $(`a[href='${path}']`).addClass("active");
    $.load = (url) =>{
        $.get(url, function (yanit) {
            var section = (/<section[^>]*>[\s\S]*<\/section>/gi).exec(yanit)[0];
            $("section").html(section);
        });
        $("#menu li a").removeClass("active");
        $(`a[href='${url}']`).addClass("active");
    }
    $("a[data-action='true']").click(function () {
        var link = $(this).attr('href');
        $("#menu li a").removeClass("active");
        $(this).addClass("active");
        $.load(link)
        history.pushState(location.pathname, '', link)
        return false;
    })
    window.addEventListener('popstate', function (event) {
        $.load(location.pathname)
    });
   
})
