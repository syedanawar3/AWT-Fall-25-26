import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Text } from "./entities/text.entity";
import { CreateTextDto, UpdateTextDto } from "./dto/text.dto";

@Injectable()
export class TextService {
constructor
(@InjectRepository(Text)
private readonly textRepository: Repository<Text>,
){}

async getTexts(){

    try{
        const texts = await this.textRepository.find();
        return texts    ;
    }
    catch (error){
        throw error;
    }
}

async getTextById(id: number){
    try{
        const text = await this.textRepository.findOne({
            where: {
                id:id,
            },
        });
        if (!text) {
            throw new NotFoundException("Text not found");
        }
        return text;
    } catch (error) {
        throw error;
    }
}

async createText(dto: CreateTextDto){
    try{
        if(!dto.password.includes("@")){
            throw new BadRequestException("The password must contain @");
        }
        // id is given by the client, so stop duplicates
        // (otherwise save() would silently overwrite the old row)
        const exists = await this.textRepository.findOne({
            where: {
                id: dto.id,
            },
        });
        if (exists) {
            throw new ConflictException(`Text with id ${dto.id} already exists`);
        }
        const responce = this.textRepository.create(dto);
        return await this.textRepository.save(responce);
    }
    catch(error){
        throw error;
    }
}

async updateText (id: number, dto: UpdateTextDto){
    try{
        console.log("id",id);
        if(!id)
        {
            throw new NotFoundException("Text not found");
        }
        const text= await this.textRepository.findOne(
            {
                where: {
                    id:id,
                },
            }        );
            if(!text){
                throw new NotFoundException("Text not found");
            }
            Object.assign(text,dto);
            text.updated_at = new Date();
            const{id: uid, ...rest } =text  ;
            await this.textRepository.update({id:id}, rest);
            return await this.textRepository.findOne({ where: { id:id } });
    } catch (error){
        throw error;
    }
}

async deleteText(id: number){
    try{
        const text = await this.textRepository.findOne({
            where: {
                id:id,
    },
        });
        if (!text) {
            throw new NotFoundException("Text not found");
        }
        return await this.textRepository.delete({ id:id });
    } catch (error) {
        throw error;
    }
}
}
