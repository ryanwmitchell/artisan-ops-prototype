import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async findAll() { return prisma.product.findMany(); }
  async create(data: { name: string; sku: string; price: number; stock: number }) { return prisma.product.create({ data }); }
}
