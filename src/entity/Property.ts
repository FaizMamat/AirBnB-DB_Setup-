import {Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn, ManyToMany,OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tag } from "./Tag";
import { Review } from "./Review";
import { Locality } from "./Locality";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => Booking, booking => booking.properties)
    bookings: Booking[];

    @ManyToOne(type => Owner, owner => owner.properties)
    @JoinColumn({name: "owner_id"})
    owner: Owner;

    @ManyToMany(type => Tag, tag => tag.properties)
    tags: Tag[];

    @OneToMany(type => Review, review => review.properties)
    reviews: Review[];

    @ManyToMany(type => Locality, locality => locality.properties)
    localities: Locality[];

}
