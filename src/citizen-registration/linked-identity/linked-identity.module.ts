import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { LinkedIdentityController } from './linked-identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BioDatum } from '../bio-data/entities/bio-datum.entity';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BioDatum, LinkedIdentity])],
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule {}
