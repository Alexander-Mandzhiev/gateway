import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { EnumTypeField, TypeField } from "src/types/projectFields.types"

export class UpdateTaskFieldDto {
    @ApiProperty({ description: 'Описсание проекта', example: "Исполнитель" })
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @ApiProperty({ description: 'Уникальный идентификатор проекта', example: "clx25gfmp00037r4g2jg2vete" })
    @IsNotEmpty()
    @IsString()
    readonly projectId: string
}

export class TaskFieldDto extends UpdateTaskFieldDto {

    @ApiProperty({ description: 'Описсание проекта', example: "string | integer" })
    @IsNotEmpty()
    @IsEnum(EnumTypeField)
    readonly field: TypeField
}
