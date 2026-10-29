import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class CreateTextDto{
    // ID must be sent as a JSON number in Postman, e.g. "id": 1 (not "id": "1")
    // maxDecimalPlaces: 0 blocks values like 1.5, because the DB column is an integer
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: "ID must be a number" })
    @IsNotEmpty({ message: "ID is mandatory" })
    id!:number;

    @IsString()
    @IsNotEmpty({message:"Username is mandatory"})
    name!:string;

    @IsEmail()
    @IsNotEmpty({message: "Email is mandatory"})
    email!:string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,{message:'Password must be match with the foramat'})
    password!:string;


    @IsOptional()
    created_at?:Date=new Date()

    @IsOptional()
    updated_at?:Date=new Date()

}

export class UpdateTextDto{
    // No id here: the id comes from the URL, e.g. PATCH /texts/1
    @IsString()
    @IsNotEmpty({message:"Username is mandatory"})
    name!:string;

    @IsEmail()
    @IsNotEmpty({message: "Email is mandatory"})
    email!:string;

    @IsString()
    @IsNotEmpty()
    password!:string;

    @IsOptional()
    created_at?:Date=new Date()

    @IsOptional()
    updated_at?:Date=new Date()

}
