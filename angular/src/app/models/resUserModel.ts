export class resUserModel {
  public user: {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    roleName: string,
    privileges: string[],
    teams: number[],
  }
  public error: string;

}
