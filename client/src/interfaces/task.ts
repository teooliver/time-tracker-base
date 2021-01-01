export interface ITask {
  _id?: string;
  name?: string;
  timeInSeconds?: number;
  initialTime?: Date | null;
  endTime?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}
