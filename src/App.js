import React, {Component} from 'react'
import'./App.css'

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            searchReference: '',
            allMembers: [],
            newMembers: {name: '', username: '', email: ''},
            records:[],
            error:''
        }
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
        
    }


//This will get the data from the website and store it
componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users/'
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({allMembers:data, records: data}))
    .catch(h =>console.log('error', h))
}


// This will look for a name in the database and return it if exists
onSearchSubmit = (h) => {
  h.preventDefault()
  document.getElementById("see-all")
  document.getElementById("searching")

  let newRecord = this.state.allMembers.filter(users => users.name.toLowerCase().includes(this.state.searchReference))
  this.setState({records: newRecord})

if(newRecord.length <= 0)
this.setState({error: 'The record was not found in the database.'})
else
this.setState({error: ''})
}

onSearchChange = (h) => this.setState({searchReference: h.target.value})

//This is will show all of the current members
onViewAllClick = () => {
document.getElementById("see-all")
document.getElementById("searching")
this.setState({records: this.state.allMembers})
document.getElementById('digging').reset()
this.setState({searchReference: ''})
this.setState({error:''})
}

//This will govern that the usernames do not match
onDismiss = (h, username) => {
this.setState({
records: this.state.records.filter(users => users.username !== username)
})

this.setState({
    allMembers: this.state.allMembers.filter(users => users.username !== username)
})

}
//This will help add a record if the fields are unique
onAddSubmit = (h) => {
    h.preventDefault()
    let empty = false
    let unique = true
    const{allMembers, newMembers} = this.state

for (const key in newMembers){
    if(newMembers[key].length <= 0){
    empty = true
    break
    }
}

allMembers.some(user => {
if(user.username === newMembers.username){
    unique = false
    this.setState({error: ' Apologies the username you gave already exist in the database.'})
    return true 
}

else{
    this.setState({error: ''})
    return false
}

})


//This governs the reset once the user submit new information into the database
if(!empty && unique){
    allMembers.push(this.state.newMembers)
    this.setState({newMembers: newMembers})
    this.setState({newMembers: {name: '', username: '', email: ''}})
    document.getElementById('Adding').reset()
    this.onViewAllClick()
}

}

//This will handle the setting the state for new members
onAddChange = (h) => {
let newMembers = this.state.newMembers
newMembers[h.target.name] = h.target.value
this.setState({...this.state, newMembers: newMembers})
}

render(){
    return(
        <div className="App">
        <h2> Project 1 React
        <button
        id ="see-all"
        style = {{marginLeft: "50px"}}
        onClick={this.onViewAllClick}>
        See all Current Members
        </button>
        </h2>
        
        <Search
        onSubmit = {this.onSearchSubmit}
        onChange = {this.onSearchChange}
        />

        <Table
        users={this.state.records}
        onDismiss={this.onDismiss}
        />

        <Add 
        onSubmit = {this.onAddSubmit}
        onChange = {this.onAddChange}
        newMembers = {this.state.newMembers}
        />

<Error error ={this.state.error}/> 
        </div>

    )
   }
}

//This function handles searching through the database when the user submits a name to search
const Search = ({onSubmit, onChange}) => (
<form id = 'digging' onSubmit={onSubmit}>
<input 
onChange ={onChange} required/>
<button id = 'dig'>
Find name
</button>
</form>
)

//This handles the table of elements 
const Table = ({users, onDismiss}) => (
    <div className ="hold">
    <div className="table-row">
    <span className ="table-length">
    Name
    </span>
    <span className = "table-length">
    Username
    </span>
    <span className ="table-length">
     email
     </span>
     </div>

     {users.map((item) => 
( 
<div className = "column-row" key={item.username}>
<span className= "table-length">
{item.name}
</span>
<span className = "table-length">
{item.username}
</span>
<span className="table-length">
{item.email}
</span>
<span className ="button-object">
<button
onClick ={(h) => onDismiss(h, item.username)}>
Remove
</button>
</span>

</div>
)
     )}
     </div>
)


//This governs the three input areas for entering a new account
const Add  = ({onSubmit, onChange, newMembers}) =>
<form id = "Adding" 
className = "row-add"
onSubmit={onSubmit}>

 <input name="name" 
 className="userInput" 
 placeholder="Enter Name" 
 value={newMembers.name} 
 onChange={onChange} required />

        <input name="username"
        className="userInput" 
        placeholder="Enter unique Username" 
        value={newMembers.username} 
        onChange={onChange} required />

        <input type="email" 
         name="email" 
         className="userInput" 
         placeholder="Enter Email Address"
         value={newMembers.email} 
         onChange={onChange} required />
        <button className="createUser">
        Create
        </button>
    </form>


//This handles errors 
const Error = ({error}) =>((error === '') ? '':
<span classname ="whoops">
{error}
</span>
)


