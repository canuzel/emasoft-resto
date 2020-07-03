let login = {
  form:$("#loginForm"),
  input:$("#loginForm").find("input[type=password]"),
  setLoginInput:(button)=>{
    let oldVal = login.input.val()
    oldVal = oldVal + $(button).html()
    login.input.val(oldVal)
  },
  clearLoginInput:()=>{
    login.form.trigger("reset")
  },
  seePassword:()=>{
    login.input.attr("type",(login.input.attr("type")=="password"?"text":"password"))
  }
}