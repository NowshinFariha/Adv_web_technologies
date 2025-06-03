import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  foodName: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'text', nullable: true }) 
  description: string;

  @Column()
  availability: boolean;
}

