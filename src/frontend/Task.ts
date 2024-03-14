import { Entity, Fields, Validators } from "remult"

@Entity("asdfasd")
export class Task {
  id = ''
  @Fields.string({ validate: [Validators.unique] })
  title = ''

  completed = false
  createdAt?: Date


  @Fields.string({ allowNull: true, validate: [Validators.unique] })
  nom2?: string
  // => Type 'Validator<any>' is not assignable to type 'FieldValidator<ValidationMessage<any, undefined> | undefined, string>' ...

  // if I do:
  @Fields.string({ allowNull: true, validate: [Validators.unique("Has to be Unique")] })
  nom3?: string
}
