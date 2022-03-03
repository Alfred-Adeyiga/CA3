import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BioDatum } from '../bio-data/entities/bio-datum.entity';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository<LinkedIdentity>,

    @InjectRepository(BioDatum)
    private bioDatumRepository: Repository<BioDatum>

  ) { }

  async create(createlinkedIdentityDto: CreateLinkedIdentityDto) {

    //return 'This action adds a new student';

    const newlinkedIdentity = this.linkedIdentityRepository.create(createlinkedIdentityDto);

    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.

    if (createlinkedIdentityDto.bioDatum) {
      const newbioDatum = this.bioDatumRepository.create(createlinkedIdentityDto.bioDatum);
      const bioDatum: BioDatum = await this.bioDatumRepository.save(newbioDatum);
      newlinkedIdentity.biodatum = bioDatum;
    }
    return this.linkedIdentityRepository.save(newlinkedIdentity)
  }


  async findAll() {
    //return `This action returns all students`;
    return await this.linkedIdentityRepository.find({ relations: ['bioDatum'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.linkedIdentityRepository.findOne(id);
  }

  async update(id: number, updatelinkedIdentityDto: UpdateLinkedIdentityDto) {
    //return `This action updates a #${id} student`;
    return await this.linkedIdentityRepository.update(id, updatelinkedIdentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.linkedIdentityRepository.delete(id);
  }


  async setBioDatumById(linkedIdentityId: number, bioDataId:
    number) {
    try {
      return await
        this.linkedIdentityRepository.createQueryBuilder()
          .relation(LinkedIdentity, "bioData")
          .of(linkedIdentityId)
          .set(bioDataId)
    } catch (error) {
      throw new HttpException({
        status:
          HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for
    student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetBioDatumById(linkedIdentityId: number) {
    try {
      return await
        this.linkedIdentityRepository.createQueryBuilder()
          .relation(LinkedIdentity, "bioData")
          .of(linkedIdentityId)
          .set(null)
    } catch (error) {
      throw new HttpException({
        status:
          HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for
    student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
