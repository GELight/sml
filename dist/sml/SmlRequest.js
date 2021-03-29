"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlDocument_1 = __importDefault(require("./SmlDocument"));
class SmlRequest {
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new Response(`Test\nEnd`, {
                headers: {
                    "Content-Type": "text/plain"
                },
                status: 200
            });
            const responseText = yield response.text();
            console.log("responseText >>>", responseText);
            return SmlDocument_1.default.parse(responseText);
        });
    }
    static post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "post"
            });
            const responseText = yield response.text();
            return SmlDocument_1.default.parse(responseText);
        });
    }
    static delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "delete"
            });
            const responseText = yield response.text();
            return SmlDocument_1.default.parse(responseText);
        });
    }
    static put(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "put"
            });
            const responseText = yield response.text();
            return SmlDocument_1.default.parse(responseText);
        });
    }
    static patch(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "patch"
            });
            const responseText = yield response.text();
            return SmlDocument_1.default.parse(responseText);
        });
    }
}
exports.default = SmlRequest;
//# sourceMappingURL=SmlRequest.js.map