import { CreateBioDatumDto } from "src/citizen-registration/bio-data/dto/create-bio-datum.dto";

export class CreateLinkedIdentityDto {

    readonly NIN: number;
    readonly BVN: number;
    readonly MobileNumbers: number;
    readonly bioDatum: CreateBioDatumDto;
}

