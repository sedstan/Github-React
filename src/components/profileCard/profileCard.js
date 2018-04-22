import React from "react";
import './profileCard.css';
import Image from "../image/image";
import { GoLocation } from 'react-icons/lib/go'
import { GoOrganization } from 'react-icons/lib/go'
import { GoMail } from 'react-icons/lib/go'
import { GoMention } from 'react-icons/lib/go'


const ProfileCard = (props) => {
  console.log(props.data.current);
  
  return (
    <section className="card">
      <div>
        <Image />
      </div>
      <div className="card--profile">
         {props.data.current && <h2>{props.data.current.name}</h2>}
        <GoMention />{props.data.current && <p> {props.data.current.login}</p>}
         {props.data.current && <p>{props.data.current.bio}</p>}
        <GoLocation />{props.data.current && <p>{props.data.current.location}</p>}
        <GoOrganization />{props.data.current && <p>{props.data.current.company}</p>}
        <GoMail />{props.data.current && <p>{props.data.current.email}</p>}
      </div>
    </section>
  )
}

export default ProfileCard;

