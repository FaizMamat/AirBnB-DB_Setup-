import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOwner1573405968036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "owner" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "property" ADD "owner_id" int`, undefined);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_2541d2fb798d385a0521553370d" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_2541d2fb798d385a0521553370d"`, undefined);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "owner_id"`, undefined);
        await queryRunner.query(`DROP TABLE "owner"`, undefined);
    }

}
