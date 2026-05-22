import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsNotOnBallot1779418791773 implements MigrationInterface {
    name = 'AddIsNotOnBallot1779418791773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" ADD "is_not_on_ballot" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "is_not_on_ballot"`);
    }

}
