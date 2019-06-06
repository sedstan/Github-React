import React from "react";
import './profileCard.scss';
import Image from "../image/image";
import { GoLocation } from 'react-icons/go'
import { GoOrganization } from 'react-icons/go'
import { GoMail } from 'react-icons/go'


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
          {props.data.current && <p><GoOrganization className="card--icons" /><a href='https://github.com/wearewhy'>{props.data.current.company}</a></p>}
          {props.data.current && <p><GoMail className="card--icons" /><a href='mailto:sed@sedkystanleysaid.com'>{props.data.current.email}</a></p>}
      </div>
    </section>
  )
}

export default ProfileCard;

