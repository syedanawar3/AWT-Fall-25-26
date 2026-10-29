import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { TextService } from "./text.service";
import { CreateTextDto, UpdateTextDto } from "./dto/text.dto";

@Controller("texts")
export class TextController {

    constructor(private readonly textService: TextService) {}

    @Get()
    async getTexts() {
        return await this.textService.getTexts();
    }

    @Get(":id")
        async getTextById(@Param("id", ParseIntPipe) id: number) {
            return await this.textService.getTextById(id);
    }

    @Post()
    //  async createText(@Body(ValidationPipe) dto: any)
        async createText(@Body(ValidationPipe) dto: CreateTextDto) {
            return await this.textService.createText(dto);
    }

    // ParseIntPipe turns "5" from the URL into the number 5, and returns 400 for "abc"
    @Patch(":id")
        async updateText(@Param("id", ParseIntPipe) id: number , @Body(ValidationPipe) dto: UpdateTextDto) {
            return await this.textService.updateText(id, dto);
    }

    @Delete(":id")
        async deleteText(@Param("id", ParseIntPipe) id: number) {
            return await this.textService.deleteText(id);
    }

}
