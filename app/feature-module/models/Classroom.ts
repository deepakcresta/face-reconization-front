export class Classroom {
  id?: number;
  name: string;
  teacherId: number;
  studentIds: number[];

  constructor(name: string, teacherId: number, studentIds: number[], id?: number) {
    this.id = id;
    this.name = name;
    this.teacherId = teacherId;
    this.studentIds = studentIds;
  }
}
