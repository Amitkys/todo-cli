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
exports.deleteAllTasks = deleteAllTasks;
const db_1 = require("../utils/db");
const chalk_1 = __importDefault(require("chalk"));
function deleteAllTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.getDb)();
        if (db.tasks.length === 0) {
            console.log(chalk_1.default.yellow("No tasks to delete!"));
            return;
        }
        db.tasks = []; // Clear all tasks
        yield (0, db_1.saveDb)(db);
        console.log(chalk_1.default.red("All tasks have been deleted."));
    });
}
