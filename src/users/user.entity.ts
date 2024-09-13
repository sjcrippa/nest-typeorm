// Here we define how the users will look inside the DB.
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn() // <-- this is for the table
  id: number; // <-- this is for typescript

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) // mysql syntax for adding the current date
  createdAt: Date;

  @Column({ nullable: true }) // nullable make this col not require.
  authStrategy: string;
}
