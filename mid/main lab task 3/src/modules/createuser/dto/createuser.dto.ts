import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, IsInt, Min, Max, IsIn, MinLength } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"Name is mandatory"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message: 'Username format is invalid'}) 
    fullname!:string;
    
    @IsEmail()
    @IsNotEmpty()
    email!:string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,{message:'Password must be match with the foramat'})
    password!:string;

    @IsInt({message:"Age must be a whole number"})
    @Min(18,{message:"Age must be at least 18"})
    @Max(60,{message:"Age must be at most 60"})
    age!:number;

    @IsString()
    @Matches(/^01\d{9}$/,{message:"Phone must be 11 digits and start with 01"})
    phone!:string;

    @IsIn(["student","teacher"],{message:"Account type must be student or teacher"})
    accountType!:string;

    @IsOptional()
    @IsString()
    @MinLength(10,{message:"Address must be at least 10 characters"})
    address?:string;

    @IsOptional()
    created_at?:Date=new Date()

    @IsOptional()
    updated_at?:Date=new Date()

}

export class UpdateCreateUserDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty({message:"Name is mandatory"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message: 'Username format is invalid'}) 
    fullname?:string;
    
    @IsOptional()
    @IsEmail()
    email?:string;

    @IsOptional()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,{message:'Password must be match with the foramat'})
    password?:string;

    @IsOptional()
    @IsInt({message:"Age must be a whole number"})
    @Min(18,{message:"Age must be at least 18"})
    @Max(60,{message:"Age must be at most 60"})
    age?:number;

    @IsOptional()
    @IsString()
    @Matches(/^01\d{9}$/,{message:"Phone must be 11 digits and start with 01"})
    phone?:string;

    @IsOptional()
    @IsIn(["student","teacher"],{message:"Account type must be student or teacher"})
    accountType?:string;

    @IsOptional()
    @IsString()
    @MinLength(10,{message:"Address must be at least 10 characters"})
    address?:string;

    @IsOptional()
    updated_at?:Date=new Date()

}