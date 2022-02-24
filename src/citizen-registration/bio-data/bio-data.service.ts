import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {

  constructor(
    @InjectRepository(BioDatum)
    private bioDataRepository: Repository<BioDatum>) { }

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newUser: BioDatum = this.bioDataRepository.create(createBioDatumDto)
    return this.bioDataRepository.save(newUser);

    //return 'This action adds a new user';

  }

  async findAll() {
    return await this.bioDataRepository.find();

    //return `This action returns all users`;

  }

  async findOne(id: number) {

    //return `This action returns a #${id} user`;

    return await this.bioDataRepository.findOne(id);
  }
  async update(id: number, updateBioDatumDto:UpdateBioDatumDto) {

    //return `This action updates a #${id} user`;

    return await this.bioDataRepository.update(id, updateBioDatumDto);
  }
  async remove(id: number) {

    //return `This action removes a #${id} user`;

    return await this.bioDataRepository.delete(id);
  }
}

