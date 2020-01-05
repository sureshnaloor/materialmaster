import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class CreateMaterial extends Component {
    constructor(){
        super();
        this.state = {
            received_flag:'',
            MaterialGroup:'',
            MaterialCode:'',
            closeFlag:'',
            Industry: '',
            OldMaterialNo:'',
            MaterialDescription:'',
            UOM:'',
            MaterialType:'',
            StatusFlag:'',
            transactionFlag:''
        }
    }

  onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
  onSubmit = e => {
        e.preventDefault();

        const data = {
            received_flag:this.state.received_flag,
            MaterialGroup:this.state.MaterialGroup,
            MaterialCode:this.state.MaterialCode,
            closeFlag:this.state.closeFlag,
            Industry: this.state.Industry,
            OldMaterialNo:this.state.OldMaterialNo,
            MaterialDescription:this.state.MaterialDescription,
            UOM:this.state.UOM,
            MaterialType:this.state.MaterialType,
            StatusFlag:this.state.StatusFlag,
            transactionFlag:this.state.transactionFlag
        };

        
  axios.post('http://localhost:5000/api/matcodes/', data, {headers: {'Content-Type': 'application/json'}} )
            .then(res => {
                this.setState({
                    received_flag:'',
                    MaterialGroup:'',
                    MaterialCode:'',
                    closeFlag:'',
                    Industry: '',
                    OldMaterialNo:'',
                    MaterialDescription:'',
                    UOM:'',
                    MaterialType:'',
                    StatusFlag:'',
                    transactionFlag:''
                })

                // this.prop.history.push('/');
            })
                .catch(err => {
                    console.log(`there is some error in mat creation, ${err.message}`)
                })
          };
  render(){
        return (
            <>
            <h5> This is create material component </h5> 
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add new Material</h1>
              
              <form noValidate onSubmit={this.onSubmit}>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Material Group'
                    name='MaterialGroup'
                    className='form-control'
                    value={this.state.MaterialGroup}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Material Code'
                    name='MaterialCode'
                    className='form-control'
                    value={this.state.MaterialCode}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Industry'
                    name='Industry'
                    className='form-control'
                    value={this.state.Industry}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this material in 40 char or less'
                    name='MaterialDescription'
                    className='form-control'
                    value={this.state.MaterialDescription}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Unit of Measure'
                    name='UOM'
                    className='form-control'
                    value={this.state.UOM}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Material Type'
                    name='MaterialType'
                    className='form-control'
                    value={this.state.MaterialType}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-2"
                />
              </form>
              <hr />
              <br /> 
          </div>

          </>
          
        )
    }
}

export default CreateMaterial