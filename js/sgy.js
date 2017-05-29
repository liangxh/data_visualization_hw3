function show_userbehaviour_userreturning(){
    activate_left_nav("userreturning");
    $("#explore-container").html("<h2>HELLO WORLD to USERRETURNING</h2>");
}

$("#left-nav-userbehaviour #left-nav-sessionnum").click(function(){
    //reset_active_nav();
    //$("#nav-userbehaviour").addClass("active");
    //$("#left-nav-userbehaviour").show();
    activate_left_nav("sessionnum");
    var data = Array(); //把准备好的數據直接放在这里或js的其他地方

    var html="HELLO WORLD";
    $("#explore-container").html(html);
});

/* TODO
this is the EMPLATE for new entry page
    在index.html中<ul id="left-nav-behaviour">下参考现有的<li>添加自己的子页

    ```
    $("#left-nav-${COLUMN_NAME} #left-nav-${ENTRY_NAME}").click(function(){
        activate_left_nav("${ENTRY_NAME}");
        var data = Array(); //把准备好的數據直接放在这里或js的其他地方

        var html="HELLO WORLD";
        $("#explore-container").html(html);
    });
    ```

${COLUMN_NAME}为"userbehaviour"
${ENTRY_NAME} 为对应分析的東西,自己随便改名字
*/

var show_first_userbehaviour = show_userbehaviour_userreturning;
$("#left-nav-userbehaviour #left-nav-userreturning").click(show_userbehaviour_userreturning);

$("#nav-userbehaviour").click(function(){
    reset_active_nav();
    $("#nav-userbehaviour").addClass("active");
    $("#left-nav-userbehaviour").show();
    show_first_userbehaviour();
});

