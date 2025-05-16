import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetUniqueLoginToUser1747345388963 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "user"
      ADD CONSTRAINT "UQ_user_login" UNIQUE ("login");
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "user"
      DROP CONSTRAINT "UQ_user_login";
    `);
  }

}
