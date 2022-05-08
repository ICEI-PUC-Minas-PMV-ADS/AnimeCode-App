import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('fuel_manager.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists user (id integer primary key not null, user text not null, password text not null,email text not null ,type int not null, age int not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
