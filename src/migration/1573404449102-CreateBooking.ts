import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBooking1573404449102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" int NOT NULL IDENTITY(1,1), "price" int NOT NULL, "booking_date" datetime NOT NULL, "check_in" datetime NOT NULL, "check_out" datetime NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "user_id" int, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
    }

}
