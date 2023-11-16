"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const firestore = db_1.default.firestore();
const PostController = {
    // 글 작성
    async createPost(req, res) {
        try {
            const data = req.body;
            await firestore.collection('posts').doc().set(data);
            res.send('새 글이 작성되었습니다.');
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    },
};
exports.default = PostController;
