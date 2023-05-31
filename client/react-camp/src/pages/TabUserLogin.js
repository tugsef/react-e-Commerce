import React from 'react'
import { Tab } from 'semantic-ui-react'



const panes = [
  {
    menuItem: 'Giriş Yap',
    render: () => <Tab.Pane active  >
            
    <div className="column" style={{margin:"1em 5em 1em 5em"}}>
    <h2 className="ui blue image header">
      <img />
      
    </h2>
    <form className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
        <label style={{textAlign:"left"}}>E-posta</label>
          <div className="ui left icon input">
            <i className="user icon"></i>
           

            <input type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div className="field">
        <label style={{textAlign:"left"}}>Şifre</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input  type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div className="ui fluid large blue submit button">Giriş Yap</div>
        <br/>
        <u>Şifremi Unuttum.</u>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
  </Tab.Pane>,
  },
  { menuItem: 'Kayıt Ol', render: () => <Tab.Pane><div className="column">
  <h2 className="ui blue image header">
    <img />
    
  </h2>
  <form className="ui large form">
    <div className="ui stacked segment">
      <div className="field">
      <label style={{textAlign:"left"}}>E-posta</label>
        <div className="ui left icon input">
          <i className="user icon"></i>
          <input type="text" name="email" placeholder="E-mail address"/>
        </div>
      </div>
      <div className="field">
      <label style={{textAlign:"left"}}>Parola</label>
        <div className="ui left icon input">
          <i className="lock icon"></i>
          <input  type="password" name="password" placeholder="Password"/>
        </div>
      </div>
      <div className="ui fluid large blue submit button">Giriş Yap</div>
    </div>

    <div class="ui error message"></div>

  </form>

  <div class="ui message">
    New to us? <a href="#">Sign Up</a>
  </div>
</div></Tab.Pane> },

]

const TabUserLogin = () => <Tab panes={panes} />

export default TabUserLogin






