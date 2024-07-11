import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrdersService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('OrdersService');

  async onModuleInit() {
    this.logger.log(`Database connected`);
    await this.$connect();
  }
  create(createOrderDto: CreateOrderDto) {
    return createOrderDto;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    console.log(id);
    return `This action returns a #${id} order`;
  }

  changeStatus() {
    return `Status change`;
  }
}
