module.exports = async function (req, res, proceed) {

  if (req.header('authorization')) {
    const token = req.header('authorization').split('Bearer ')[1];
    sails.log(token)

    const valid = await ApiKey.verify(token);

    if(valid) {
      return proceed();
    }
  }
 

  return res.unauthorized();
};
