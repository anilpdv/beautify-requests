import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,Button
} from "reactstrap";
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import axios from 'axios'
import ReactJson from 'react-json-view'

class Navs extends React.Component {
  state = {
    tabs: 1,
    baseUrl : 'http://52.250.126.186:8080',
    path:'/cars',
    error:"",
    data:{},
    theme:''
  };

  fetchData = async () => {
    try{
      if(this.state.baseUrl && this.state.path){
      const url = this.state.baseUrl + this.state.path
      const res = await axios.get(url)
      console.log(res.data)
      this.setState({data:res.data})
 
      }else{
        this.setState({error:"should have baseurl and path"})
      }
   }catch(err){
     this.setState({error:"error while fetching"})
   }
  }


  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  onChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
               Get 
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
                
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
               post 
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <>
        {this.state.tabs===1 ? <Form>  <Row>
<Col md="auto">
              <FormGroup className="">
                <Input
                  className=""
                  placeholder="path"
                  type="text"
                  name="baseUrl"
                  onChange={this.onChange}
                  value={this.state.baseUrl}
                />
              </FormGroup>
            
            </Col>
            <Col md="auto">
              <FormGroup className="">
                <Input
                  className=""
                  placeholder="path"
                  type="text"
                  name="path"
                  onChange={this.onChange}
                  value={this.state.path}
                />
              </FormGroup>
            
            </Col>
            <Col md="auto">
<Button color="primary" className="ml-3" type="button" onClick={() => this.fetchData()}>
              Get 
            </Button>
            </Col>
          </Row> </Form>: ''}
        </>
<>
        {this.state.tabs===3 ? <Form>  <Row>
<Col md="auto">
              <FormGroup className="">
                <Input
                  className=""
                  placeholder="path"
                  type="text"
                  name="baseUrl"
                  onChange={this.onChange}
                  value={this.state.baseUrl}
                />
              </FormGroup>
            
            </Col>
            <Col md="auto">
              <FormGroup className="">
                <Input
                  className=""
                  placeholder="path"
                  type="text"
                  onChange={this.onChange}
                  name="path"
                  value={this.state.path}
                />
              </FormGroup>
            
            </Col>
            <Col md="auto">
<Button color="primary" className="ml-3" type="button" onClick={() => this.fetchData()}>
             post 
            </Button>
            </Col>
          </Row> </Form>: ''}
        </>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
              <div className="mb-4">
        <Button color="secondary" size="sm"  type="button" onClick={() => this.setState({theme: ''})}>
        light
        </Button>
        <Button color="default" size="sm" type="button" onClick={() => this.setState({theme:'hopscotch'})}>
        dark
        </Button>
      </div>
      <div className="p-4 " style={{backgroundColor:this.state.theme ==='' ? 'white' :"rgb(50, 41, 49)"}}> 
        <ReactJson theme={this.state.theme} src={this.state.data} />
      </div>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                            <div className="mb-4">
        <Button color="secondary" size="sm"  type="button" onClick={() => this.setState({theme: ''})}>
        light
        </Button>
        <Button color="default" size="sm" type="button" onClick={() => this.setState({theme:'hopscotch'})}>
        dark
        </Button>
      </div>
      <div> 
        <ReactJson theme={this.state.theme} src={this.state.data} />
      </div>
 
             </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Navs;
