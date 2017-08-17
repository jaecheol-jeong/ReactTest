import React from 'react';
import axios from 'axios';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Contents extends React.Component {    
    render(){
        let text = "Dev-Server"
        return (
            <div>
                <p>{this.props.title} {text}</p>
                <p>this is contents area..</p>

                <p>
                    <InputBox />
                </p>
            </div>
        );
    }

    //http://localhost:5001/api/Job/Weather

    constructor(props){
        super(props);
        console.log("constructor");

        this.state = {
            posts: []
          };
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
        let url = "http://localhost:5001/api/Job/Weather";
        jQuery.get(url, function(data) {
            console.log(JSON.stringify(data));
        });
    }
}

class InputBox extends React.Component {
    clickHandle() {
        alert(jQuery('#id').val());
    }

    render(){
        var inputStyle = {
            marginRight: "20px"
        };

        return (
            <div>
                <input type="text" name="id" id="id" style={inputStyle} />
                <input type="text" name="pwd" id="pwd"  />&nbsp;
                <InsertButton onAction={this.clickHandle} />
            </div>
        );
    }
}

class InsertButton extends React.Component {    
    render() {
        return (
            <input type="button" name="" value="save" onClick={this.props.onAction}  />
        )
    }
}

export default Contents