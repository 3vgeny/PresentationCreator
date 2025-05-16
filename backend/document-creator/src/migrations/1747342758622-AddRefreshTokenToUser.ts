import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRefreshTokenToUser1747342758622 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "user"
      ADD COLUMN "hashRefreshToken" character varying;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "user"
      DROP COLUMN "hashRefreshToken";
    `);
  }

}
