alert("\u5982\u9700\u95dc\u9589\u6b64\u7db2\u9801\uff0c\u8acb\u9ede\u64ca\u95dc\u9589\u6309\u9215\uff0c\u5426\u5247\u8cc7\u6599\u5c07\u4e0d\u6703\u5132\u5b58\u3002")
var blockit;
var pokemons = JSON.parse(window.localStorage.getItem("value"))
if (pokemons == undefined) {
    rerun();
}else{
    console.log(pokemons);
}
renderTable("\u8b80\u53d6\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");

function rerun () {
    pokemons = [
    {
        index: 1,
        name: '妙蛙種子',
        heath: 45,
        height: 0.7,
        weight: 6.9,
        attr: '草,毒',
        class: "種子寶可夢"
    },
    {
        index: 2,
        name: '妙蛙草',
        heath: 60,
        height: 1,
        weight: 13,
        attr: '草,毒',
        class: "種子寶可夢"
    },
    {
        index: 3,
        name: '妙蛙花',
        heath: 80,
        height: 2,
        weight: 100,
        attr: '草,毒',
        class: "種子寶可夢"
    },
    {
        index: 4,
        name: '小火龍',
        heath: 39,
        height: 0.6,
        weight: 8.5,
        attr: '火',
        class: "蜥蜴寶可夢"
    },
    {
        index: 5,
        name: '火恐龍',
        heath: 58,
        height: 1.1,
        weight: 19,
        attr: '火',
        class: "火焰寶可夢"
    },
    {
        index: 6,
        name: "噴火龍",
        heath: 78,
        height: 1.7,
        weight: 90.5,
        attr: "火,飛行",
        class: "火焰寶可夢"
    },
    {
        index: 7,
        name: "傑尼龜",
        heath: 44,
        height: 0.5,
        weight: 9.0,
        attr: "水",
        class: "小龜寶可夢"
    },
    {
        index: 8,
        name: "卡咪龜",
        heath: 59,
        height: 1.0,
        weight: 22.5,
        attr: "水",
        class: "龜寶可夢"
    },
    {
        index: 9,
        name: "水箭龜",
        heath: 79,
        height: 1.6,
        weight: 85.5,
        attr: "水",
        class: "甲殼寶可夢"
    },
    {
        index: 10,
        name: "綠毛蟲",
        heath: 45,
        height: 0.3,
        weight: 2.9,
        attr: "蟲",
        class: "蟲寶寶寶可夢"
    },
    {
        index: 11,
        name: "鐵甲蛹",
        heath: 50,
        height: 0.7,
        weight: 9.9,
        attr: "蟲",
        class: "蛹寶可夢"
    },
    {
        index: 12,
        name: "巴大蝶",
        heath: 60,
        height: 1.1,
        weight: 32.0,
        attr: "蟲,飛行",
        class: "蝴蝶寶可夢"
    }
    ];
}
// 將資料更新到網頁的表格
function renderTable (dptext) { /*#link 1.https://i.imgur.com/3DTKy2e.png
                                  2.https://i.imgur.com/XcGu2cg.png*/
    $("tbody").empty();
    // $("#svg-c").append(`<img id="svg" src="https://raw.githubusercontent.com/iansaf/L1/30da5c3da7d13e19d6bd5c59f93a6889e84aa7fa/loading.svg"></img>`);
    $("#svg").show();
    $("#svg-p").show();
    $("#svg-p").text(dptext);
    // $("#svg").show();
    $("button").css("opacity", "0.6");
    $("button").css("cursor", "not-allowed");
    $("button").attr("data-blockit", "true");
    blockit = true
    setTimeout(() => {
        $("#svg").hide();
        $("#svg-p").hide();
        $("#svg-p").text("")
        $("button").css("opacity", "1");
        $("button").css("cursor", "pointer");
        $("button").attr("data-blockit", "false")
        blockit = false
        tbodyinjet();
    },
    randomNB(3000, false, true, undefined));
};

