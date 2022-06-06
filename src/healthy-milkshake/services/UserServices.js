import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getUser = async () => {
  let results = await DB_EXEC(`select * from user`);
  //console.log(results);
  return results.rows._array;
}

export const insertUser = async (param) => {
  let results = await DB_EXEC(`insert into user(user, password, email, type, age)
  values(?,?,?,?,?)`, [param.user, param.password, param.email, param.type, param.age]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateUser = async (param) => {
  let results = await DB_EXEC(`update user set user=?, password=?, email=?, type=?, age=?,
  where id=?`, [param.user, param.password,param.email,param.type, param.age, param.id]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteUser = async (id) => {
  let results = await DB_EXEC(`delete from user where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}