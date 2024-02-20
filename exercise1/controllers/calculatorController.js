exports.add = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200).json({ result: sum });
};

exports.subtract = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = number1 - number2;
  console.log(difference);
  res.status(200).json({ result: difference });
};

exports.divide = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let fraction = number1 / number2;
  console.log(fraction);
  res.status(200).json({ result: fraction });
};

exports.multiply = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = number1 * number2;
  console.log(product);
  res.status(200).json({ result: product });
};
