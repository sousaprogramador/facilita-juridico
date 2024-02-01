import { Client } from '../../domain';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { UpdateClientDto } from './dto/update-client-dto';
import { CreateClientDto } from './dto/create-client-dto';
import {
  ListClientUseCase,
  CreateClientUseCase,
  UpdateClientUseCase,
  DeleteClientUseCase,
  StaticClientUseCase,
} from '../../application/use-case';

const mockClientData = {
  city: 'Sobral',
  state: 'Ceara',
  complement: 'A',
  cep: '60861-380',
  cood_x: '-3.6898',
  cood_y: '-40.3489',
  latitude: '-3.6898',
  longitude: '-40.3489',
  phone: '(88) 98912-3812',
  name: 'Padaria bom café',
  email: 'padariacafevom@gmail.com',
  created_at: '2024-01-14T21:34:45.916Z',
  updated_at: '2024-01-14T21:34:45.916Z',
  created_at_formatted: '14/01/2024 18:34',
  address: 'Rua Giovanni Batista Montini, 487 B',
};

const mockListClientUseCase = {
  execute: jest.fn(),
};

const mockStaticClientUseCase = {
  execute: jest.fn(),
};

const mockCreateClientUseCase = {
  execute: jest.fn(),
};

const mockUpdateClientUseCase = {
  execute: jest.fn(),
};

const mockDeleteClientUseCase = {
  execute: jest.fn(),
};

describe('ClientController', () => {
  let controller: ClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        {
          provide: ListClientUseCase.UseCase,
          useValue: mockListClientUseCase,
        },
        {
          provide: StaticClientUseCase.UseCase,
          useValue: mockStaticClientUseCase,
        },
        {
          provide: CreateClientUseCase.UseCase,
          useValue: mockCreateClientUseCase,
        },
        {
          provide: UpdateClientUseCase.UseCase,
          useValue: mockUpdateClientUseCase,
        },
        {
          provide: DeleteClientUseCase.UseCase,
          useValue: mockDeleteClientUseCase,
        },
      ],
    }).compile();

    controller = module.get<ClientController>(ClientController);
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const createClientDto: CreateClientDto = {
        id: '1',
        cep: mockClientData.cep,
        name: mockClientData.name,
        city: mockClientData.city,
        email: mockClientData.email,
        state: mockClientData.state,
        phone: mockClientData.phone,
        address: mockClientData.address,
        latitude: mockClientData.cood_x,
        longitude: mockClientData.cood_y,
        complement: mockClientData.complement,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const expectedResult = { id: '1', name: 'TestClient' };
      mockCreateClientUseCase.execute.mockResolvedValue(expectedResult);

      const result = await controller.create(createClientDto);

      expect(result).toEqual(expectedResult);
      expect(mockCreateClientUseCase.execute).toHaveBeenCalledWith(
        createClientDto,
      );
    });

    it('should throw BadRequestException when client creation fails', async () => {
      const createClientDto: CreateClientDto = {
        id: '1',
        email: null,
        cep: mockClientData.cep,
        city: mockClientData.city,
        name: mockClientData.name,
        state: mockClientData.state,
        phone: mockClientData.phone,
        address: mockClientData.address,
        latitude: mockClientData.cood_x,
        longitude: mockClientData.cood_y,
        complement: mockClientData.complement,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const errorMessage = 'Failed to create client';
      mockCreateClientUseCase.execute.mockRejectedValue(
        new BadRequestException(errorMessage),
      );

      await expect(controller.create(createClientDto)).rejects.toThrowError(
        new BadRequestException(errorMessage),
      );

      expect(mockCreateClientUseCase.execute).toHaveBeenCalledWith(
        createClientDto,
      );
    });
  });

  describe('get', () => {
    it('should return a list of clients', async () => {
      const expectedResult = ['client1', 'client2'];
      mockListClientUseCase.execute.mockResolvedValue(expectedResult);

      const result = await controller.get();

      expect(result).toEqual(expectedResult);
      expect(mockListClientUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('getStatic', () => {
    it('should return static client data', async () => {
      const expectedResult = ['staticClient1', 'staticClient2'];
      mockStaticClientUseCase.execute.mockResolvedValue(expectedResult);

      const result = await controller.getStatic();

      expect(result).toEqual(expectedResult);
      expect(mockStaticClientUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const clientId = '1';
      const updateClientDto: UpdateClientDto = {
        id: '1',
        cep: mockClientData.cep,
        name: mockClientData.name,
        city: mockClientData.city,
        state: mockClientData.state,
        email: mockClientData.email,
        phone: mockClientData.phone,
        address: mockClientData.address,
        latitude: mockClientData.cood_x,
        longitude: mockClientData.cood_y,
        complement: mockClientData.complement,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const expectedResult = { ok: true };
      mockUpdateClientUseCase.execute.mockResolvedValue(expectedResult);

      const result = await controller.update(clientId, updateClientDto);

      expect(result).toEqual(expectedResult);
      expect(mockUpdateClientUseCase.execute).toHaveBeenCalledWith(
        clientId,
        updateClientDto as Client,
      );
    });

    it('should throw BadRequestException when client update fails', async () => {
      const clientId = '1';
      const updateClientDto: UpdateClientDto = {
        id: null,
        cep: mockClientData.cep,
        name: mockClientData.name,
        city: mockClientData.city,
        email: mockClientData.email,
        phone: mockClientData.phone,
        state: mockClientData.state,
        address: mockClientData.address,
        latitude: mockClientData.cood_x,
        longitude: mockClientData.cood_y,
        complement: mockClientData.complement,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const errorMessage = 'Failed to update client';
      mockUpdateClientUseCase.execute.mockRejectedValue(
        new BadRequestException(errorMessage),
      );

      await expect(
        controller.update(clientId, updateClientDto),
      ).rejects.toThrow(new BadRequestException(errorMessage));

      expect(mockUpdateClientUseCase.execute).toHaveBeenCalledWith(
        clientId,
        updateClientDto as Client,
      );
    });
  });

  describe('remove', () => {
    it('should remove a client', async () => {
      const clientId = '1';
      const expectedResult = { ok: true };
      mockDeleteClientUseCase.execute.mockResolvedValue(expectedResult);

      const result = await controller.remove(clientId);

      expect(result).toEqual(expectedResult);
      expect(mockDeleteClientUseCase.execute).toHaveBeenCalledWith(clientId);
    });

    it('should throw BadRequestException when client removal fails', async () => {
      const clientId = '1';
      const errorMessage = 'Failed to remove client';
      mockDeleteClientUseCase.execute.mockRejectedValue(
        new BadRequestException(errorMessage),
      );

      await expect(controller.remove(clientId)).rejects.toThrow(
        new BadRequestException(errorMessage),
      );

      expect(mockDeleteClientUseCase.execute).toHaveBeenCalledWith(clientId);
    });
  });

  it('should throw BadRequestException for invalid createClientDto', async () => {
    const invalidCreateClientDto = {};

    await expect(
      controller.create(invalidCreateClientDto as CreateClientDto),
    ).rejects.toThrow(new BadRequestException('Failed to create client'));
  });

  it('should throw BadRequestException for invalid updateClientDto', async () => {
    const clientId = '1';
    const invalidUpdateClientDto = {};

    await expect(
      controller.update(clientId, invalidUpdateClientDto as UpdateClientDto),
    ).rejects.toThrow(new BadRequestException('Failed to update client'));
  });
});
