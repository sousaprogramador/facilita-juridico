import { AuthUserDto } from './dto/auth-user.dto';
import { UserController } from './user.controller';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import {
  AuthUserUseCase,
  ListUsersUseCase,
  CreateUserUseCase,
} from '../../application/use-case';

describe('UserController', () => {
  let controller: UserController;
  let authUserUseCase: AuthUserUseCase.UseCase;
  let listUsersUseCase: ListUsersUseCase.UseCase;
  let createUserUseCase: CreateUserUseCase.UseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        AuthUserUseCase.UseCase,
        ListUsersUseCase.UseCase,
        CreateUserUseCase.UseCase,
      ],
    }).compile();

    controller = module.get<UserController>(UserController);

    listUsersUseCase = module.get<ListUsersUseCase.UseCase>(
      ListUsersUseCase.UseCase,
    );
    createUserUseCase = module.get<CreateUserUseCase.UseCase>(
      CreateUserUseCase.UseCase,
    );
    authUserUseCase = module.get<AuthUserUseCase.UseCase>(
      AuthUserUseCase.UseCase,
    );
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'New User',
        password: 'newpassword',
        email: 'newuser@example.com',
      };

      const expectedResult = {
        name: 'New User',
        id: expect.any(String),
        password: 'newpassword',
        email: 'newuser@example.com',
      } as CreateUserUseCase.Output;

      jest
        .spyOn(createUserUseCase, 'execute')
        .mockResolvedValue(expectedResult);

      const result = await controller.create(createUserDto);

      expect(result).toEqual(expectedResult);
      expect(createUserUseCase.execute).toHaveBeenCalledWith(createUserDto);
    });

    it('should throw BadRequestException when user creation fails', async () => {
      const createUserDto: CreateUserDto = {
        name: 'New User',
        password: 'newpassword',
        email: 'newuser@example.com',
      };

      const errorMessage = 'User creation failed';
      jest
        .spyOn(createUserUseCase, 'execute')
        .mockRejectedValue(new BadRequestException(errorMessage));

      await expect(controller.create(createUserDto)).rejects.toThrow(
        new BadRequestException(errorMessage),
      );
      expect(createUserUseCase.execute).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('get', () => {
    it('should return a list of users', async () => {
      const expectedResult = ['user1', 'user2'];
      jest.spyOn(listUsersUseCase, 'execute').mockResolvedValue(expectedResult);

      const result = await controller.get();

      expect(result).toEqual(expectedResult);
      expect(listUsersUseCase.execute).toHaveBeenCalled();
    });

    it('should throw BadRequestException when fetching users fails', async () => {
      const errorMessage = 'Failed to fetch users';
      jest
        .spyOn(listUsersUseCase, 'execute')
        .mockRejectedValue(new BadRequestException(errorMessage));

      await expect(controller.get()).rejects.toThrow(
        new BadRequestException(errorMessage),
      );
      expect(listUsersUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('auth', () => {
    it('should authenticate a user', async () => {
      const authUserDto: AuthUserDto = {
        password: '123456',
        email: 'test@example.com',
      };

      const expectedResult = {
        token: 'seu_token',
        user: {
          name: 'test',
          password: '123456',
          email: 'test@example.com',
        } as AuthUserUseCase.Output,
      };

      jest.spyOn(authUserUseCase, 'execute').mockResolvedValue(expectedResult);

      const result = await controller.auth(authUserDto);

      expect(result).toEqual(expectedResult);
      expect(authUserUseCase.execute).toHaveBeenCalledWith(authUserDto);
    });

    it('should throw BadRequestException when authentication fails', async () => {
      const authUserDto: AuthUserDto = {
        password: '123456',
        email: 'test@example.com',
      };

      const errorMessage = 'Authentication failed';
      jest
        .spyOn(authUserUseCase, 'execute')
        .mockRejectedValue(new BadRequestException(errorMessage));

      await expect(controller.auth(authUserDto)).rejects.toThrow(
        new BadRequestException(errorMessage),
      );
      expect(authUserUseCase.execute).toHaveBeenCalledWith(authUserDto);
    });

    describe('get', () => {
      it('should return a list of users', async () => {
        const expectedResult = ['user1', 'user2'];
        jest
          .spyOn(listUsersUseCase, 'execute')
          .mockResolvedValue(expectedResult);

        const result = await controller.get();

        expect(result).toEqual(expectedResult);
        expect(listUsersUseCase.execute).toHaveBeenCalled();
      });
    });
  });
});
