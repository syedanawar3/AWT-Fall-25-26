import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from "@nestjs/common";
import { CreateUserService } from "./createuser.service";
import { CreateUserDto, UpdateCreateUserDto } from "./dto/createuser.dto";

@Controller("createusers")
export class CreateUserController {

    constructor(private readonly createUserService: CreateUserService) {}

    @Get()
    async getCreateUsers() {
        return await this.createUserService.getCreateUsers();
    }

    @Post()
        async createCreateUser(@Body(ValidationPipe) dto: CreateUserDto) {
            return await this.createUserService.createCreateUser(dto);
    }
    
    @Patch(":id")
        async updateCreateUser(@Param("id") id: string , @Body(ValidationPipe) dto: UpdateCreateUserDto) {    
            return await this.createUserService.updateCreateUser(id, dto);
    }

    @Delete(":id")
        async deleteCreateUser(@Param("id") id: string) {
            return await this.createUserService.deleteCreateUser(id);
    }

}