"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// routes
const post_routes_1 = __importDefault(require("@routes/post-routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// 서버 초기화
function init() {
    // routers
    app.use('/post', post_routes_1.default);
    app.listen(8080, () => console.log('server start port 8080'));
}
init();
