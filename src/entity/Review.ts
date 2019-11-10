import { Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany, Column } from "typeorm";
import { Property } from "./Property";
import { User } from "./User";
import { Comment } from "./Comment";


@Entity()

export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    review: string;

    @Column()
    rating: number;

    @Column()
    review_date: Date;

    @ManyToOne(type => Property, property => property.reviews)
    @JoinColumn({name: "property_id"})
    properties: Property

    @ManyToOne(type => User, user => user.reviews)
    @JoinColumn({name: "user_id"})
    users: User

    @OneToMany(type => Comment, comment => comment.reviews)
    comments: Comment[];

}