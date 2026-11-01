import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { CreateUser } from "./entities/createuser.entity";
import { CreateUserDto, UpdateCreateUserDto } from "./dto/createuser.dto";

@Injectable()
export class CreateUserService {
constructor
(@InjectRepository(CreateUser)
private readonly createUserRepository: Repository<CreateUser>,
){}

async getCreateUsers(){

    try{
        const users = await this.createUserRepository.find();
        return users    ;
    }
    catch (error){
        throw error;
    }
}

async createCreateUser(dto: CreateUserDto){
    try{
        if(!dto.password.includes("@")){
            throw new BadRequestException("The password must contain @");
        }
        const responce = await this.createUserRepository.create(dto);
        return await this.createUserRepository.save(responce);
    }
    catch(error){
        throw error;
    }
}

async updateCreateUser (id: string, dto: UpdateCreateUserDto){
    try{
        console.log("id",id);
        if(!id)
        {
            throw new NotFoundException("User not found");
        }
        const user= await this.createUserRepository.findOne(
            {
                where: {
                    id:id,
                },
            }        );
            if(!user){
                throw new NotFoundException("User not found");
            }
            Object.assign(user,dto);
            const{id: uid, ...rest } =user  ;
            return await this.createUserRepository.update({id:id}, rest);
    } catch (error){
        throw error;
    }
}

async deleteCreateUser(id: string){
    try{
        const user = await this.createUserRepository.findOne({
            where: {
                id:id,
    },
        });
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return await this.createUserRepository.delete({ id:id });
    } catch (error) {
        throw error;
    }
}
}