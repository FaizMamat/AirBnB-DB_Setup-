import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Comment } from "./Comment";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => Booking, booking => booking.users)
    bookings: Booking[];

    @OneToMany(type => Review, review => review.users)
    reviews: Review[];

    @OneToMany(type => Comment, comment => comment.users)
    comments: Comment[];
}
