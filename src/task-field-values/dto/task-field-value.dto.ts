import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString, Validate } from "class-validator"
import { IsNumberOrString } from "src/config/validation"



export class ProjectId {

    @ApiProperty({ description: 'Уникальный идентификатор на задачу', example: "clxc46zrl00016z0jral1rjan" })
    @IsNotEmpty()
    @IsString()
    projectId: string
}

export class TaskFieldValueDto extends ProjectId {
    @ApiProperty({ description: 'Значение поля задачи', example: "Исполнитель. В случае дорабвления значения из списка, берём id поля - clycqvk6u0001ore3c4smayhi" })
    @IsOptional()
    @Validate(IsNumberOrString)
    value: number | string

    @ApiProperty({ description: 'Уникальный идентификатор на поле задачи', example: "clxfvplou0001lbfs22szxu7v" })
    @IsNotEmpty()
    @IsString()
    taskFieldId: string

    @ApiProperty({ description: 'Уникальный идентификатор на задачу', example: "clxc46zrl00016z0jral1rjan" })
    @IsNotEmpty()
    @IsString()
    taskId: string
}


export class EnumValuesDto extends ProjectId {
    @ApiProperty({ description: 'Список значений', example: "Низкий,Средний,Высокий" })
    @IsNotEmpty()
    @IsString()
    values: string

    @ApiProperty({ description: 'Уникальный идентификатор на поле задачи', example: "clxhf60d40007et0jhbcil2vm" })
    @IsNotEmpty()
    @IsString()
    taskFieldId: string
}