export class CreateBioDatumDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string
    readonly countryofbirth?: string;
    readonly stateofbirth?: string;
    readonly townofbirth?: string;
    readonly address: string
    readonly profession?: string;
    readonly isActive?: boolean;
}
