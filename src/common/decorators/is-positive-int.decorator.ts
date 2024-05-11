import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive } from 'class-validator';

export const IsPositiveInt = () => applyDecorators(IsInt(), IsPositive());
