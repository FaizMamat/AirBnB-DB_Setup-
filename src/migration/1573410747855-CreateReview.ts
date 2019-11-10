import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateReview1573410747855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "review" nvarchar(255) NOT NULL, "rating" int NOT NULL, "review_date" datetime NOT NULL, "property_id" int, "user_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_81446f2ee100305f42645d4d6c2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_81446f2ee100305f42645d4d6c2"`, undefined);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c"`, undefined);
        await queryRunner.query(`DROP TABLE "review"`, undefined);
    }

}
