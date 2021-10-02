import * as SQlite from "expo-sqlite";

export const db = SQlite.openDatabase("photos.db");

export const init = () => {
  const promise = new Promise<String>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS images (id INTEGER UNIQUE PRIMARY KEY NOT NULL, analysisId NUMERIC UNIQUE NOT NULL, imagePath TEXT NOT NULL,email TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPhoto = (
  analysisId: string,
  imagePath: string,
  email: string
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO images (analysisId, imagePath,email) VALUES (?, ?, ? );`,
        [analysisId, imagePath, email],
        (_, result) => {
          console.log(imagePath,"DB IMAGEPATH")
          console.log(result,analysisId,imagePath,email,"DB RESULT")
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const checkPhoto = async (
  id: number,
  check: () => boolean,
  email: string
) => {
  await db.transaction(
    (tx) => {
      // sending 4 arguments in executeSql
      tx.executeSql(
        `SELECT * FROM images WHERE analysisId = ? AND email =?`,
        [id, email],
        // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => {
          if (!_array.length) {
            check(null, false);
          } else {
            console.log(_array[0], "DB");
            check(_array[0], true);
          }
        }
      ),
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log("Error ", error);
      // end executeSQL
    } // end transaction
  );
};
export const fetchPhotosDB = async (
  handleDbImages: () => void,
  email: string
) => {
  await db.transaction(
    (tx) => {
      // sending 4 arguments in executeSql
      tx.executeSql(
        "SELECT * FROM images WHERE email = ?",
        [email], // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows }) => {
          handleDbImages(rows._array);
        }
      ),
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log("Error ", error);
      // end executeSQL
    } // end transaction
  );
};
export const deletePhoto = async (
  id: number[],
  handleDbImages: () => void
) => {
  let query = "DELETE FROM images WHERE ";
  for (let i = 0; i < id.length; i++) {
    if (Array.isArray(id) && id !== []) {
      if (0 === id.length) {
        return (query = query + " analysisId=" + id[i]);
      } else if (i < id.length - 1) {
        query = query + " analysisId=" + id[i] + " " + "OR";
      } else if (i == id.length - 1) {
        query = query + " analysisId= " + id[i];
      }
    }
  }
  return await db.transaction((tx) => {
    tx.executeSql(
      query,
      // [id],
      (txObj, resultSet) => {
        if (resultSet.rowsAffected > 0) {
          let newList = images.filter((image) => {
            if (image.id === id) return false;
            else return true;
          });
          handleDbImages(newList);
        }
      },
      (txObj, error) => console.log(error, "ERRO")
    );
  });
};

export const deleteProfile = async (email: string) => {
  return db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM images WHERE email= ?",
      [email],
      (txObj, resultSet) => {
        console.log(resultSet, "Result");
      },
      (txObj, error) => console.log(error, "ERRO")
    );
  });
};
