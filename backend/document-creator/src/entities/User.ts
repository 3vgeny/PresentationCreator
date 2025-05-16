import { 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn, 
} from 'typeorm';

@Entity()
@Unique(['login'])
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    login: string;

  @Column()
    password: string;

  @Column({ default:'user' })
    role: string;

  @Column({ nullable: true })
    lastSignIn: Date;

  @Column({ type: 'varchar', nullable: true })
    hashRefreshToken: string | null;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt: Date;

  @DeleteDateColumn()
    deletedAt: Date;
}
