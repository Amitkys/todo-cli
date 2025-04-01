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
exports.getDb = getDb;
exports.saveDb = saveDb;
const lowdb_1 = require("lowdb");
const node_1 = require("lowdb/node");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// ✅ Store db.json inside the utils folder
const filePath = path_1.default.join(__dirname, "db.json");
// ✅ Ensure the utils folder and db.json file exist
if (!fs_1.default.existsSync(filePath)) {
    fs_1.default.writeFileSync(filePath, JSON.stringify({ tasks: [] }, null, 2));
}
const adapter = new node_1.JSONFile(filePath);
const db = new lowdb_1.Low(adapter, { tasks: [] });
// Read the database
function getDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.read();
        return db.data;
    });
}
// Save the database
function saveDb(data) {
    return __awaiter(this, void 0, void 0, function* () {
        db.data = data;
        yield db.write();
    });
}
