import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTag1573408497149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_tags" ("tag_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_cef86cb1da5db95acc0edebed67" PRIMARY KEY ("tag_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_de9999220090d8e40bcf19c6e7" ON "property_tags" ("tag_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4fa9ab6a3dde65dba931098708" ON "property_tags" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" ADD CONSTRAINT "FK_de9999220090d8e40bcf19c6e7d" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" ADD CONSTRAINT "FK_4fa9ab6a3dde65dba9310987082" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_tags" DROP CONSTRAINT "FK_4fa9ab6a3dde65dba9310987082"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" DROP CONSTRAINT "FK_de9999220090d8e40bcf19c6e7d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4fa9ab6a3dde65dba931098708" ON "property_tags"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_de9999220090d8e40bcf19c6e7" ON "property_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "property_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "tag"`, undefined);
    }

}