$('#create').click(() => {
    if (!blockit) {
        order_reset_EZ();
        pokemons.push({
            index: pokemons.length + 1,
            name: prompt("\u6b65\u9a5f\u0031\u002f\u0036\u002e\u8acb\u8f38\u5165\u540d\u5b50\uff1a"),
            heath: prompt("\u6b65\u9a5f\u0032\u002f\u0036\u002e\u8acb\u8f38\u5165\u8840\u91cf\uff1a"),
            weight: prompt("\u6b65\u9a5f\u0033\u002f\u0036\u002e\u8acb\u8f38\u5165\u9ad4\u91cd\u0028\u006b\u0067\u0029\uff1a"),
            height: prompt("\u6b65\u9a5f\u0034\u002f\u0036\u002e\u8acb\u8f38\u5165\u8eab\u9ad8\u0028\u006d\u0029\uff1a"),
            attr: prompt("\u6b65\u9a5f\u0035\u002f\u0036\u002e\u8acb\u8f38\u5165\u5c6c\u6027\u0028\u0065\u0078\u002e\u706b\u3001\u6c34\u002e\u002e\u002e\u0029\uff1a"),
            class: prompt("\u6b65\u9a5f\u0036\u002f\u0036\u002e\u8acb\u8f38\u5165\u5206\u985e\uff1a")
        });
        renderTable("\u65b0\u589e\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    };
});

$("#delete").click(() => {
    if (!blockit) {
        var dla = prompt("\u8acb\u8f38\u5165\u7de8\u865f\uff1a");
        if(confirm("\u78ba\u5b9a\u522a\u9664\uff1f") == true){
            delete_for(dla);
        };
    };
});

function delete_for (dlas) {
    for(var s = 0 ; s < pokemons.length ; s++) {
        if (dlas == pokemons[s].index) {
            pokemons.splice(s, 1);
            renderTable("\u522a\u9664\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        };
    };
};

function tbodyinjet (trues) {
    if (trues) {
        $("tbody").empty()
    };
    for(var count = 0;count < pokemons.length;count++) {
        $("tbody").append(
            `
            <tr data-index="${pokemons[count].index}">
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].index}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].name}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].heath}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].weight}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].height}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].attr}</td>
                <td data-index="${pokemons[count].index}" data-attr="${pokemons[count].attr.split(',')}" data-name"${pokemons[count].name}">${pokemons[count].class}</td>
            </tr>
            `
        );
        
    };
    
};

$("#rec").click(() => {
    if (!blockit) {
        renderTable("\u8f09\u5165\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    };
});

$("#rerun").click(() => {
    if (!blockit) {
        rerun();
        order_reset_EZ();
        renderTable("\u91cd\u7f6e\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    };
    
});

$("#find_by_index").click((idin) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u7de8\u865f\uff1a");
        $("td").hide();
        $("#svg").show();
        $("#svg-p").show();
        $("#svg-p").text("\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            $("#svg").hide();
            $("#svg-p").hide();
            $("#svg-p").text("");
            $(`td[data-index = ${idin}]`).show();
        },
        randomNB(3000, false, true))
    };
    
});

$("#find_all").click(() => {
    if (!blockit) {
        order_reset_EZ();
        $("td").hide();
        $("#svg").show();
        $("#svg-p").show();
        $("#svg-p").text("\u8f09\u5165\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            $("#svg").hide();
            $("#svg-p").hide();
            $("#svg-p").text("");
            $("td").show();
        }, randomNB(3000, false, true))
    };
    
});

$("#find_by_name").click((idin) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u540d\u5b50\uff1a");
        $("td").hide();
        $("#svg").show();
        $("#svg-p").show();
        $("#svg-p").text("\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            $("#svg").hide();
            $("#svg-p").hide();
            $("#svg-p").text("");
            $(`td[data-name = ${idin}]`).show();
        },
        randomNB(3000, false, true))
    };
    
});

$("#find_by_attr").click((idin, aaa) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u5c6c\u6027\uff1a");
        $("td").hide();
        $("#svg").show();
        $("#svg-p").show();
        $("#svg-p").text("\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            $("#svg").hide();
            $("#svg-p").hide();
            $("#svg-p").text("");
            for (var i = 1;i < $("tbody").children("tr").length + 1;i ++) {
                if ($(`td[data-index = ${i}]`).data("attr").indexOf(idin) !== -1) {
                    $(`td[data-index = ${i}]`).show();
                };
            };
            // if ($(`td`).data("attr").indexOf(idin) !== -1) {
            //     $(`td[data-index = ]`).show();
            // };
            
            
            // $(`td[data-attr = ${idin}]`).show();
            // aaa = $("td[]").data();
            // if (aaa.indexOf(idin) !== -1) {
            //     $(`td[data-attr = ${(idin)}]`).show();
            // };
        },
        randomNB(3000, false, true))
    };
});

$("#order_by_weight_desc").click(() => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.weight < b.weight ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

$("#order_by_weight_asc").click(() => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.weight > b.weight ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

$("#order_by_height_desc").click(() => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.height < b.height ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

$("#order_by_height_asc").click(() => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.height > b.height ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
});

$("#order_by_index_desc").click(() => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.index < b.index ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

$("#order_by_index_asc").click(() => {
    order_reset("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
});

$("#order_reset").click(() => {
    order_reset("\u91cd\u7f6e\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
});

function order_reset (ina) {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.index > b.index ? 1 : -1;
        });
        renderTable(ina);
    };
};

function order_reset_EZ () {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.index > b.index ? 1 : -1;
        });
    };
    tbodyinjet(true);
};

$("#save").click(() => {
    if (!blockit) {
        window.localStorage.clear();
        window.localStorage.setItem('value', JSON.stringify(pokemons));
        setTimeout(() => {
//           window.opener = null;
//           window.close();
             window.location.href="/L1/close.html";
             window.close();
        }, randomNB(1000, false, true));
        
    };
});
