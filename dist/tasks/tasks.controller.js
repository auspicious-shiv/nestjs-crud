"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const task_status_enum_1 = require("./task-status.enum");
const create_task_dto_1 = require("./dto/create-task.dto");
const get_task_filter_dto_1 = require("./dto/get-task-filter.dto");
const task_status_validaton_pipe_1 = require("./pipes/task-status-validaton.pipe");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../auth/user.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
let TasksController = class TasksController {
    constructor(taskservice) {
        this.taskservice = taskservice;
    }
    getAllTask(filterDto, user) {
        return this.taskservice.getAllTask(filterDto, user);
    }
    createTask(createTaskdto, user) {
        return this.taskservice.createTask(createTaskdto, user);
    }
    getTaskById(id, user) {
        return this.taskservice.getTaskById(id, user);
    }
    deleteTaskById(id, user) {
        return this.taskservice.deleteTask(id, user);
    }
    updateTaskStatus(id, status, user) {
        return this.taskservice.updateTaskStatus(id, status, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_task_filter_dto_1.GetTaskFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getAllTask", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTaskById", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTaskById", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('status', task_status_validaton_pipe_1.TaskStatusValidationPipe)),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTaskStatus", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map