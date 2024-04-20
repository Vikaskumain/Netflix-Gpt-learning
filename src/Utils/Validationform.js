

function Validationform(email,password) {
  const isemailvalidation =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const ispasswordvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const  isnamevalidation = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isemailvalidation) return "Email is Not Vaild";
  if (!ispasswordvalidation) return "Password is Not Vaild"
  // if (!isnamevalidation) return "Name is Not Correct"

  return null;
}

export default Validationform
