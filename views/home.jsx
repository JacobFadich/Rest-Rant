const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Home </h1>
              
              <a href="/places"><button className="btn-primary">Places Page</button>
              </a>
              <div>
                <center><img src="/images/food1.jpg" width="1500px" height="1000px" alt="Example Food"/></center>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    Photo by <a href="https://unsplash.com/@lvnatikk">Lily Banse </a> 
                    on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>

          </main>
      </Def>
    )
  }


  

module.exports = home
