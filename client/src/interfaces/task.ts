export interface ITask {
  _id?: string;
  name?: string;
  timeInSeconds?: number;
  initialTime?: Date;
  endTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
