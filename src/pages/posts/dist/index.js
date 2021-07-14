"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var styles_module_scss_1 = require("./styles.module.scss");
function Posts() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Posts | Ignews")),
        React.createElement("main", { className: styles_module_scss_1["default"].container },
            React.createElement("div", { className: styles_module_scss_1["default"].posts },
                React.createElement("a", null,
                    React.createElement("time", null, "13 de Julho de 2021"),
                    React.createElement("strong", null, "Criando algum post"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam eveniet expedita laboriosam, eos perferendis?")),
                React.createElement("a", null,
                    React.createElement("time", null, "13 de Julho de 2021"),
                    React.createElement("strong", null, "Criando algum post"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam eveniet expedita laboriosam, eos perferendis?")),
                React.createElement("a", null,
                    React.createElement("time", null, "13 de Julho de 2021"),
                    React.createElement("strong", null, "Criando algum post"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam eveniet expedita laboriosam, eos perferendis?"))))));
}
exports["default"] = Posts;
