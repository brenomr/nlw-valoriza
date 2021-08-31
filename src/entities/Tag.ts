import { Exclude, Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Tags")
class Tag {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Expose({name: "nameCustom"})
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Tag };