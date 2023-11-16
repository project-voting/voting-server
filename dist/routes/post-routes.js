"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_1 = __importDefault(require("@controllers/PostController"));
const postRouter = express_1.default.Router();
postRouter.post('/create', PostController_1.default.createPost);
// router.delete('/delete/:postId', PostController.deletePost);
// router.get('/', PostController.getPosts);
exports.default = postRouter;
