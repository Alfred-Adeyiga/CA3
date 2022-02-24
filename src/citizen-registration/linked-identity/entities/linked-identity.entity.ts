import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/citizen-registration/bio-data/entities/bio-datum.entity";


@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NIN: number;

    @Column()
    BVN: number;

    @Column()
    MobileNumbers: number;

    @JoinColumn()
    @OneToOne(type => BioDatum, BioDatum => BioDatum.LinkedIdentity, { cascade: true })
    biodatum: BioDatum;


}