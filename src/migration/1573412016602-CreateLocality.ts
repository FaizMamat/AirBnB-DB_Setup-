import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLocality1573412016602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "country" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_locality" ("locality_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_3cf7d6fc5df0202a21061f0de2e" PRIMARY KEY ("locality_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality" ("locality_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_5e0a85276d5873eae3c10cde100" FOREIGN KEY ("locality_id") REFERENCES "locality"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" ADD CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_eba048eb827ffd0407f2bf9baa0"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_locality" DROP CONSTRAINT "FK_5e0a85276d5873eae3c10cde100"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_eba048eb827ffd0407f2bf9baa" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_5e0a85276d5873eae3c10cde10" ON "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "property_locality"`, undefined);
        await queryRunner.query(`DROP TABLE "locality"`, undefined);
    }

}
