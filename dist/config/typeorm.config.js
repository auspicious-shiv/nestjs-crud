"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const task_entity_1 = require("../tasks/task.entity");
const user_entity_1 = require("../auth/user.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    url: 'postgres://xemnygpk:zy4VDbmHazse5EyHRCyOVO9JiXKCAbr1@drona.db.elephantsql.com:5432/xemnygpk',
    entities: [task_entity_1.Task, user_entity_1.User],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map