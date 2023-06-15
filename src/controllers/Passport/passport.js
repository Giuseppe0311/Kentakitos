const LocalStrategy = require("passport-local").Strategy;
const bcryptjs = require("bcryptjs");
const { pool } = require("../../db/postgresdb.js");
const globals = require("./globals.js");

function initialize(passport) {
  console.log("Initialized");

  const authenticateUser = async (correo, contraseña, done) => {
    console.log(correo, contraseña);

    try {
      const results = await pool.query(
        `SELECT * FROM usuarios WHERE correo = $1`,
        [correo]
      );
      console.log(results.rows);

      if (results.rows.length > 0) {
        const user = results.rows[0];

        try {
          const isMatch = await bcryptjs.compare(contraseña, user.contraseña);
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Contraseña incorrecta" });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        return done(null, false, {
          message: "No existe usuario registrado con ese correo",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "correo", passwordField: "contraseña" },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.codusuario));

  passport.deserializeUser((codusuario, done) => {
    pool.query(
      `SELECT * FROM usuarios WHERE codusuario = $1`,
      [codusuario],
      (err, results) => {
        if (err) {
          return done(err);
        }
        globals.setUserId(results.rows[0].codusuario);
        console.log(`ID is ${results.rows[0].codusuario}`);
        return done(null, results.rows[0]);
      }
    );
  });
}
module.exports = initialize;
