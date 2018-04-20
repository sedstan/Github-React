import React,{ Component } from "react";
import './profileCard.css';
import InnerCard from "../innerCard/innerCard";
import Image from "../image/image";
import {GoLocation}  from 'react-icons/lib/go'
import {GoOrganization}  from 'react-icons/lib/go'
import {GoMail}  from 'react-icons/lib/go'

class ProfileCard extends Component {
	render() {
    console.log(this.props.data.current);
		return (
        <section className="profile">
          <div className="card-picture">
            <Image />
          </div>
          <div className="card card-profile">
            {this.props.data.current && <h2><InnerCard data={this.props.data.current.name } /></h2>}
            {this.props.data.current && <p><InnerCard data={this.props.data.current.bio} /></p>}
            <GoLocation />{this.props.data.current &&<p><InnerCard data={this.props.data.current.location} /></p> }
            <GoOrganization/>{this.props.data.current &&<p><InnerCard data={this.props.data.current.company} /></p> }
            <GoMail/>{this.props.data.current &&<p><InnerCard data={this.props.data.current.email} /></p> }
          </div>
          </section>   
		)
	}
}

export default ProfileCard;
