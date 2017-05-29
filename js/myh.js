function show_gameattr_gametime(){
    activate_left_nav("gametime");
    $("#explore-container").html("<h2>HELLO WORLD to WINRATE</h2>");
}


/* TODO
    在index.html中<ul id="left-nav-gameattr">下参考现有的<li>添加自己的子页

    ```
    $("#left-nav-${COLUMN_NAME} #left-nav-${ENTRY_NAME}").click(function(){
        activate_left_nav("${ENTRY_NAME}");
        var data = Array(); //把准备好的數據直接放在这里或js的其他地方

        var html="HELLO WORLD";
        $("#explore-container").html(html);
    });
    ```

${COLUMN_NAME}为"gameattr"
${ENTRY_NAME} 为对应分析的東西,自己随便改名字
*/

var show_first_gameattr = show_gameattr_gametime;
$("#left-nav-gameattr #left-nav-gametime").click(show_first_gameattr);


$("#nav-gameattr").click(function(){
    reset_active_nav();
    $("#nav-gameattr").addClass("active");
    $("#left-nav-gameattr").show();
    show_first_gameattr();
});

