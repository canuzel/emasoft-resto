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

let sell = {
  setButtonMenu:(target,obj,callback)=>{
    target.empty()
    obj.forEach(item => {
      target.append(
        $("<div>").addClass("col col-4 p-0").append(
          $("<button>").append(
            $("<span>").addClass("text-uppercase").html(item.name+"<br>"),
            $("<span>").html(item.price)
          )
        )
      )
    })
  }
}


sell.setButtonMenu($("#menus div.row"),[
  { name:"1LT COLA", price:"8,00"},
  { name:"Ayran açık", price:"4,50"},
])