import { PartialType } from '@nestjs/mapped-types';
import { CreateBioDatumDto } from './create-bio-datum.dto';

export class UpdateBioDatumDto extends PartialType(CreateBioDatumDto) {}
