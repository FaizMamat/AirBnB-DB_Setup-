import {Entity, PrimaryGeneratedColumn, Column,OneToMany,ManyToOne,JoinColumn} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";
import { Payment } from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    booking_date: Date;

    @Column()
    check_in: Date;

    @Column()
    check_out: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => User, user => user.bookings)
    @JoinColumn({name: "user_id"})
    users: User;

    @ManyToOne(type => Property, property => property.bookings)
    @JoinColumn({name: "property_id"})
    properties: Property;

    @OneToMany(type => Payment, payment => payment.bookings)
    payments: Payment[];
}
