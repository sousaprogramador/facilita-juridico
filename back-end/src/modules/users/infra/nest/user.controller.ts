import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../../../../guards/auth.guard';
import {
  AuthUserUseCase,
  ListUsersUseCase,
  CreateUserUseCase,
} from '../../application/use-case';
import {
  Get,
  Post,
  Body,
  UseGuards,
  Controller,
  BadRequestException,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
    private readonly authUseCase: AuthUserUseCase.UseCase,
    private readonly listUseCase: ListUsersUseCase.UseCase,
    private readonly createUseCase: CreateUserUseCase.UseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const output = await this.createUseCase.execute(createUserDto);

    if (typeof output === 'string') {
      throw new BadRequestException({ message: output });
    }

    return output;
  }

  @Post('/auth')
  async auth(@Body() authUserDto: AuthUserDto) {
    const output = await this.authUseCase.execute(authUserDto);

    if (typeof output === 'string') {
      throw new BadRequestException({ message: output });
    }

    return output;
  }

  @UseGuards(AuthGuard)
  @Get()
  async get() {
    const output = await this.listUseCase.execute();
    return output;
  }
}
