import { Client } from '../../domain';
import { AuthGuard } from '../../../../guards/auth.guard';
import { CreateClientDto } from './dto/create-client-dto';
import { UpdateClientDto } from './dto/update-client-dto';
import {
  ListClientUseCase,
  CreateClientUseCase,
  UpdateClientUseCase,
  DeleteClientUseCase,
  StaticClientUseCase,
} from '../../application/use-case';
import {
  Put,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Controller,
  Injectable,
  BadRequestException,
} from '@nestjs/common';

@UseGuards(AuthGuard)
@Controller('clients')
@Injectable()
export class ClientController {
  constructor(
    private readonly listUseCase: ListClientUseCase.UseCase,
    private readonly staticUseCase: StaticClientUseCase.UseCase,
    private readonly createClientCase: CreateClientUseCase.UseCase,
    private readonly updateClientCase: UpdateClientUseCase.UseCase,
    private readonly deleteClientCase: DeleteClientUseCase.UseCase,
  ) {}

  @Get()
  async get() {
    const output = await this.listUseCase.execute();
    return output;
  }

  @Get('/static')
  async getStatic() {
    const output = await this.staticUseCase.execute();
    return output;
  }

  @Post()
  async create(@Body() createUserDto: CreateClientDto) {
    const output = await this.createClientCase.execute(createUserDto);

    if (typeof output === 'string') {
      throw new BadRequestException({ message: output });
    }

    return output;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    const output = await this.updateClientCase.execute(
      id,
      updateClientDto as Client,
    );

    if (!output.ok) {
      throw new BadRequestException({ message: output });
    }

    return output;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const output = await this.deleteClientCase.execute(id);
    return output;
  }
}
