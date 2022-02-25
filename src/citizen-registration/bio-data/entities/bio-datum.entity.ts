import { LinkedIdentity } from "src/citizen-registration/linked-identity/entities/linked-identity.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    nationality: string

    @Column({ nullable: true })
    countryofbirth: string;

    @Column({ nullable: true})
    stateofbirth: string;

    @Column({ nullable: true })
    townofbirth: string;

    @Column()
    address: string

    @Column({ nullable: true })
    profession: string;

    @Column({ default: true })
    isActive: boolean;
    LinkedIdentity: any;

    @OneToOne(type => LinkedIdentity, LinkedIdentity => LinkedIdentity.biodatum)
    linkedidentity: LinkedIdentity;

}
