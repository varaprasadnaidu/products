import React,{component}  from 'react';
import Axios from 'axios'
  class Phone extends component{

    constructor(props){
        super(props);
        this.state={
            phone:[],
            selectedData:null
        }
    }
    componentDidMount=()=>{
        Axios.get("http://demo3399368.mocable.io/testpdf")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                selectedData:res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    handlePhone=(data)=>{
        console.log("handledata",data)
        this.setState({
            selectedData:data
            
        })

    }
    render(){
        return(
            <div>
                <button className="ui primary button" onclick={()=>this.handlePhone(this.state.selectedData)}>Phone</button>
                </div>

                
        )
    }
} 
export default Phone; 
