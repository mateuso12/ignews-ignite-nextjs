"use strict";
exports.__esModule = true;
exports.SignInButton = void 0;
var fa_1 = require("react-icons/fa");
var fi_1 = require("react-icons/fi");
var client_1 = require("next-auth/client");
var styles_module_scss_1 = require("./styles.module.scss");
function SignInButton() {
    var session = client_1.useSession()[0];
    return session ? (React.createElement("button", { type: "button", className: styles_module_scss_1["default"].signInButton, onClick: function () { return client_1.signOut(); } },
        React.createElement(fa_1.FaGithub, { color: "#04d361" }),
        session.user.name,
        React.createElement(fi_1.FiX, { color: "#737380", className: styles_module_scss_1["default"].closeIcon }))) : (React.createElement("button", { type: "button", className: styles_module_scss_1["default"].signInButton, onClick: function () { return client_1.signIn("github"); } },
        React.createElement(fa_1.FaGithub, { color: "#eba417" }),
        "Entrar com Github"));
}
exports.SignInButton = SignInButton;
