
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial_state:[0,0,0,0,0,0,0,0],
      motor1:false,
      motor2:false,
      motor3:false,
      motor4:false,
      motor5:false,
      motor6:false,
      motor7:false,
      motor8:false,
    }
  }

  getstate=()=>{
    var arr=[]
    var res=[]
    var prevalue=null
    fetch("https://api.thingspeak.com/channels/1198362/fields/1.json?api_key=J982M6K8DKC1D148&results=1")
    .then(res => res.json())
    .then(details => {
      console.log(details)
      arr.push(details)
      arr.map(data=>{
        data.feeds.map(value=>{
         prevalue=value.field1.split("")
          console.log(prevalue)
          prevalue.map(data=>{
            res.push(parseInt(data))
          })
          console.log(res)
          this.setState({
            initial_state:res,
          })
        for(let i=0;i<res.length;i++){
          if(i==0){
            if(res[i]==1){
              this.setState({
                motor1:true
              })
            }
            else{
              this.setState({
                motor1:false
              })
            }
          }
          else if(i==1){
            if(res[i]==1){
              this.setState({
                motor2:true
              })
            }
            else{
              this.setState({
                motor2:false
              })
            }
          }
          else if(i==2){
            if(res[i]==1){
              this.setState({
                motor3:true
              })
            }
            else{
              this.setState({
                motor3:false
              })
            }
          }
          else if(i==3){
            if(res[i]==1){
              this.setState({
                motor4:true
              })
            }
            else{
              this.setState({
                motor4:false
              })
            }
          }
          else if(i==4){
            if(res[i]==1){
              this.setState({
                motor5:true
              })
            }
            else{
              this.setState({
                motor5:false
              })
            }
          }
          else if(i==5){
            if(res[i]==1){
              this.setState({
                motor6:true
              })
            }
            else{
              this.setState({
                motor6:false
              })
            }
          }
          else if(i==6){
            if(res[i]==1){
              this.setState({
                motor7:true
              })
            }
            else{
              this.setState({
                motor7:false
              })
            }
          }
          else if(i==7){
            if(res[i]==1){
              this.setState({
                motor8:true
              })
            }
            else{
              this.setState({
                motor8:false
              })
            }
          }
        }
        })
      })
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }

  componentDidMount = () => {
  this.handlerefresh();
   this.getstate();
  }
 
  handlerefresh=()=>{
    const interval = setInterval(() => {
      this.getstate()
    }, 20000);
  }

motor1=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
        }
      else{
        res.push(off)
       }}
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor1:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor1:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log(preres)
    console.log(res)
  }
  else{
    console.log("no")
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    console.log(id1)
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor1:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor1:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log(preres)
    console.log(res)
  }
}


motor2=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor2:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor2:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor2:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor2:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}

motor3=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor3:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor3:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor3:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor3:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}


motor4=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor4:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor4:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor4:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor4:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}


motor5=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor5:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor5:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor5:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor5:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}

motor6=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor6:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor6:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor6:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor6:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}


motor7=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor7:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor7:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor7:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor7:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}


motor8=(e)=>{
  var preres=this.state.initial_state
  var res=[]
  var on=1;
  var off=0;
  var value=e.target.id-1
  if(e.target.checked){
  for(let i=0;i<this.state.initial_state.length;i++){
    if(i==value){
      if(this.state.initial_state[i]==0){
        res.push(on)
      }
      else{
        res.push(off)
      }
    }
    else{
      res.push(this.state.initial_state[i])
    }}
    var id=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor8:true,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor8:false,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    for(let i=0;i<this.state.initial_state.length;i++){
      if(i==value){
        if(this.state.initial_state[i]==1){
          res.push(off)
        }
        else{
          res.push(on)
        }
      }
      else{
        res.push(this.state.initial_state[i])
      }
    }
    var id1=res.join("")
    fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+id1)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor8:false,
          initial_state:res
        })
      }
      else{
        this.setState({
          motor8:true,
          initial_state:preres
        })
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  console.log(preres)
  console.log(res)
}
  render(){
  return (
    <div className="App mt-3">
      <div><img src="img.png"/></div>
      <table class="table table-striped mt-3">
  <tbody>
    <tr>
      <th scope="row">Filter Motor Valve </th>
      <td><label class="switch">
  <input type="checkbox" id="1" checked={this.state.motor1}  onChange={this.motor1} />
  <span class="slider round"></span>
    </label> </td>
    </tr>
    <tr>
      <th scope="row">Ozone Motor Valve </th>
      <td><label class="switch">
  <input type="checkbox" id="2" checked={this.state.motor2}  onChange={this.motor2}/>
  <span class="slider round"></span>
    </label></td> 
    </tr>
    <tr>
      <th scope="row">Filter Motor</th>
      <td><label class="switch">
  <input type="checkbox" id="3"checked={this.state.motor3}  onChange={this.motor3} />
  <span class="slider round"></span>
    </label></td>
    </tr>
    <tr>
      <th scope="row">Ozone Motor</th>
      <td> <label class="switch">
  <input type="checkbox" id="4" checked={this.state.motor4} onChange={this.motor4}/>
  <span class="slider round"></span>
    </label></td>
    </tr>
    <tr>
      <th scope="row">Ozone Generator</th>
      <td> <label class="switch">
  <input type="checkbox" id="5"  checked={this.state.motor5} onChange={this.motor5} />
  <span class="slider round"></span>
    </label></td>
    </tr>
    <tr>
      <th scope="row">Not Use</th>
      <td><label class="switch">
  <input type="checkbox" id="6" checked={this.state.motor6} onChange={this.motor6} />
  <span class="slider round"></span>
    </label></td>
    </tr>
    <tr>
      <th scope="row">Not Use</th>
      <td> <label class="switch">
  <input type="checkbox" id="7" checked={this.state.motor7}  onChange={this.motor7}/>
  <span class="slider round"></span>
    </label></td>
    </tr>
    <tr>
      <th scope="row">Not Use</th>
      <td><label class="switch">
  <input type="checkbox" id="8" checked={this.state.motor8}  onChange={this.motor8} />
  <span class="slider round"></span>
    </label></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}}

export default App;
