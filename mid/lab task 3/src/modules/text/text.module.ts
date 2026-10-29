import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Text } from "./entities/text.entity";
import { TextController } from "./text.controller";
import { TextService } from "./text.service";


@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  controllers: [TextController],
  providers: [TextService],
    exports: [TextService],
})
export class TextModule {}