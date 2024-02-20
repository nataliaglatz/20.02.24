import{
    txtLogintxtSenha
} from '../App';
var login = "teste";
var senha = "teste";

//var txtLogin = document.getElementById("txtLogin");
//var txtSenha = document.getElementById("txtSenha");

export const fazerLogin = (e) => {
    if (txtLogin.current.value == login && txtSenha.current.value == Senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha invalidos");
    }
    return true;
}