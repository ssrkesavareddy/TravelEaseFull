import React, { Component } from 'react';
//import '../splitinsplit styles/biryanidetailorder.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../styles/details.css'
import { withRouter } from 'react-router-dom';
import Header from '../header';



class Getdetails extends Component {

    constructor() {
        super();
        this.state = {
           
           
            totalPrice: 0
            
        }
    }


    addItemHandler = (x) => {
        x=parseInt(9999);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +x
        
        })
    }

    addItemHandler1 = (y) => {
        y=parseInt(17000);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +y
        
        })
    }

    addItemHandler2 = (z) => {
        z=parseInt(50000);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +z
        
        })
    }


    isDate = (val) => {
        return Object.prototype.toString.call(val) === '[object Date]';
    }

    isObj = (val) => {
        return typeof val === 'object';
    }

    stringifyValue = (value) => {
        if (this.isObj(value) && !this.isDate(value)) {
            return JSON.stringify(value);
        } else {
            return value;
        }
    }

    buildForm = (details) => {
        const { action, params } = details;
        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', action);
        Object.keys(params).forEach(totalPrice => {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', totalPrice);
            input.setAttribute('value', this.stringifyValue(params[totalPrice]));
            form.appendChild(input);
        })  
        return form;
    }

    postTheInformationToPaytm = (info) => {
        // build the form data
        const form = this.buildForm(info);

        // attach in the request body
        document.body.appendChild(form);

        // submit the form
        form.submit();

        // destroy the form
        form.remove();

    }
   
    getChecksum = (data) => {
        return fetch(`http://localhost:5000/payment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
            return resp.json();
        })
        .catch(err => {
            console.log(err);
        });
    }

    paymentHandler = () => {
        // add the logic to make the payment

        // (1) make API call to the BE and get the payment checksum
        const data = {
            amount: this.state.totalPrice,
            email: 'mk1240598@gmail.com.com',
            mobileNo: '7995356278'
        }

        this.getChecksum(data)
            .then(result => {
                // (2) go to the paytm website, on the paytm website, finish the payment
                let information = {
                    action: 'https://securegw-stage.paytm.in/order/process',
                    params: result
                }
                this.postTheInformationToPaytm(information);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const {  totalPrice } = this.state;
        return (
            <>
            <Header />
            <div className='container mt-4 mb-4 biryaniorders'>
            <Carousel showThumbs={false} className='mt-2 birorderimages'>
       <div>
        <img src="https://imgs.search.brave.com/NkbbIHYBTzORhUKNfYCn5wzSoLsp_b6akUm1otrNlls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8yNi8xOS8zNy9s/YW5kc2NhcGUtMjE3/NjM0OF82NDAuanBn" />
        
    </div>
    <div>
        <img src="https://imgs.search.brave.com/GmPfAA7x5Uyp_EcJGIXwnD4GF_vOsSxlQI6ls5j0k2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/My8wNy8xNS8zNi9r/YXNobWlyLTkxMjE4/XzY0MC5qcGc" />
        
    </div>
    <div>
        <img src="https://imgs.search.brave.com/IMWgt6RRmNAIVsO2FW3Dr3w_cJ7YPFhUabIMaHm3PEM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NzI4ODI4OC9waG90/by9pbmRpYS1rYXNo/bWlyLXRyYXZlbC1m/bG9hdGluZy1tYXJr/ZXQtZGFsLWxha2Ut/c3JpbmFnYXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWpL/VVpEdnd3ZEk3UHFE/YTg0cDY3SXR4b2Nu/V0Y1SFdsU2VHTkFY/dnFuaE09" />
       
    </div>
 </Carousel>

 <div className='biryanirestdetails'>
     <h1 className='biryanirestName mt-2'>Kashmir Package</h1>
     <text className='biryanirestMenu'>Katra,Sonamarg,Gulmarg,Srinagar....</text><br/>
     <text className='biryanirestMenu mt-1'>kashmir</text>
 </div>

 <div className="myTabs mt-4">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab >Order Online</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className='row-12 row-xxl-12 row-lg-12 row-md-12 row-xs-12 aboutbiryanirestplace'>
                                            <h3 className='aboutbiryanirestplaceheading'>About this place</h3>
                                            <h6 className='aboutbiryanirestplacetext text-secondary'>this place was very famous for its landscapes</h6>

                                            <h3 className='aboutbiryanirestplaceMenu mt-3'>Agenda</h3>
                                            <div className='aboutbiryanirestplaceMenuforrest pt-2 mt-3'>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Dal lake safari and local sightseeing   : Day 1</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Dung waterfall and gulmarg   : Day 2</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>doodhpatri and its nature elegance   : Day 3</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>sonamarg and its landscapes   : Day 4</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>pahalgam along with apple farms :  Day 5</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Vaishno devi mata dharshan   : Day 6</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Reaching to jammu with all memories:Day7</text><br/>
                                            </div>

                                            <h3 className='aboutbiryanirestcuisine mt-4'>Places</h3>
                                            <text className='cusinetestrest text-secondary'>Srinagar,Pahalgam and manymore...</text>

                                            <h3 className='aboutbiryanirestcost mt-4'>Average Cost</h3>
                                            <text className='aboutbiryanirestprice'>Rs.15000 for two people(approx.)</text>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className='container-fluid addingbiryaniitems mt-5'>
                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://imgs.search.brave.com/GmPfAA7x5Uyp_EcJGIXwnD4GF_vOsSxlQI6ls5j0k2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/My8wNy8xNS8zNi9r/YXNobWlyLTkxMjE4/XzY0MC5qcGc' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Solo tour package</h5>
                                                     <p>Rs.9999</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(x) => this.addItemHandler()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://imgs.search.brave.com/NkbbIHYBTzORhUKNfYCn5wzSoLsp_b6akUm1otrNlls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8yNi8xOS8zNy9s/YW5kc2NhcGUtMjE3/NjM0OF82NDAuanBn' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Couple friendly</h5>
                                                     <p>Rs.17000</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(y) => this.addItemHandler1()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://imgs.search.brave.com/IMWgt6RRmNAIVsO2FW3Dr3w_cJ7YPFhUabIMaHm3PEM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NzI4ODI4OC9waG90/by9pbmRpYS1rYXNo/bWlyLXRyYXZlbC1m/bG9hdGluZy1tYXJr/ZXQtZGFsLWxha2Ut/c3JpbmFnYXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWpL/VVpEdnd3ZEk3UHFE/YTg0cDY3SXR4b2Nu/V0Y1SFdsU2VHTkFY/dnFuaE09' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Group tour(6 min)</h5>
                                                     <p>Rs.50000</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(z) => this.addItemHandler2()}>add</button>
                                               </div>
                                               
                                           </div>

                                           

                                           <div className="mt-3 biryaniaddingname fs-4">
                                              Subtotal <span className="m-4">&#8377; { totalPrice }</span>
                                              <button className="btn btn-danger float-end" onClick={() => this.paymentHandler()}>Pay Now</button>
                                            </div>
                                           
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
            </div>

           
            </>
        );
    }
}

export default Getdetails;