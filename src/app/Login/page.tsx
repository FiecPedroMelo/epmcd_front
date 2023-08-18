import Menu from "@/components/commons/Menu";

export default function Login() {
  return (
    <div>
        <form method="POST" className="formLogin">
          <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
              <label>E-mail</label>
              <input placeholder="Digite seu e-mail"/> <br />

              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha" /> <br />
              
              <input type="submit" value="Acessar" className="btn" />
        </form>

      <Menu />

    </div>
  );
}
