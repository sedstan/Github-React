import React from "react";
import './profileCard.css';
import Image from "../image/image";
import { GoLocation } from 'react-icons/lib/go'
import { GoOrganization } from 'react-icons/lib/go'
import { GoMail } from 'react-icons/lib/go'


const ProfileCard = (props) => {
  
  return (
    <section className="card">
        <div>
          <Image />
        </div>
      <div className="card--profile">
        {props.data.current && <h2>{props.data.current.name}</h2>}
        {props.data.current && <p> {props.data.current.login}</p>}
        {props.data.current && <p>{props.data.current.bio}</p>}
        {props.data.current && <p><GoLocation className="card--icons" />{props.data.current.location}</p>}
        {props.data.current && <p><GoOrganization className="card--icons" />{props.data.current.company}</p>}
        {props.data.current && <p><GoMail className="card--icons" />{props.data.current.email}</p>}
      </div>
    </section>
  )
}

export default ProfileCard;

