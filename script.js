alert("\u5982\u9700\u95dc\u9589\u6b64\u7db2\u9801\uff0c\u8acb\u9ede\u64ca\u95dc\u9589\u6309\u9215\uff0c\u5426\u5247\u8cc7\u6599\u5c07\u4e0d\u6703\u5132\u5b58\u3002")
var blockit;
var pokemons = JSON.parse(window.localStorage.getItem("valueL1"))
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
function renderTable (dptext) {
    better_js_empty("tbody");
    better_js_display("show", "#svg");
    better_js_display("show", "#svg-p");
    better_js_text("set", "#svg-p", dptext);
    better_js_css("set", "button", "opacity", "0.6");
    better_js_css("set", "button", "cursor", "not-allowed");
    better_js_data("set", "button", "blockit", "true");
    blockit = true;
    setTimeout(() => {
        better_js_display("hide", "#svg");
        better_js_display("hide", "#svg-p");
        better_js_text("set", "#svg-p", empty);
        better_js_css("set", "button", "opacity", "1");
        better_js_css("set", "button", "cursor", "pointer");
        better_js_data("set", "button", "blockit", "false");
        blockit = false;
        tbodyinjet();
    },
    better_js_random(3000, false, true));
};

better_js_click("#create", () => {
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

better_js_click("delete", () => {
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
        better_js_empty("tbody");
    };
    for(var count = 0;count < pokemons.length;count++) {
        better_js_append("tbody", `
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

better_js_click("#rec", () => {
    if (!blockit) {
        renderTable("\u8f09\u5165\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    };
});

better_js_click("#rerun", () => {
    if (!blockit) {
        rerun();
        order_reset_EZ();
        renderTable("\u91cd\u7f6e\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    };
});

better_js_click("#find_by_index", (idin) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u7de8\u865f\uff1a");
        better_js_display("hide", "td");
        better_js_display("show", "#svg");
        better_js_display("show", "#svg-p");
        better_js_text("set", "#svg-p", "\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            better_js_display("hide", "#svg");
            better_js_display("hide", "#svg-p");
            better_js_text("set", "#svg-p", empty);
            better_js_display("show", `td[data-index = ${idin}]`)
        },
        better_js_random(3000, false, true))
    };
    
});

better_js_click("#find_all", () => {
    if (!blockit) {
        order_reset_EZ();
        better_js_display("hide", "td");
        better_js_display("show", "#svg");
        better_js_display("show", "#svg-p");
        better_js_text("set", "#svg-p", "\u8f09\u5165\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e")
        setTimeout(() => {
            better_js_display("hide", "#svg");
            better_js_display("hide", "#svg-p");
            better_js_text("set", "#svg-p", empty);
            better_js_display("show", "td");
        },
        better_js_random(3000, false, true))
    };
    
});

better_js_click("#find_by_name", (idin) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u540d\u5b50\uff1a");
        better_js_display("hide", "td");
        better_js_display("show", "#svg");
        better_js_display("show", "#svg-p");
        better_js_text("set", "#svg-p", "\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e")
        setTimeout(() => {
            better_js_display("hide", "#svg");
            better_js_display("hide", "#svg-p");
            better_js_text("set", "#svg-p", empty);
            better_js_display("show", `td[data-name = ${idin}]`)
        },
        better_js_random(3000, false, true))
    };
});

better_js_click("#find_by_attr", (idin) => {
    if (!blockit) {
        order_reset_EZ();
        idin = prompt("\u8acb\u8f38\u5165\u5c6c\u6027\uff1a");
        better_js_display("hide", "td");
        better_js_display("show", "#svg");
        better_js_display("show", "#svg-p");
        better_js_text("set", "#svg-p", "\u641c\u5c0b\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
        setTimeout(() => {
            better_js_display("hide", "#svg");
            better_js_display("hide", "#svg-p");
            better_js_text("set", "#svg-p", empty);
            for (var i = 1;i < better_js_children("getlength", "tbody", "tr") + 1;i ++) {
                if (better_js_data("get", `td[data-index = ${i}]`, "attr").indexOf(idin) != -1) {
                    better_js_display("show", `td[data-index = ${i}]`)
                };
            };
        },
        better_js_random(3000, false, true))
    };
});

better_js_click("#order_by_weight_desc", () => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.weight < b.weight ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

better_js_click("#order_by_weight_asc", () => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.weight > b.weight ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

better_js_click("#order_by_height_desc", () => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.height < b.height ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

better_js_click("#order_by_height_asc", () => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.height > b.height ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
});

better_js_click("#order_by_index_desc", () => {
    if (!blockit) {
        pokemons = pokemons.sort(function (a, b) {
            return a.index < b.index ? 1 : -1;
        });
        renderTable("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
    }
    
});

better_js_click("#order_by_index_asc", () => {
    order_reset("\u6392\u5e8f\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u002e\u002e\u002e");
});

better_js_click("#order_reset", () => {
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

better_js_click("#save", () => {
    if (!blockit) {
        window.localStorage.removeItem('valueL2');
        window.localStorage.setItem('valueL1', JSON.stringify(pokemons));
        setTimeout(() => {
//           window.opener = null;
//           window.close();
             window.location.href="close.html";
             window.close();
        }, randomNB(1000, false, true));
        
    };
});
