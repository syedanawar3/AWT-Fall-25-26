import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateUser } from "./entities/createuser.entity";
import { CreateUserController } from "./createuser.controller";
import { CreateUserService } from "./createuser.service";


@Module({
  imports: [TypeOrmModule.forFeature([CreateUser])],
  controllers: [CreateUserController],
  providers: [CreateUserService],
    exports: [CreateUserService],
})
export class CreateUserModule {}
