import React from 'react';
import PropTypes from 'prop-types';
import './profileCard.scss';
import { GoLocation, GoOrganization, GoMail } from 'react-icons/go';
import Image from '../image/image';


const ProfileCard = ({ data }) => (
  <section className="card">
    <div>
      <Image />
    </div>
    <div className="card__profile">
      {data.current && <h2>{data.current.name}</h2>}
      {data.current && (
        <p>
          {' '}
          {data.current.login}
        </p>
      )}
      {data.current && <p>{data.current.bio}</p>}
      {data.current && (
        <p>
          <GoLocation className="card__icons" />
          {data.current.location}
        </p>
      )}
      {data.current && (
        <p>
          <GoOrganization className="card__icons" />
          <a href="https://github.com/wearewhy">
            {data.current.company}
          </a>
        </p>
      )}
      {data.current && (
        <p>
          <GoMail className="card__icons" />
          <a href="mailto:sed@sedkystanleysaid.com">
            {data.current.email}
          </a>
        </p>
      )}
    </div>
  </section>
);

ProfileCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProfileCard;