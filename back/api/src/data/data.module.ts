import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [DataService, PrismaService],
  exports: [PrismaService],
})
export class DataModule {}
