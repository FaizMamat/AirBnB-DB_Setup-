import { Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, Column, ManyToOne, JoinColumn } from "typeorm";
import { Review } from "./Review";
import { User } from "./User";

@Entity()

export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment_msg: string;

    @Column()
    comment_date: Date;

    @ManyToOne(type => User, user => user.comments)
    @JoinColumn({name: "user_id"})
    users: User;

    @ManyToOne(type => Review, review => review.comments)
    @JoinColumn({name: "review_id"})
    reviews: Review;

    
}