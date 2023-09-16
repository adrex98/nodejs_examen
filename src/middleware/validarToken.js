// middleware/validarToken.js
// import jwt from 'jsonwebtoken';
// const secretKey = process.env.SECRET_KEY;

// export const validarToken = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
//   }

//   try {
//     const decoded = jwt.verify(token, secretKey);
//     req.usuario = decoded; // Agrega la información del usuario al objeto de solicitud (req)
//     next(); // Continúa con el siguiente middleware o controlador
//   } catch (error) {
//     res.status(403).json({ mensaje: 'Token no válido.' });
//   }
// };

// middleware/validarToken.js
import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_KEY;

export const validarToken = (req, res, next) => {
  const token = req.cookies.jwt; // Lee el token desde las cookies

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.usuario = decoded; // Agrega la información del usuario al objeto de solicitud (req)
    next(); // Continúa con el siguiente middleware o controlador
  } catch (error) {
    res.status(403).json({ mensaje: 'Token no válido.' });
  }
};

// import passport from 'passport';
// import passportJwt from 'passport-jwt';
// const JwtStrategy = passportJwt.Strategy;
// const ExtractJwt = passportJwt.ExtractJwt;

// const secretKey = process.env.SECRET_KEY;

// // Configura Passport con una estrategia JWT
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: secretKey,
// };

// passport.use(
//   new JwtStrategy(jwtOptions, (jwtPayload, done) => {
//    
//    
//    

//     
//     return done(null, jwtPayload);
//   })
// );

// export const validarToken = passport.authenticate('jwt', { session: false });

