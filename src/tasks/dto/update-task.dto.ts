// update-task.dto.ts

import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString({ message: 'O título deve ser uma string.' })
  @IsNotEmpty({ message: 'O título não pode estar vazio.' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  description?: string;

  @IsOptional()
  //@IsDate({ message: 'A data deve ser um objeto de data válido.' })
  term?: Date | null | string;

  @IsOptional()
  @IsBoolean({ message: 'O campo finished deve ser um booleano.' })
  finished?: boolean;

  priority: number;
}
