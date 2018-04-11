import React,{ Component } from "react";
import './profileCard.css';
import InnerCard from "../innerCard/innerCard";
import Image from "../image/image";

class ProfileCard extends Component {
	render() {
    console.log(this.props.data.current);
		return (
        <section className="profile">
          <div className="card-picture">
            <Image />
          </div>
          <div className="card-profile">
            {this.props.data.current && <h3><InnerCard data={this.props.data.current.name } /></h3>}
            {this.props.data.current && <p><InnerCard data={this.props.data.current.bio} /></p>}
            {this.props.data.current &&<p><InnerCard data={this.props.data.current.location} /></p> }
          </div>
          </section>   
		)
	}
}

export default ProfileCard;
