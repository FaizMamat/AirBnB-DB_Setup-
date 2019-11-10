import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateComment1573411304753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" int NOT NULL IDENTITY(1,1), "comment_msg" nvarchar(255) NOT NULL, "comment_date" datetime NOT NULL, "user_id" int, "review_id" int, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_95f093aedad4d0fe6901890a645" FOREIGN KEY ("review_id") REFERENCES "review"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_95f093aedad4d0fe6901890a645"`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`, undefined);
        await queryRunner.query(`DROP TABLE "comment"`, undefined);
    }

}
