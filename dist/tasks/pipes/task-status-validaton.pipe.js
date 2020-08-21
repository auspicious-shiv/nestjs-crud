"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusValidationPipe {
    constructor() {
        this.allowStatus = [
            task_status_enum_1.TaskStatus.DONE,
            task_status_enum_1.TaskStatus.IN_PROGRESS,
            task_status_enum_1.TaskStatus.OPEN,
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowStatus.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validaton.pipe.js.map